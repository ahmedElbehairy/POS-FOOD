import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';
import { AdmainGuard, AuthGuard } from '../core/hellper/guards/auth.guard';
import { CreatOrderComponent } from './creat-order/creat-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full'},
    { path: "login",loadChildren: () =>
    import("./auth/auth.module").then(
        (m: any) => m.AuthModule
    )},
    { path: 'Home',component:HomeComponent, canActivate: [AuthGuard]},
    { path: 'creat_order/:id',component:CreatOrderComponent, canActivate: [AuthGuard]},
    { path: 'Customers',component:HomeComponent, canActivate: [AuthGuard]},
    { path: 'Dashboard',component:DashboardComponent, canActivate: [AdmainGuard]},
    { path: 'Messages',component:HomeComponent, canActivate: [AuthGuard]},
    { path: 'Notification',component:HomeComponent, canActivate: [AuthGuard]},
    { path: 'Order',component:OrdersComponent, canActivate: [AuthGuard]},
    { path: "Product",loadChildren: () =>
      import("./products/products.module").then(
      (m: any) => m.ProductsModule
      ), canActivate: [AdmainGuard]},
    { path: 'Setting',component:HomeComponent, canActivate: [AuthGuard]},
    { path: '**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
