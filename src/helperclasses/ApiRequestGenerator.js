


class ApiRequestGenerator {

   static baseUrl = "http://localhost:8000/api/";
     
  static generateUrl (sufixPath){
    return this.baseUrl + sufixPath;
  }


}

export default ApiRequestGenerator;