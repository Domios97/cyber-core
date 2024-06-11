import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import Auth from "./Auth";

class OrderController {
    static async placeOrder(cartItems, customer) {
        const userToken =  Auth.isLogedIn();
        const userInfo =  await Auth.me();

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
                "user_id": userInfo.data.id,
                "name": customer.name,
                "last_name": customer.lastName,
                "phon_number": customer.phonNumber,
                "address_city": customer.addressCity,
                "amount": customer.amount,
            }),
        });

        const responseBody = await response.json();
        return responseBody;
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

    static async getAll(){

        var userToken = Auth.isLogedIn();

        var response = await fetch(ApiRequestGenerator.generateUrl("order/all?token="+userToken), {
            method: "get",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
        });
        const responseBody = await response.json();
        return responseBody;
    }
    
    static async accept(userId, orderId){

        var userToken = Auth.isLogedIn();

        var response = await fetch(ApiRequestGenerator.generateUrl("order/accept"), {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body:JSON.stringify({
               "token":userToken, 
               "user_id": userId, 
               "order_id": orderId, 
            })        
        });
        const responseBody = await response.json();
        return responseBody;
    }
    static async reject(userId, orderId){

        var userToken = Auth.isLogedIn();

        var response = await fetch(ApiRequestGenerator.generateUrl("order/reject"), {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
               "token":userToken, 
               "user_id": userId, 
               "order_id": orderId, 
            })
        });
        const responseBody = await response.json();
        return responseBody;
    }
    static async cancelOrder(orderId){

        var userToken = Auth.isLogedIn();

        var response = await fetch(ApiRequestGenerator.generateUrl("order/cancel/"+orderId+"?token="+userToken), {
            method: "get",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
        });
        const responseBody = await response.json();
        return responseBody;
    }
    static async getOrdersByUserId(){
        
        var userToken = Auth.isLogedIn();
        var userInfo = await Auth.me();
        const userId = userInfo.data.id;
        var response = await fetch(ApiRequestGenerator.generateUrl("order/userOrders/"+userId+"?token="+userToken), {
            method: "get",
            headers: {
                "Accept": "application/json",
            },
        });
        const responseBody = await response.json();
        return responseBody;
    }

    
    
}

export default OrderController;