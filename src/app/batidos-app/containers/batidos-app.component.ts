import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-batidos',
  styleUrls: ['batidos-app.component.scss'],
  template: `
    <nav>
      <span class="nav-logo">Batidos</span>
      <a href="#">Inicio</a>
      <a href="#">Menú</a>
      <a href="#">Contacto</a>
    </nav>
    <div class="batidos-app">
      <app-batidos-form
        [parent]="form"
        [total]="total"
        [prices]="prices"
        (submit)="createOrder($event)"
        (add)="addBatido()"
        (remove)="removeBatido($event)"
        (toggle)="toggleBatido($event)"
        (submit)="createOrder($event)">
      ></app-batidos-form>
    </div>
  `
})
export class BatidosAppComponent implements OnInit {
  total = '0';
  activeBatido = 0;

  prices = {
    pequeno: { base: 1000, toppings: 100 },
    mediano: { base: 1200, toppings: 120 },
    grande: { base: 1500, toppings: 200 }
  };

  form = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      confirm: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]]
    }),
    batidos: this.fb.array([this.createBatido()])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.calculateTotal(this.form.get('batidos').value);
    this.form.get('batidos').valueChanges.subscribe(value => this.calculateTotal(value));
  }

  createBatido() {
    return this.fb.group({
      size: ['pequeno', Validators.required],
      toppings: [[]]
    });
  }

  addBatido() {
    const control = this.form.get('batidos') as FormArray;
    control.push(this.createBatido());
  }

  removeBatido(index: number) {
    const control = this.form.get('batidos') as FormArray;
    control.removeAt(index);
  }

  toggleBatido(index: number) {
    this.activeBatido = index;
  }

  calculateTotal(value) {
    const priceResult = value.reduce((prev: number, next: any) => {
      const price = this.prices[next.size];
      return prev + price.base + price.toppings * next.toppings.length;
    }, 0);
    this.total = priceResult.toFixed(2);
  }

  createOrder(order: FormGroup) {
    console.log(order.value);
  }
}
