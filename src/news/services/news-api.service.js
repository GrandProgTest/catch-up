// News API Service

import axios from 'axios';

const http= axios.create({
    baseURL:'https://newsapi.org/v2'
});

export class NewsApiService {
    apiKey ="fecf4feeffa64e4da682e7d268612ce5"
    logoApi=new LogoApiService();

    //methods

    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(source);
    }
}