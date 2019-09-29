import http from './http';
import Api from './api';

class HomeRequest{
    constructor(){
        this.config = Api.getUrlList();
    }
    testRequestApi(data){
        return http(this.config.testRequestApi,data);
    }
}
export default new HomeRequest()