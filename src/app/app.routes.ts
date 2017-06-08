/* anytime u make a change to src directory, you need to rerun the build */
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";


export const allAppComponents = [HomeComponent, AboutComponent];

export const routes: Routes = [
	{path: "about", component: AboutComponent},
	{path: "", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);