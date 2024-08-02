import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
    { path: '', redirectTo: '/Product', pathMatch: 'full'},
    { path: 'Product',component:ProductHomeComponent},
    { path: 'Edit-Product/:id',component:EditProductComponent},
    { path: 'Add-Product',component:AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
