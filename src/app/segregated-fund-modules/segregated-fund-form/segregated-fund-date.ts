import { FieldBase } from './segregated-fund-base';

export class DateField extends FieldBase<string> {
  override controlType = 'date';
}

