import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/general/home-page/home-page.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { YustiblogPageComponent } from './pages/general/yustiblog-page/yustiblog-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "yustiblog",
        component: YustiblogPageComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
