import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-batidos-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./batidos-form.component.scss'],
  templateUrl: './batidos-form.component.html'
})
export class BatidosFormComponent {
  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: any;

  @Output()
  add = new EventEmitter<any>();

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  submit = new EventEmitter<any>();

  onAddBatido(event) {
    this.add.emit(event);
  }

  onRemoveBatido(event) {
    this.remove.emit(event);
  }

  onToggle(event) {
    this.toggle.emit(event);
  }

  onSubmit(event) {
    event.stopPropagation();
    this.submit.emit(this.parent);
  }
}
