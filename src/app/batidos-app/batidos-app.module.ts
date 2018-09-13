import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BatidosAppComponent } from './containers/batidos-app.component';

import { BatidosFormComponent } from './components/batidos-form/batidos-form.component';
import { BatidoCreatorComponent } from './components/batido-creator/batido-creator.component';
import { BatidoSizeComponent } from './components/batido-size/batido-size.component';
import { BatidoToppingsComponent } from './components/batidos-toppings/batidos-toppings.component';
import { BatidosSummaryComponent } from './components/batidos-summary/batidos-summary.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BrowserAnimationsModule],
  declarations: [
    BatidosAppComponent,
    BatidosFormComponent,
    BatidoCreatorComponent,
    BatidoSizeComponent,
    BatidoToppingsComponent,
    BatidosSummaryComponent
  ],
  exports: [BatidosAppComponent]
})
export class BatidosAppModule {}
