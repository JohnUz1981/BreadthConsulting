import { FieldBase } from './segregated-fund-base';

export class DropdownField extends FieldBase<string> {
  override controlType = 'dropdown';
}
