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
var weather_service_1 = require("./weather.service");
var weather_item_1 = require("./weather-item");
var WeatherSearchComponent = (function () {
    function WeatherSearchComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    WeatherSearchComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form);
        this._weatherService.searchWeatherData(form.location)
            .subscribe(function (data) {
            var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
            _this._weatherService.addWeatherItems(weatherItem);
        });
    };
    return WeatherSearchComponent;
}());
WeatherSearchComponent = __decorate([
    core_1.Component({
        selector: 'weather-search',
        template: "\n        <section class=\"weather-search\">\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n                <label for=\"city\">City</label>\n                <input type=\"text\" name=\"location\" id=\"city\" required ngModel>\n                <button type=\"submit\">Add City</button>\n                <div>\n                    <span class=\"info\">City found:</span> City Name\n                </div>\n            </form>\n        </section>\n                ",
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherSearchComponent);
exports.WeatherSearchComponent = WeatherSearchComponent;
//# sourceMappingURL=weather-search.component.js.map