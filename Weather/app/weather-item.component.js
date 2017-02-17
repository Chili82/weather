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
var weather_item_1 = require("./weather-item");
var WeatherItemComponent = (function () {
    function WeatherItemComponent() {
    }
    return WeatherItemComponent;
}());
__decorate([
    core_1.Input('item'),
    __metadata("design:type", weather_item_1.WeatherItem)
], WeatherItemComponent.prototype, "weatherItem", void 0);
WeatherItemComponent = __decorate([
    core_1.Component({
        selector: 'weather-item',
        template: "\n        <article class=\"weather-element\">\n            <div class=\"col-1\">\n                <h3>{{weatherItem.cityName}}</h3>\n                <p class=\"info\">{{weatherItem.description}}</p>\n            </div>\n            <div class=\"col-2\">\n                <span class=\"temperature\">{{weatherItem.temperature}}</span>\n            </div>\n        </article>\n    ",
        styleUrls: ['weather-item.css'],
    })
], WeatherItemComponent);
exports.WeatherItemComponent = WeatherItemComponent;
//# sourceMappingURL=weather-item.component.js.map