import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/general/home-page/home-page.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
