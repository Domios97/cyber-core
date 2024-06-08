import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import StorageManager from "../helperclasses/StorageManager";
import Auth from "./Auth";


class ProductController{



   static async getAll(){

    var userInfo = await Auth.me();
    var userToken = Auth.isLogedIn();
    var userId = userInfo.data.id;
    var response = await fetch(ApiRequestGenerator.generateUrl("product/all?user_id="+userId+"&token="+userToken), {
        method: "get",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
    });
    const responseBody = await response.json();
    return responseBody;
   }

   static async create(product = {}, catigoryId){

    var userInfo = await Auth.me();
    var userToken = Auth.isLogedIn();
    var userId = userInfo.data.id;
    var response = await fetch(ApiRequestGenerator.generateUrl("product/create"), {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
        body : JSON.stringify({
           "admin_id" : userId , 
           "token": userToken,
           "color" : product.color, 
           "price" : product.price, 
           "description" : product.description, 
           "contete" : product.contete, 
           "catigory_id": catigoryId,
           "name": product.name, 
           "images[]": product.images
        })
    });
    const responseBody = await response.json();
    return responseBody;
   }

   static async update(product = {}, catigoryId){

    var userInfo = await Auth.me();
    var userToken = Auth.isLogedIn();
    var userId = userInfo.data.id;
    var response = await fetch(ApiRequestGenerator.generateUrl("product/update"), {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
        body : JSON.stringify({
           "admin_id" : userId , 
           "token": userToken,
           "color" : product.color, 
           "price" : product.price, 
           "description" : product.description, 
           "contete" : product.contete, 
           "catigory_id": catigoryId,
           "name": product.name, 
           "images[]" : product.images,
           "product_id": product.id,
        })
    });
    const responseBody = await response.json();
    return responseBody;
   }

   async delete (){
    
    var userInfo = await Auth.me();
    var userToken = Auth.isLogedIn();
    var userId = userInfo.data.id;
    var response = await fetch(ApiRequestGenerator.generateUrl("product/delete/"+userId), {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
        body : JSON.stringify({
           "token": userToken,
        })
    });

    const responseBody = await response.json();
    return responseBody;
   }
}

export default ProductController;