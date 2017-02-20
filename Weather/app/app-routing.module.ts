import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna.component';
import { DrugaComponent } from './druga.component';

const routes: Routes = [
    { path: 'pocetna', component: PocetnaComponent },
    { path: 'druga', component: DrugaComponent },
    { path: '', redirectTo: '/pocetna', pathMatch: 'full' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
