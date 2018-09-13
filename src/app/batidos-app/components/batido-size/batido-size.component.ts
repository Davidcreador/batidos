import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const BATIDO_SIZE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BatidoSizeComponent),
  multi: true
};

interface ISize {
  name: string;
  type: string;
  size: number;
}

@Component({
  selector: 'app-batido-size',
  providers: [BATIDO_SIZE_ACCESSOR],
  styleUrls: ['batido-size.component.scss'],
  template: `
    <div class="batido-size section">
      <label *ngFor="let size of sizes; let i = index;"
          class="batido-size__item"
          [class.batido-size__item--active]="value === size.type"
          [class.batido-size__item--focused]="focused === size.type">
        <input
          type="radio"
          name="size"
          [attr.value]="size.type"
          (blur)="onBlur(size.type)"
          (change)="onChange(size.type)"
          (focus)="onFocus(size.type)"
          [checked]="value === size.type">

        <div class="batido-size__plate">
          <div class="batido-size__batido batido-size__batido--{{ size.type }}">
            <div class="batido-size__batido__line"></div>
          </div>
        </div>
        {{ size.name | titlecase }}
      </label>
    </div>
  `
})
export class BatidoSizeComponent implements ControlValueAccessor {
  private onModelChange: Function;
  private onTouch: Function;

  value: string;
  focused: string;

  sizes: ISize[] = [
    { name: 'Grande', type: 'grande', size: 13 },
    { name: 'Mediano', type: 'mediano', size: 11 },
    { name: 'Pequeño', type: 'pequeno', size: 9 }
  ];

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  onChange(value: string) {
    this.value = value;
    this.onModelChange(value);
  }

  onBlur(value: string) {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
