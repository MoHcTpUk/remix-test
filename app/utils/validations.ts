export function validateEmail(email: unknown) {
  if (typeof email !== 'string' || email.length < 3 || !email.includes('@')) {
    return `Usernames must be at least 3 characters long`;
  }
  return null;
}

export function validatePassword(password: unknown) {
  if (typeof password !== 'string' || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
  return null;
}

export function validatePasswordConfirm(password: unknown, passwordConfirm: unknown) {
  if (password !== passwordConfirm) {
    return `Password do not match`;
  }
  return null;
}

export function validatePolicy(policy: unknown) {
  if (!policy || policy === 'false' || policy === 'undefined') {
    return `This is a required field`;
  }
  return null;
}
