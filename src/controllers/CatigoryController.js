import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import StorageManager from "../helperclasses/StorageManager";
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

    

}

export default CatigoryController;