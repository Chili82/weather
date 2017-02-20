import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna.component';
import { DrugaComponent } from './druga.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule,
        RouterModule.forRoot([
            { path: 'pocetna', component: PocetnaComponent },
            { path: 'druga', component: DrugaComponent },
            { path: '', redirectTo: '/pocetna', pathMatch: 'full' }
        ])
    ],
    declarations: [AppComponent, PocetnaComponent, DrugaComponent ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
