import { Component } from '@angular/core';
import { WeatherListComponent } from "./weather-list.component";
import { WeatherSearchComponent } from "./weather-search.component";
import { SidebarComponent } from './sidebar.component';

@Component({
    selector: 'my-pocetna',
    template: `<my-sidebar></my-sidebar>
                <weather-search></weather-search>
                <weather-list></weather-list>`,
    directives: [WeatherListComponent, WeatherSearchComponent, SidebarComponent]
})

export class PocetnaComponent{}