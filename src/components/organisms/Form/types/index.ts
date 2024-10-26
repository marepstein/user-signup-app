import { FieldError, UseFormRegister } from 'react-hook-form';

export type TFormData = {
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  postcode: string;
  stateOrCounty: string;
  country: 'US' | 'NL' | 'GB';
};

export type TFormFieldProps = {
  type: string;
  placeholder: string;
  name: TValidFieldNames;
  register: UseFormRegister<TFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type TValidFieldNames =
  | 'firstName'
  | 'lastName'
  | 'addressLineOne'
  | 'addressLineTwo'
  | 'city'
  | 'postcode'
  | 'stateOrCounty'
  | 'country';
