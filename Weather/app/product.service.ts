import { Product } from './product';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ProductService {

    constructor(private _http: Http) { }

    private products: Product[] = [];

    getProducts() {
        return this._http.get('http://localhost:9546/api/product')
            .map(response => response.json());
    }

    getProductsByName(name: string) {
        return this._http.get('http://localhost:9546/api/product/' + name.toLowerCase())
            .map(response => response.json());
    }

}