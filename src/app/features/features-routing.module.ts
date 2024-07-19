import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full'},
    { path: "login",loadChildren: () =>
    import("./auth/auth.module").then(
        (m: any) => m.AuthModule
    )},
    { path: 'Home',component:HomeComponent},
    { path: 'Customers',component:HomeComponent},
    { path: 'Dashboard',component:HomeComponent},
    { path: 'Messages',component:HomeComponent},
    { path: 'Notification',component:HomeComponent},
    { path: 'Order',component:HomeComponent},
    { path: 'Product',component:HomeComponent},
    { path: 'Setting',component:HomeComponent},
    { path: '**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
