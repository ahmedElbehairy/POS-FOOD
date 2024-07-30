import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatOrderComponent } from './creat-order/creat-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreatOrderComponent,
    OrdersComponent,
    DashboardComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AuthModule,
    FeaturesRoutingModule,
    CommonModule,
]
})
export class FeaturesModule { }
