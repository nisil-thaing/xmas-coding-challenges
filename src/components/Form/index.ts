import { Form as FormRoot } from './Form';
import { InputField } from './InputField';

export const Form = Object.assign(FormRoot, {
  Input: InputField,
});

export type { FormProps, FormRef } from './Form';
export type { InputFieldProps as FormInputProps } from './InputField';
