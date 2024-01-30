import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldBase } from '../../segregated-fund-modules/segregated-fund-form/segregated-fund-base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dynamic-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.css'
})
export class DynamicFormFieldComponent {
  @Input() field!: FieldBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
}
