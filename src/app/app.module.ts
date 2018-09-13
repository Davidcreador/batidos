import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BatidosAppModule } from './batidos-app/batidos-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BatidosAppModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
