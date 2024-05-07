import { isNaN } from 'lodash';
import { validate as uuidValidate } from 'uuid';

export function validateEmail(email: unknown) {
  const pattern = /^(.+)@(.+)\.(.+)$/;
  if (typeof email !== 'string' || !pattern.test(email)) {
    return {
      en: `Invalid email entered`,
      th: `ที่อยู่อีเมลไม่ถูกต้อง`,
    };
  }

  return null;
}

export function validatePassword(password: unknown) {
  // Create a new password. Use a minimum of 10 characters, including uppercase
  // letters, lowercase letters, and numbers.
  // const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){10,}$/;
  if (typeof password !== 'string' || password.length < 6 || !password) {
    return {
      en: `Passwords must be at least 6 characters long`,
      th: `รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร`,
    };
  }
  return null;
}

export function validatePasswordConfirm(password: unknown, passwordConfirm: unknown) {
  if (password !== passwordConfirm) {
    return {
      en: 'Password mismatch',
      th: 'รหัสผ่านไม่ตรงกัน',
    };
  }
  return null;
}

export function validatePhone(phone: unknown) {
  if (typeof phone !== 'string' || phone.length < 8 || !phone) {
    return {
      en: `Phone must be at least 8 characters long`,
      th: `หมายเลขโทรศัพท์ต้องมีความยาวอย่างน้อย 8 ตัวอักษร`,
    };
  }
  return null;
}

export function validatePolicy(policy: unknown) {
  if (!policy || policy === 'false' || policy === 'undefined') {
    return {
      en: 'This is a required field',
      th: 'จำเป็นต้องกรอกช่องนี้',
    };
  }
  return null;
}

export function validateZipCode(zip_code: unknown) {
  const pattern = /^\d{5}$/;
  if (typeof zip_code !== 'string' || !pattern.test(zip_code) || !zip_code) {
    return {
      en: `Zip code must contain numbers only and be 5 characters long.`,
      th: `รหัสไปรษณีย์ต้องมีเฉพาะตัวเลขและมีความยาว 5 ตัวอักษร`,
    };
  }
  return null;
}

export function validateRequireField(field: unknown) {
  if (!field) {
    return {
      en: 'This is a required field',
      th: 'จำเป็นต้องกรอกช่องนี้',
    };
  }
  return validateThaiOrEnglish(field as string);
}

export function validateTypeImage(field?: string | null | undefined) {
  if (field === 'error')
    return {
      en: 'Image type must be JPG/JPEG',
      th: 'ชนิดไฟล์รูปภาพต้องเป็น JPG/JPEG',
    };
  return null;
}

export function validateUnknownString(errorString: string) {
  const [field, error] = errorString.split(':').map((str) => str.trim());
  return {
    [field]: {
      en: error,
      th: 'ข้อมูลที่ป้อนไม่ถูกต้อง',
    },
  };
}

export function validateThaiOrEnglish(inputString?: string) {
  const pattern =
    /^[\u0E00-\u0E7F\u002D\u005F\u002E\u002F\u0023\u002B\u003D*\s()\p{P}0-9a-zA-Z]+$/u;

  if (!inputString) {
    return null;
  }
  const check = pattern.test(inputString);

  if (uuidValidate(inputString)) {
    return null;
  }

  if (
    inputString.split(',').length > 0 &&
    inputString.split(',').every((item) => uuidValidate(item))
  ) {
    return null;
  }

  if (inputString.includes('http')) {
    return null;
  }

  if (!check) {
    return {
      en: 'ENG/Thai characters only',
      th: 'ตัวอักษร ไทย/Eng เท่านั้น',
    };
  }

  return null;
}

export function validateDescription(inputString?: string) {
  const pattern =
    /^[\u0E00-\u0E7F\u002D\u005F\u002E\u002F\u0023\u002B\u003D*()\s\p{P}0-9a-zA-Z]+$/u;

  if (!inputString) {
    return null;
  }
  const check = pattern.test(inputString);

  if (!check) {
    return {
      en: 'ENG/Thai characters only',
      th: 'ตัวอักษร ไทย/Eng เท่านั้น',
    };
  }

  return null;
}

interface ValidationResult {
  [index: number]: null | { en: string; th: string };
}

export function validateArrayElementsForLanguage(inputString?: string[]): ValidationResult | null {
  const validationResults: ValidationResult = {};

  if (!inputString) return null;

  for (let i = 0; i < inputString.length; i += 1) {
    const result = validateThaiOrEnglish(inputString[i]);
    if (result !== null) {
      validationResults[i] = result;
    }
  }

  // Проверяем, является ли объект validationResults пустым
  if (Object.keys(validationResults).length === 0) {
    return null;
  }

  return validationResults;
}

export function validateArrayDescriptionsForLanguage(
  inputString: string[],
): ValidationResult | null {
  const validationResults: ValidationResult = {};

  for (let i = 0; i < inputString.length; i += 1) {
    const result = validateDescription(inputString[i]);
    if (result !== null) {
      validationResults[i] = result;
    }
  }

  // Проверяем, является ли объект validationResults пустым
  if (Object.keys(validationResults).length === 0) {
    return null;
  }

  return validationResults;
}

export function validateRealDate(dateString?: string) {
  if (!dateString) {
    return null;
  }

  const [year, month, day] = dateString.split('-').map(Number);

  // Проверить, что год, месяц и день действительные числа
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return {
      en: 'No such date exists',
      th: 'ไม่มีวันที่ดังกล่าว',
    };
  }

  // Проверить, что месяц находится в пределах от 1 до 12
  if (month < 1 || month > 12) {
    return {
      en: 'No such date exists',
      th: 'ไม่มีวันที่ดังกล่าว',
    };
  }

  // Проверить, что день находится в пределах от 1 до количества дней в текущем месяце
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Проверить, является ли год високосным, и соответствующим образом изменить количество дней в феврале
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    daysInMonth[2] = 29;
  }

  if (day < 1 || day > daysInMonth[month - 1]) {
    return {
      en: 'No such date exists',
      th: 'ไม่มีวันที่ดังกล่าว',
    };
  }

  return null;
}
