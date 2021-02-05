import { FormikValues } from 'formik';
import { InputStatus } from '~/components/UI/Input/InputType';

import valid from 'card-validator';

const maskDefaultCardNumber = (creditCardNumber: string): string => {
  const firstDigits = creditCardNumber.substr(0, 4);
  const lastDigits = creditCardNumber.substr(-4);
  return `${firstDigits} **** **** ${lastDigits}`;
};

const maskAmexCardNumber = (creditCardNumber: string): string => {
  const firstDigits = creditCardNumber.substr(0, 4);
  const lastDigits = creditCardNumber.substr(-5);
  return `${firstDigits} ****** ${lastDigits}`;
};

export function maskCreditCardNumber(creditCardNumber: string, cardType?: string): string {
  if (creditCardNumber.length >= 8) {
    if (cardType === 'american-express') {
      return maskAmexCardNumber(creditCardNumber.replace(/\s/g, ''));
    } else {
      return maskDefaultCardNumber(creditCardNumber);
    }
  } else {
    return '';
  }
}

export function formatCreditCardSecurity(creditCardSecurityCode: string): string {
  if (creditCardSecurityCode) {
    const length = creditCardSecurityCode.length;
    let formatedCode = '';
    for (let i = 0; i < length; i++) {
      formatedCode = formatedCode.concat('*');
    }
    return formatedCode;
  } else {
    return '';
  }
}

export function validateCreditCardDate(stringToValidate: string, limitDate: Date): boolean {
  // Please note that this will stop working on the year 2100
  const dateToValidate = new Date(`20${stringToValidate.slice(-2)}-${stringToValidate.substr(0, 2)}-01`);

  return dateToValidate > limitDate;
}

export function getCreditCardInputStatus(formikForm?: FormikValues): InputStatus {
  if (formikForm) {
    const { cardNumber, cardDateExpire, cardSecurityCode } = formikForm.values;
    const { errors } = formikForm;

    if (cardNumber || cardDateExpire || cardSecurityCode) {
      if (!!errors.cardDateExpire || !!errors.cardNumber || !!errors.cardSecurityCode) {
        return InputStatus.Invalid;
      } else {
        return InputStatus.Complete;
      }
    }
    return InputStatus.Initial;
  }
  return InputStatus.Initial;
}

export function formatExpiryMonth(input: number): string {
  if (input <= 0 || input > 12) return '';
  return input < 10 ? `0${input}` : `${input}`;
}

export function formatExpiryYear(input: number): string {
  if (input <= 0) return '';
  return input > 1000 ? `${input % 100}` : `${input}`;
}

const formatDefaultCardNumber = (input: string): string => {
  return `${input.substring(0, 4)} ${input.substring(4, 8)} ${input.substring(8, 12)} ${input.substring(12, 16)}`;
};

const formatAmexCardNumber = (input: string): string => {
  return `${input.substring(0, 4)} ${input.substring(4, 10)} ${input.substring(10, 15)}`;
};

export function formatCardNumber(input: string): string {
  const cardDetails = valid.number(input).card || '';

  if (input.length <= 0 || input.length > 16) return '';
  if (!cardDetails) return '';

  if (cardDetails.type === 'american-express') {
    return formatAmexCardNumber(input);
  } else {
    return formatDefaultCardNumber(input);
  }
}

export function CreditCardName(cardNumber: string): { type: string; name: string } {
  const cardDetails = valid.number(cardNumber).card || { type: '', niceType: '' };

  return { type: cardDetails.type, name: cardDetails.niceType };
}
