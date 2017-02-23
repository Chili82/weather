import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { WeatherService } from './weather.service';
import { WeatherItemComponent } from "./weather-item.component";
import { WeatherItem } from './weather-item';


@Component({
    selector: 'my-druga',
    template: `<div style="width:100%;padding:10px">
<div style="width:50%;float:left;">
                <h2>All Products from Web API</h2>
                <ul>
                    <li *ngFor="let product of products">{{product.Name}}: {{product.Price|currency:'USD':true}}</li>
                </ul>
                <div style="width:500px">
                    Product Name: <input type="text" #prod >
                        <button (click)="onSearch(prod.value)">Search</button>
                </div>
</div>
<div style="width:50%;float:left;">
                <div style="width:500px;padding:10px">
                <h2>Call Weather Service from Web API</h2>
                <label class="bojeTeksta" for="city">City</label>
                <input type="text" name="location" id="city" #input required ngModel>
                <button (click)="getWeather(input.value)">Add City</button>
                </div>
                <div style="width:500px;padding:10px">
                <weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></weather-item>
                </div>
<div>
</div>

`,
    directives: [WeatherItemComponent],
    providers: [ProductService, WeatherService],
    styleUrls: ['weather-item.css']
    
})

export class DrugaComponent implements OnInit {

    products: Product[];
 
    weatherItems: WeatherItem[];
    constructor(private _productService: ProductService, private _weatherService: WeatherService) { }

    onSearch(product: string) {
        this._productService.getProductsByName(product)
            .subscribe(resProductData => this.products = resProductData);
    }

    getWeather(name: string) {

        this._productService.getWeatherByName(name)
            .subscribe(data => {
                const weatherItem = new WeatherItem(data.name, data.weather[0].description, Math.round(data.main.temp), data.weather[0].icon);
                this._weatherService.addWeatherItems(weatherItem);
            });
    }
    ngOnInit() {
        this._weatherService.clearWeatherItems();
        this._productService.getProducts()
            .subscribe(resProductData => this.products = resProductData);

        this.weatherItems = this._weatherService.getWeatherItems();
        
    }
}