import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import JwtValidator from "../helperclasses/JwtValidator";
import StorageManager from "../helperclasses/StorageManager";


class Auth {
   
    static tokenKeyName = "user_access_token";
    
    static isLogedIn() {
        const userToken = localStorage.getItem(Auth.tokenKey);
    
        if (!userToken) {
          return null;
        }
    
        const expireAt = JwtValidator.getJsonJwtPayload(userToken);
    
        if (JwtValidator.hasExpired(expireAt.exp)) {
          localStorage.removeItem(Auth.tokenKey);
          return null;
        }
    
        return userToken;
    }
  static async me(){
    var response = await fetch(ApiRequestGenerator.generateUrl("me"), {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            token : StorageManager.getUserToken(),
        })
    });
    const responseBody = await response.json();
    return responseBody;
  }
}

export default Auth ; 