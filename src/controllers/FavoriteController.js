import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import Auth from "./Auth";


class FavoriteController {

    
  static async addToFavorite(productId) {
        const userToken = Auth.isLogedIn();
        var userInfo = await Auth.me();
        const url = ApiRequestGenerator.generateUrl("product/addToFavorite");

        if(userToken === null){
            return null;
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "product_id": productId.toString(),
                "token": userToken, 
                "user_id" : userInfo.data.id
            })
        });
        var responseBody = await response.json();
        return responseBody;
    }

    static async popFromFavorite(productId) {
        const userToken = Auth.isLogedIn();
        var userInfo = await Auth.me();
        if (userToken === null) {
            return null;
        }

        const url = ApiRequestGenerator.generateUrl("product/popFromFavorite");

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "product_id": productId.toString(),
                "token": userToken, 
                "user_id" : userInfo.data.id
            })
        });
        var responseBody = await response.json();
        return responseBody;
    }

    static async getFavoriteProducts() {
        const userToken = Auth.isLogedIn();
        var userInfo = await Auth.me();
        if (!userToken) {
            return null;
        }

        const url = ApiRequestGenerator.generateUrl("product/favorite");

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "token": userToken, 
                "user_id" : userInfo.data.id,
            })
        });

        return await response.text();
    }
}