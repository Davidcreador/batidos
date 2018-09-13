import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-batidos-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['batidos-summary.component.scss'],
  template: `
    <div class="batido-summary">

      <h2>Total de la orden</h2>
      <div
        class="batido-summary__batido"
        *ngFor="let batido of parent.get('batidos').value">

        <div *ngIf="batido.size">
          <h3>
            Batido {{ batido.size | titlecase }}
            <span class="batido-summary__price">
              {{ prices[batido.size].base | currency:'CRC ':true }}
            </span>
          </h3>

          <div class="batido-summary__toppings">
            <div
              class="batido-summary__topping"
              *ngFor="let topping of batido.toppings">
              <i class="fa fa-plus"></i>
              {{ topping | titlecase }}
              <span class="batido-summary__price">
                {{ prices[batido.size].toppings | currency:'CRC ':true }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="batido-summary__total-price">
        Total: {{ total | currency:'CRC ':true }}
      </div>

      <button type="submit" class="app-form-button" [disabled]="parent.invalid">
        Ordenar
      </button>
    </div>

  `
})
export class BatidosSummaryComponent {
  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: any;
}
