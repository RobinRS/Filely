import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from "./settings/settings.component";
import {ConnectComponent} from "./connect/connect.component";
import {ServerListComponent} from "./server-list/server-list.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'server-list', component: ServerListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
