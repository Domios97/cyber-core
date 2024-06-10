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

    var  formData = new FormData(); 
    formData.append("admin_id", userId);
    formData.append("token", userToken);
    formData.append("color", product.color);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("contete", product.contete);
    formData.append("catigory_id", catigoryId);
    formData.append("name", product.name);
    for(var index = 0 ; index < product.images.length; index++){
        formData.append(`images[${index+1}]`, product.images[index]);
    }
    var response = await fetch(ApiRequestGenerator.generateUrl("product/create"), {
        method: "post",
        headers: {
            "Accept": "application/json",
            // "Content-Type": "application/json", 
        },
        body : formData,
    });
    const responseBody = await response.json();
    return responseBody;
   }

   static async update(product = {}, catigoryId){

    var userInfo = await Auth.me();
    var userToken = Auth.isLogedIn();
    var userId = userInfo.data.id;
    var  formData = new FormData(); 
    formData.append("admin_id", userId);
    formData.append("token", userToken);
    formData.append("color", product.color);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("contete", product.contete);
    formData.append("catigory_id", catigoryId);
    formData.append("name", product.name);
    formData.append("product_id", product.id);
    for(var index = 0 ; index< product.images.length; index++){
        formData.append(`images[${index+1}]`, product.images[0]);
    }
    var response = await fetch(ApiRequestGenerator.generateUrl("product/update"), {
        method: "post",
        headers: {
            "Accept": "application/json",
            // "Content-Type": "application/json" 
        },
        body : formData
    });
    const responseBody = await response.json();
    return responseBody;
   }

   static async delete (productId){
    
    var userInfo = await Auth.me();
    var userToken = Auth.isLogedIn();
    var userId = userInfo.data.id;
    var response = await fetch(ApiRequestGenerator.generateUrl("product/delete/"+productId), {
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