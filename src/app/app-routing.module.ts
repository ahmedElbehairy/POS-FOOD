import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'  },
  {
    path: "",
    loadChildren: () =>
      import("./features/features.module").then(
        (m: any) => m.FacilitiesModule
      )
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
