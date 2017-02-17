import { Component } from '@angular/core';
import { WeatherItem } from './weather-item'

@Component({
    selector: 'weather-item',
    template: `
        <article class="weather-element">
            <div class="col-1">
                <h3>{{weatherItem.cityName}}</h3>
                <p class="info">{{weatherItem.description}}</p>
            </div>
            <div class="col-2">
                <span class="temperature">{{weatherItem.temperature}}</span>
            </div>
        </article>
    `,
    styleUrls:['weather-item.css']
})

export class WeatherItemComponent {
    weatherItem: WeatherItem;
    constructor() {
        this.weatherItem = new WeatherItem('London', 'Rainy',32);
    }

}