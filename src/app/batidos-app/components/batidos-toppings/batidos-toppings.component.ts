import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const BATIDO_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BatidoToppingsComponent),
  multi: true
};

@Component({
  selector: 'app-batido-toppings',
  providers: [BATIDO_TOPPINGS_ACCESSOR],
  styleUrls: ['batidos-toppings.component.scss'],
  template: `
    <div class="batido-toppings">
      <label
        *ngFor="let topping of toppings"
        class="batido-topping"
        [class.batido-topping--active]="value.includes(topping)"
        [class.batido-topping--focused]="focused === topping">
        <input
          type="checkbox"
          [attr.name]="topping"
          [attr.value]="topping"
          (blur)="onBlur(topping)"
          (change)="updateTopping(topping)"
          (focus)="onFocus(topping)"
          [checked]="value.includes(topping)">
        <span class="batido-topping__icon batido-topping__icon--{{ topping }}"></span>
        {{ topping | titlecase }}
      </label>
    </div>
  `
})
export class BatidoToppingsComponent implements ControlValueAccessor {
  toppings = [
    'anchovy',
    'bacon',
    'basil',
    'chili',
    'mozzarella',
    'mushroom',
    'olive',
    'onion',
    'pepper',
    'pepperoni',
    'sweetcorn',
    'tomato'
  ];

  value: string[] = [];
  focused: string;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  updateTopping(topping: string) {
    if (this.value.includes(topping)) {
      this.value = this.value.filter((x: string) => topping !== x);
    } else {
      this.value = this.value.concat([topping]);
    }
    this.onModelChange(this.value);
  }

  onBlur(value: string) {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
