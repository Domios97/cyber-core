



class StorageManager{
   
  static tokenKeyName = "user_access_token";
    
  static storeToken(token){
    localStorage.setItem(this.tokenKeyName , token);
  }
  static removeToken(){
    localStorage.removeItem(this.tokenKeyName);
  }

  static getUserToken(){
    return localStorage.getItem(this.tokenKeyName);
  }  
} 

export default StorageManager;