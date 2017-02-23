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
var product_service_1 = require('./product.service');
var weather_service_1 = require('./weather.service');
var weather_item_component_1 = require("./weather-item.component");
var weather_item_1 = require('./weather-item');
var DrugaComponent = (function () {
    function DrugaComponent(_productService, _weatherService) {
        this._productService = _productService;
        this._weatherService = _weatherService;
    }
    DrugaComponent.prototype.onSearch = function (product) {
        var _this = this;
        this._productService.getProductsByName(product)
            .subscribe(function (resProductData) { return _this.products = resProductData; });
    };
    DrugaComponent.prototype.getWeather = function (name) {
        var _this = this;
        this._productService.getWeatherByName(name)
            .subscribe(function (data) {
            var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, Math.round(data.main.temp), data.weather[0].icon);
            _this._weatherService.addWeatherItems(weatherItem);
        });
    };
    DrugaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weatherService.clearWeatherItems();
        this._productService.getProducts()
            .subscribe(function (resProductData) { return _this.products = resProductData; });
        this.weatherItems = this._weatherService.getWeatherItems();
    };
    DrugaComponent = __decorate([
        core_1.Component({
            selector: 'my-druga',
            template: "<div style=\"width:100%;padding:10px\">\n<div style=\"width:50%;float:left;\">\n                <h2>All Products from Web API</h2>\n                <ul>\n                    <li *ngFor=\"let product of products\">{{product.Name}}: {{product.Price|currency:'USD':true}}</li>\n                </ul>\n                <div style=\"width:500px\">\n                    Product Name: <input type=\"text\" #prod >\n                        <button (click)=\"onSearch(prod.value)\">Search</button>\n                </div>\n</div>\n<div style=\"width:50%;float:left;\">\n                <div style=\"width:500px;padding:10px\">\n                <h2>Call Weather Service from Web API</h2>\n                <label class=\"bojeTeksta\" for=\"city\">City</label>\n                <input type=\"text\" name=\"location\" id=\"city\" #input required ngModel>\n                <button (click)=\"getWeather(input.value)\">Add City</button>\n                </div>\n                <div style=\"width:500px;padding:10px\">\n                <weather-item *ngFor=\"let weatherItem of weatherItems\" [item]=\"weatherItem\"></weather-item>\n                </div>\n<div>\n</div>\n\n",
            directives: [weather_item_component_1.WeatherItemComponent],
            providers: [product_service_1.ProductService, weather_service_1.WeatherService],
            styleUrls: ['weather-item.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, weather_service_1.WeatherService])
    ], DrugaComponent);
    return DrugaComponent;
}());
exports.DrugaComponent = DrugaComponent;
//# sourceMappingURL=druga.component.js.map