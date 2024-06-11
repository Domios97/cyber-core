import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import Auth from "./Auth";


class NotificationController{
  
    static async getAll() {

        let userInfo = await Auth.me();
        let userToken = Auth.isLogedIn();
        let userId = userInfo.data.id;

    
        let url = ApiRequestGenerator.generateUrl(`notification/getAll?user_id=${userId}&token=${userToken}`);
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const responseBody = await response.json();
        return responseBody;
    }
    
    static async deleteNotification(notificationId) {
        let userInfo = await Auth.me();
        let userToken = Auth.isLogedIn();
    
        let userId = userInfo.data.id.toString();
    
        let url = ApiRequestGenerator.generateUrl('notification/delete');
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                user_id: userId,
                notification_id: notificationId.toString(),
                token: userToken
            })
        });
        const responseBody = await response.json();
        return responseBody;
    }
    
    // static async updateNotification(isRead) {
    //     let userInfo = await Auth.me();
    //     let user = JSON.parse(userInfo);
    //     let userToken = await Auth.getUserAccessToken();
    
    //     let userId = user.data.id.toString();
    //     userToken = userToken.toString();
    
    //     let url = ApiRequestGenerator.generateUrl('notification/update');
    //     let response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             user_id: userId,
    //             is_read: isRead.toString(),
    //             token: userToken
    //         })
    //     });
    //     return response.text();
    // }
    

}

export default NotificationController;