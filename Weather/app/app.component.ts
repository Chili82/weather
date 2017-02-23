import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    template: `<header>
                    <h1>Angular 2 Weather</h1>
                </header>
                        <nav>
                        <a routerLink="/pocetna" routerLinkActive="active">Weather</a>
                        <a routerLink="/druga" routerLinkActive="active">Web API</a>
                        </nav>
                <router-outlet></router-outlet>
`
})
export class AppComponent {  }
