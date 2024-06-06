


class JwtValidator {

    static getJsonJwtPayload(token) {
      const payloadBase64 = token.split('.')[1]; 
      const payload = decodeURIComponent(atob(payloadBase64)); 
      return JSON.parse(payload); 
    }
  
    static hasExpired(timeExpiration) {
      return Date.now() > timeExpiration;
    }
  }

  export default JwtValidator;