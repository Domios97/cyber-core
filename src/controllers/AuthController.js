import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import StorageManager from "../helperclasses/StorageManager";
import Auth from "./Auth";

class AuthController {

    async login(email, password) {
        var response = await fetch(ApiRequestGenerator.generateUrl("login"), {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ 
                email: email,
                password: password
            })
        });
        const responseBody = await response.json();
        return responseBody;
    }
    
    async signUp(email, password){
        var response = await fetch(ApiRequestGenerator.generateUrl("register"), {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ 
                email: email,
                password: password
            })
        });
        const responseBody = await response.json();
        return responseBody;
    }
    static async logOut(){
        const userToken = Auth.isLogedIn();
        var response = await fetch(ApiRequestGenerator.generateUrl("logout"), {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ 
                token : userToken
            })
        });
        const responseBody = await response.json();
        StorageManager.removeToken();
        return responseBody;
    }
}

export default AuthController;