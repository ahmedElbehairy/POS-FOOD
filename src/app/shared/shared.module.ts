import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RightSideComponent } from './right-side/right-side.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthPageComponent,
    SnackBarComponent,
    SideMenuComponent,
    RightSideComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthPageComponent,
    SnackBarComponent,
    SideMenuComponent,
    RightSideComponent,
    CardComponent,
  ],
})
export class SharedModule {}
