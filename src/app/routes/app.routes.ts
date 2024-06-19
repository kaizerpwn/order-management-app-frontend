import { Routes } from "@angular/router";
import { LoginComponent } from "../core/pages/login/login.component";

export const routes: Routes = [
    {
        path:"",
        pathMatch: 'full',
        title:'Login',
        component: LoginComponent
    }
];