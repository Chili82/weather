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
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var DrugaComponent = (function () {
    function DrugaComponent(_productService) {
        this._productService = _productService;
    }
    DrugaComponent.prototype.onSearch = function (product) {
        var _this = this;
        this._productService.getProductsByName(product)
            .subscribe(function (resProductData) { return _this.products = resProductData; });
    };
    DrugaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (resProductData) { return _this.products = resProductData; });
    };
    return DrugaComponent;
}());
DrugaComponent = __decorate([
    core_1.Component({
        selector: 'my-druga',
        template: "<h2>All Products</h2>\n                <ul>\n                    <li *ngFor=\"let product of products\">{{product.Name}}: {{product.Price|currency:'USD':true}}</li>\n                </ul>\n                <div style=\"width:500px\">\n                    Product Name: <input type=\"text\" #prod >\n                        <button (click)=\"onSearch(prod.value)\">Search</button>\n                </div>",
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], DrugaComponent);
exports.DrugaComponent = DrugaComponent;
//# sourceMappingURL=druga.component.js.map