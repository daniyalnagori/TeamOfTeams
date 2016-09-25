"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Products = (function () {
    function Products(name, price) {
        this.name = name;
        this.price = price;
    }
    return Products;
}());
var ArticleLooping = (function () {
    function ArticleLooping() {
        this.product = [new Products("daniyal", 123454)];
    }
    ArticleLooping.prototype.articleAdd = function (name, price) {
        console.log("the name is " + name.value);
        this.product.push(new Products(name.value, price.value));
    };
    ArticleLooping = __decorate([
        core_1.Component({
            selector: 'loop',
            template: "<input type=\"text\" #name>\n    <input type=\"text\" #price>\n<button (click)=\"articleAdd(name,price)\">save</button>\n<div class=\"ui grid posts\"> \n <reddit-article \n *ngFor=\"let article of product\" \n[product]=\"article\">\n </reddit-article> \n</div> \n"
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleLooping);
    return ArticleLooping;
}());
exports.ArticleLooping = ArticleLooping;
var ArticleShow = (function () {
    function ArticleShow() {
    }
    ArticleShow.prototype.getIt = function () {
    };
    ArticleShow = __decorate([
        core_1.Component({
            selector: 'reddit-article ',
            inputs: ['product'],
            template: "<a href=\"#\">{{ product.name }} </a>\n    <a href=\"#\">{{product.price}}</a>\n    <br>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleShow);
    return ArticleShow;
}());
exports.ArticleShow = ArticleShow;
//# sourceMappingURL=articleLooping.js.map