import {Routes} from '@angular/router'
import { TheTablesComponent} from '../the-tables/the-tables.component';
import {FailComponent } from '../fail/fail.component';
import {SucessComponent } from '../sucess/sucess.component';
import {StartComponent } from '../start/start.component';
export const routes: Routes=[
{path: 'test',component: TheTablesComponent},
{path: 'fail',component: FailComponent},
{path: 'sucess',component: SucessComponent},
{path: 'start',component: StartComponent},
 
{path: '',redirectTo: '/start', pathMatch: 'full'}
];