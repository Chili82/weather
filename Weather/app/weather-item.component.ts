import { Component, Input } from '@angular/core';
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
            <div class="tempInfo">
                <span class="temperature">{{weatherItem.temperature}}&deg;C</span>
            </div>
            <div class="tempInfo">
                <img src ='http://openweathermap.org/img/w/{{weatherItem.icon}}.png' >
            </div>
            </div>
        </article>
    `,
    styleUrls: ['weather-item.css']
    //inputs:['weatherItem:item']
})

export class WeatherItemComponent {
   @Input('item') weatherItem: WeatherItem;

}