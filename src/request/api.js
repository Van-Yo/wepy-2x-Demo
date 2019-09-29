class Api{
    constructor(){}
    getBaseUrl(ENV){
        let baseUrl = '';
        switch(ENV){
            case '':
                baseUrl = 'https://www.madcoder.cn';
                break;
        }
        return baseUrl;
    }
    getUrlList(){
        let config = {};
        const baseUrl = this.getBaseUrl('');
        config.testRequestApi = `${baseUrl}/tests/sleep.php`;
        return config;
    }
}
export default new Api();