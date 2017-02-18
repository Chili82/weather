import { Component } from '@angular/core';
import { WeatherListComponent } from "./weather-list.component";
import { WeatherSearchComponent } from "./weather-search.component";

@Component({
    selector: 'my-app',
    template: `<header>
            <h1>Angular 2 Weather</h1>
        </header>
        <weather-search></weather-search>
        <weather-list></weather-list>`,
    directives: [WeatherListComponent, WeatherSearchComponent]
})
export class AppComponent {  }
