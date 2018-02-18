export class APIArticle {

    constructor(articleObj){
        if( !_.isUndefined(articleObj) && !_.isNull(articleObj) && _.isObject(articleObj) ){
            this.articleObj = new ReactiveObject(articleObj);
        } else {
            throw "impossible creation!!!! Article-Object or ArticleId is required!";
        }
    }

getCurrencyCode() {
        if( _.isUndefined(this.currencyCode) || _.isNull(this.currencyCode) ){
            try{
                this.currencyCode = this.articleObj.sellPrice[0].money.currencyCode.toUpperCase();
            }catch(e){
                this.currencyCode = "EUR";
            }
        }
        return this.currencyCode
    }

}