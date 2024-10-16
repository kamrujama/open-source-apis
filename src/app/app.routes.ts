import { Routes } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';

export const routes: Routes = [
    {path:'cardDetail/:name',
     component:CardDetailComponent
    },
];
