import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    template: `<header>
                    <h1>Angular 2 Weather</h1>
                        <nav>
                        <a routerLink="/pocetna" routerLinkActive="active">Weather</a>
                        <a routerLink="/druga" routerLinkActive="active">Druga</a>
                        </nav>
                </header>
                <router-outlet></router-outlet>
`
})
export class AppComponent {  }
