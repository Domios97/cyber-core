import ApiRequestGenerator from "../helperclasses/ApiRequestGenerator";
import Auth from "./Auth";

class ResetPasswordController {
  //   static async sendToken({ email }) {
  //     try {
  //       const url = new URL(ApiRequestGenerator.generateUrl("sendtoken"));
  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: email,
  //         }),
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       return data;
  //     } catch (error) {
  //       console.error(error);
  //       return error;
  //     }
  //   }

  //   static async verifyToken({ token, email }) {
  //     try {
  //       const url = new URL(ApiRequestGenerator.generateUrl("verifytoken"));
  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: email,
  //           reset_token: token,
  //         }),
  //       });
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       console.error(error);
  //       return error;
  //     }
  //   }

  //   static async resetPassword({ token, email, newPassword }) {
  //     try {
  //       const url = new URL(ApiRequestGenerator.generateUrl("resetpassword"));
  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify({
  //           reset_token: token,
  //           email: email,
  //           reset_password: newPassword,
  //         }),
  //       });
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       console.error(error);
  //       return error;
  //     }
  //   }
  static async changePassword(currentPassword, newPassword) {

    const userToken = Auth.isLogedIn();
    const user = await Auth.me();

    const url = new URL(ApiRequestGenerator.generateUrl("changepassword"));
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: userToken,
        user_id: user.data.id,
        current_password: currentPassword,
        new_password: newPassword,
      }),
    });
    const responseBody = await response.json();
    return responseBody;
  }
}

export default ResetPasswordController;
