import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ModesPageComponent } from './pages/modes-page/modes-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {path: 'app-main-page', component: MainPageComponent},
    {path: 'app-modes-page', component: ModesPageComponent},
    {path: 'app-create-page', component: CreatePageComponent},
    {path: 'app-about-page', component: AboutPageComponent},
    {path: '', redirectTo: '/app-main-page', pathMatch: 'full'},
    {path: '**', component: NotFoundPageComponent}
];


