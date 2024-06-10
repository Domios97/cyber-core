import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import Auth from "./Auth";


class CatigoryController{

    static async getAll(){
        var userToken = Auth.isLogedIn();
        var response = await fetch(ApiRequestGenerator.generateUrl("catigory/all?token="+userToken), {
            method: "get",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
        });
        const responseBody = await response.json();
        return responseBody;
    }

    static async create(name , image){
      
       var userToken = Auth.isLogedIn();

       let formData = new FormData();
       formData.append("name", name);
       formData.append("image", image);
       formData.append("token", userToken);

       var response = await fetch(ApiRequestGenerator.generateUrl("catigory/create"), {
        method: "POST",
        headers: {
            "Accept": "application/json",
            // "Content-Type": "application/json" 
        },
        body : formData
    });
    const responseBody = await response.json();
    return responseBody;
    }


    static async delete(catigoryId){
        var userToken = Auth.isLogedIn();
        var response = await fetch(ApiRequestGenerator.generateUrl("catigory/delete/"+catigoryId), {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body : JSON.stringify({
              "token" : userToken
            })
        });
        const responseBody = await response.json();
        return responseBody;
    }

    

}

export default CatigoryController;