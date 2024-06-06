import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import StorageManager from "../helperclasses/StorageManager";
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
    
    async updateCartItems(updatedData) {
      
        var url = ApiRequestGenerator.genirateUrl("cartItems/update");
    
       
        var userToken = Auth.isLogedIn();
        var userInfo = await Auth.me();
    
       
        var response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_id": userInfo.data.id.toString(),
                "updated_cart": JSON.stringify(updatedData),
                "token": userToken
            })
        });
    
      
        var responseBody = await response.json();
      
    
        
        console.log("Cart item updated successfully: ");
    
        return responseBody;
    }
    
}

export default CartController;