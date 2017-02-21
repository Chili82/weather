import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';



@Component({
    selector: 'my-druga',
    template: `<h2>All Products</h2>
                <ul>
                    <li *ngFor="let product of products">{{product.Name}}: {{product.Price|currency:'USD':true}}</li>
                </ul>
                <div style="width:500px">
                    Product Name: <input type="text" #prod >
                        <button (click)="onSearch(prod.value)">Search</button>
                </div>`,
    providers: [ProductService]
    
})

export class DrugaComponent implements OnInit {

    products: Product[];

    constructor(private _productService: ProductService) { }

    onSearch(product: string) {
        this._productService.getProductsByName(product)
            .subscribe(resProductData => this.products = resProductData);
    }

    ngOnInit() {
        
        this._productService.getProducts()
            .subscribe(resProductData => this.products = resProductData);
        
    }
}