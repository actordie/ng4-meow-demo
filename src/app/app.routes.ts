/* anytime u make a change to src directory, you need to rerun the build */
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";


export const allAppComponents = [HomeComponent];

export const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);