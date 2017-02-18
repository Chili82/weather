import { Component } from '@angular/core';
import { ControlGroup } from '@angular/common';
import { WeatherService } from './weather.service';
import { WeatherItem } from './weather-item';

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
                <label for="city">City</label>
                <input type="text" name="location" id="city" required ngModel>
                <button type="submit">Add City</button>
                <div>
                    <span class="info">City found:</span> City Name
                </div>
            </form>
        </section>
                `,
    providers: [WeatherService]
})

export class WeatherSearchComponent {

    constructor(private _weatherService: WeatherService) { }
    
    onSubmit(form: any) {
        console.log(form);
        this._weatherService.searchWeatherData(form.location)
            .subscribe(
            data => {
                const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                this._weatherService.addWeatherItems(weatherItem);
            }
            );
    }
}