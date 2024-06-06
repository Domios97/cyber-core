import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import Auth from "./Auth";

class OrderController {
    static async placeOrder(cartItems, customer) {
        const userToken =  Auth.isLogedIn();
        const userInfo =  await Auth.me();

        const user = JSON.parse(userInfo);
        let preparedData = OrderController.prparingItemInfo(cartItems);

        const url = ApiRequestGenerator.generateUrl("order/placeOrder");

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "token": userToken,
                "cart_cached_items": JSON.stringify(preparedData),
                "user_id": user.data.id.toString(),
                "name": customer.name,
                "last_name": customer.last_name,
                "phon_number": customer.phon_number,
                "address_city": customer.full_address,
                "amount": customer.amount.toString(),
            }),
        });

        const responseBody = await response.json();
        if (responseBody.status_code === 202) {
            return true;
        }
        return false;
    }

    static prparingItemInfo(items) {
        let filtredProduct = [];

        for (let item of items) {
            if (item.product.state === 1) {
                filtredProduct.push({
                    "cart_item": item.cart_item,
                    "no_modifyed_item": {
                        "product_id": item.product.id,
                        "contete": item.product.contete,
                    }
                });
            }
        }
        return filtredProduct;
    }
}

export default OrderController;