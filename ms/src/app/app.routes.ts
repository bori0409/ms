import { Routes } from '@angular/router';
import { ContainerComponent } from '../components/container/container.component';


export const routes: Routes = [
   { path: '', redirectTo: 'container', pathMatch: 'full'},
   { path: 'container', component:ContainerComponent },
];



