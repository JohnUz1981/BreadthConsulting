import { FieldBase } from './segregated-fund-base';

export class TextboxField extends FieldBase<string> {
  override controlType = 'textbox';
}

