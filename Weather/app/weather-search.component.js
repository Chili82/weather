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
var Subject_1 = require("rxjs/Subject");
var WeatherSearchComponent = (function () {
    function WeatherSearchComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.searchStream = new Subject_1.Subject();
        this.data = {};
    }
    WeatherSearchComponent.prototype.onSubmit = function () {
        var weatherItem = new weather_item_1.WeatherItem(this.data.name, this.data.weather[0].description, Math.round(this.data.main.temp), this.data.weather[0].icon);
        this._weatherService.addWeatherItems(weatherItem);
    };
    WeatherSearchComponent.prototype.onSearchLocation = function (cityName) {
        if (cityName.length > 0) {
            this.searchStream
                .next(cityName);
        }
    };
    WeatherSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weatherService.clearWeatherItems();
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
            .subscribe(function (data) { return _this.data = data; });
    };
    return WeatherSearchComponent;
}());
WeatherSearchComponent = __decorate([
    core_1.Component({
        selector: 'weather-search',
        template: "\n        <section class=\"weather-search\">\n            <form  (ngSubmit)=\"onSubmit()\">\n            <h2>Search cities and save in profile</h2>\n                <label class=\"bojeTeksta\" for=\"city\">City</label>\n                <input type=\"text\" name=\"location\" id=\"city\" #input (input)=\"onSearchLocation(input.value)\" required ngModel>\n                <button type=\"submit\">Add City</button>\n                <div>\n                    <span class=\"info\">City found:</span> {{data.name}}\n                </div>\n            </form>\n        </section>\n                ",
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherSearchComponent);
exports.WeatherSearchComponent = WeatherSearchComponent;
//# sourceMappingURL=weather-search.component.js.map