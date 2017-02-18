import { Component,OnInit } from '@angular/core';
import { ControlGroup } from '@angular/common';
import { WeatherService } from './weather.service';
import { WeatherItem } from './weather-item';
import {Subject} from 'rxjs/Subject'

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <form  (ngSubmit)="onSubmit()">
                <label for="city">City</label>
                <input type="text" name="location" id="city" #input (input)="onSearchLocation(input.value)" required ngModel>
                <button type="submit">Add City</button>
                <div>
                    <span class="info">City found:</span> {{data.name}}
                </div>
            </form>
        </section>
                `,
    providers: [WeatherService]
})

export class WeatherSearchComponent implements OnInit {

    private searchStream = new Subject<string>();
    data:any = {};
    constructor(private _weatherService: WeatherService) { }
    
    onSubmit() {
     
        const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, Math.round(this.data.main.temp), this.data.weather[0].icon);
                this._weatherService.addWeatherItems(weatherItem);           
    }

    onSearchLocation(cityName: string) {

        if (cityName.length>0) {
            this.searchStream
                .next(cityName);
        }
    }

    ngOnInit() {

        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((input:string)=> this._weatherService.searchWeatherData(input))
            .subscribe(
            data => this.data = data
            );

    }
}