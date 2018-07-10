import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StartComponent } from './components/start/start.component';
import { InfoComponent } from './components/info/info.component';
import { TowerComponent } from './components/tower/tower.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'start', component: StartComponent},
  {path: 'info', component: InfoComponent},
  {path: 'tower', component: TowerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    StartComponent,
    InfoComponent,
    TowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DragulaModule
  ],
  //Put services in providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
