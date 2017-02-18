"use strict";
var WeatherItem = (function () {
    function WeatherItem(cityName, description, temperature, icon) {
        this.cityName = cityName;
        this.description = description;
        this.temperature = temperature;
        this.icon = icon;
    }
    return WeatherItem;
}());
exports.WeatherItem = WeatherItem;
//# sourceMappingURL=weather-item.js.map