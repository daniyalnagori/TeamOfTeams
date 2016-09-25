import {Component} from '@angular/core';

class Products {
    name : string;
    price: number;
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

@Component({
    selector: 'loop',
    template: `<input type="text" #name>
    <input type="text" #price>
<button (click)="articleAdd(name,price)">save</button>
<div class="ui grid posts"> 
 <reddit-article 
 *ngFor="let article of product" 
[product]="article">
 </reddit-article> 
</div> 
`
})

export class ArticleLooping{
    product :Products[];
    constructor(){
        this.product = [new Products("daniyal",123454)]
    }
    articleAdd(name,price){
        console.log(`the name is ${name.value}`);
        this.product.push(new Products(name.value,price.value));
}
}
@Component({
    selector: 'reddit-article ',
    inputs : ['product'],
    template: `<a href="#">{{ product.name }} </a>
    <a href="#">{{product.price}}</a>
    <br>
    `
})

export class ArticleShow{
    product: Products;
    getIt(){
        
    }
}