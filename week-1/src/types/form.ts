export interface RegistrationForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  acceptTerms: boolean;
  gender: string;
  country: string;
}

export interface Option {
  value: string;
  label: string;
}
