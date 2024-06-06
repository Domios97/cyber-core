import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";

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
}

export default AuthController;