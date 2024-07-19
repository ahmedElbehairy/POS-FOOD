import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from '@angular/fire/compat';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/store';
import { ProductsEffect } from './store/effects/product.effects';
import { environment } from 'src/environments/environments.prod';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    FeaturesModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffect]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }