import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule,Routes} from '@angular/router';

//import {AppRoutingModule} from './app-routing.module';

import { PocetnaComponent } from './pocetna.component';
import { DrugaComponent } from './druga.component';

const routes: Routes = [
    {path:'',component:PocetnaComponent},
    { path: 'pocetna', component: PocetnaComponent },
    { path: 'druga', component: DrugaComponent }
];


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, PocetnaComponent, DrugaComponent ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
