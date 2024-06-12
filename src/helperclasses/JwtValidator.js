


class JwtValidator {

    static getJsonJwtPayload(token) {
      if(token!=null){
        const payloadBase64 = token.split('.')[1]; 
        const payload = decodeURIComponent(atob(payloadBase64)); 
        return JSON.parse(payload); 
      }
      return [];
    }
  
    static hasExpired(timeExpiration) {
      return Math.floor(Date.now() / 1000) > timeExpiration;
    }
  }

  export default JwtValidator;