import { InputStatus } from '~/components/UI/Input/InputType';
import { FormikValues } from 'formik';

export function getInputStatus(
  formikForm: FormikValues,
  name: string,
  isValid?: boolean,
  maxLength?: number
): InputStatus {
  const { values, touched, errors } = formikForm;
  if (isValid) {
    return InputStatus.Valid;
  }
  if (values[name] && touched[name] && errors[name]) {
    return InputStatus.Invalid;
  } else if ((values[name] && touched[name]) || (values[name] && values[name].length === maxLength)) {
    return InputStatus.Complete;
  }
  return InputStatus.Initial;
}

export function getErrorMessages(data: any): string {
  const errorMessages = data.map((validator: { valor: string }) => validator.valor);

  return errorMessages.join('\n');
}

export function validateBorn(stringDate: string): boolean {
  /******** VALIDATE FORMATE DATE DD/MM/AAAA *******/

  const regExpCharacter = /[^\d]/; //Regex to search no-numeric character .
  const regExpSpace = /^\s+|\s+$/g; //Regex to trim.

  if (stringDate.length !== 10) {
    return false;
  }

  const splitDate = stringDate.split('/');

  if (splitDate.length !== 3) {
    return false;
  }

  /* remove black spaces in begin of string. */
  splitDate[0] = splitDate[0].replace(regExpSpace, '');
  splitDate[1] = splitDate[1].replace(regExpSpace, '');
  splitDate[2] = splitDate[2].replace(regExpSpace, '');

  if (splitDate[0].length !== 2 || splitDate[1].length !== 2 || splitDate[2].length !== 4) {
    return false;
  }

  /* search no-numeric character . Eg.: "x" at "28/09/2x11" */
  if (regExpCharacter.test(splitDate[0]) || regExpCharacter.test(splitDate[1]) || regExpCharacter.test(splitDate[2])) {
    return false;
  }

  const day = parseInt(splitDate[0], 10);
  const month = parseInt(splitDate[1], 10) - 1;
  const year = parseInt(splitDate[2], 10);

  const newDate = new Date(year, month, day);
  const today = new Date();

  if (newDate > today) {
    return false;
  }

  return !(newDate.getDate() !== day || newDate.getMonth() !== month || newDate.getFullYear() !== year);
}

export function validateIsOlder(bornDate: string): boolean {
  const splitDate = bornDate.split('/');

  const day = parseInt(splitDate[0], 10);
  const month = parseInt(splitDate[1], 10) - 1;
  const year = parseInt(splitDate[2], 10);

  const dob = new Date(year, month, day);

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());

  let age = currentYear - dob.getFullYear();
  if (birthdayThisYear > currentDate) {
    age--;
  }

  return age >= 18;
}

export function validateCelphone(value: string): boolean {
  const cleanValue = value.replace(/\-|\ |\(|\)|\_|\//g, '');

  return cleanValue.length === 11;
}

export function validatePassword(pass: string): boolean {
  const validator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  return validator.test(pass);
}

export function truncateText(size: number, text: string): string {
  return `${text.slice(0, size - 1)}...`;
}

export function validateCPF(cpf: string): boolean {
  if (cpf === '') {
    return false;
  }

  cpf = cpf.replace(/\./gi, '').replace(/-/gi, '');
  let isValid = true;
  let sum;
  let rest;
  let i;
  i = 0;
  sum = 0;

  if (
    cpf.length != 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    isValid = false;
  }

  for (i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(cpf.substring(9, 10))) {
    isValid = false;
  }

  sum = 0;

  for (i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(cpf.substring(10, 11))) {
    isValid = false;
  }
  return isValid;
}

export function validateCNPJ(cnpj: string): boolean {
  const valida = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let dig1 = 0;
  let dig2 = 0;
  let i = 0;

  const exp = /\.|\-|\//g;
  cnpj = cnpj.toString().replace(exp, '');
  // eslint-disable-next-line no-eval
  const digit = eval(cnpj.charAt(12) + cnpj.charAt(13));

  for (i = 0; i < valida.length; i++) {
    dig1 += i > 0 ? parseInt(cnpj.charAt(i - 1), 10) * valida[i] : 0;
    dig2 += parseInt(cnpj.charAt(i), 10) * valida[i];
  }
  dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
  dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);

  return dig1 * 10 + dig2 === digit;
}

export function validateDocument(document: string): boolean {
  if (document === undefined) {
    return true; // true because its not required
  }
  const documentClean = document.replace(/\.|\-|\//g, '');
  const documentoSize = documentClean.length;

  if (documentoSize === 11) {
    return validateCPF(documentClean);
  } else if (documentoSize === 14) {
    return validateCNPJ(documentClean);
  }

  return false;
}

export function formatCelphone(phone: string): string {
  return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
}

export function formatZipcode(zipcode: string): string {
  return `${zipcode.slice(0, 4)}-${zipcode.slice(4, 7)}`;
}
