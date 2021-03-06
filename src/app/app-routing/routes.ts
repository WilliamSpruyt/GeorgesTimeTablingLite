import { Routes } from '@angular/router'
import { TheTablesComponent } from '../the-tables/the-tables.component';
import { FailComponent } from '../fail/fail.component';
import { SucessComponent } from '../sucess/sucess.component';
import { StartComponent } from '../start/start.component';
import { StatsComponent } from '../stats/stats.component';
import { LoginComponent } from '../login/login.component';
export const routes: Routes = [
  { path: 'test', component: TheTablesComponent },
  { path: 'fail', component: FailComponent },
  { path: 'sucess', component: SucessComponent },
  { path: 'start', component: LoginComponent },
  { path: 'HALLOFFAME', component: StatsComponent },

  { path: '', redirectTo: '/start', pathMatch: 'full' }
];
