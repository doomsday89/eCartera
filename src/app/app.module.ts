import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { CuentalistComponent } from './components/cuentalist/cuentalist.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { TransacComponent } from './components/transac/transac.component';
import { TranDetailsComponent } from './components/tran-details/tran-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentalistComponent,
    CuentaComponent,
    TransacComponent,
    TranDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
