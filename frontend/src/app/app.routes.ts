import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/main/not-found/not-found.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'api/:apiName',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
