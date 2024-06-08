import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import Auth from "./Auth";

class CartController {


    static async getAll(){
        
        var userToken = Auth.isLogedIn();
        var userInfo = await Auth.me();
        var userId = userInfo.data.id;
        var response = await fetch(ApiRequestGenerator.generateUrl("product/inCartItems?token="+userToken+"&user_id="+userId), {
            method: "get",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
        });
        const responseBody = await response.json();
        return responseBody;

    }
    static async  addToCart(productId, color) {
        let userToken = Auth.isLogedIn();
        let userInfo = await Auth.me();
        let userId = userInfo.data.id;

        let response = await fetch(ApiRequestGenerator.generateUrl("product/addToCart"), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'user_id': userId,
                'product_id': productId,
                'color': color,
                'token': userToken
            })
        });
    
        let responseBody = await response.json();
        if (responseBody.status_code === 202) {
            console.log("Products added to cart successfully...");
        } else {
            console.log("Something error, please try again.");
        }
        console.log(responseBody);
        return responseBody;
    }
    
    static async updateCartItems(updatedData) {
      
        var url = ApiRequestGenerator.generateUrl("cartItems/update");
    
       
        var userToken = Auth.isLogedIn();
        var userInfo = await Auth.me();
    
       
        var response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_id": userInfo.data.id,
                "updated_cart": JSON.stringify(updatedData),
                "token": userToken
            })
        });
    
      
        var responseBody = await response.json();
        console.log(responseBody);
        return responseBody;
    }

    static async deleteFromCart(productId) {
        let userInfo = await Auth.me();
        let userToken = Auth.isLogedIn();
    
        let userId = userInfo.data.id;
        userToken = userToken.toString();
    
        let response = await fetch(ApiRequestGenerator.generateUrl("product/deleteFromCart"), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'user_id': userId,
                'product_id': productId,
                'token': userToken
            })
        });
        let responseBody = await response.json();
        console.log(responseBody);
        return responseBody;
    }
    
    
}

export default CartController;