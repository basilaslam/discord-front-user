export interface userData {
  email: string
  password: string
}

export const isValid = (userData: userData): boolean => {
  let emailValid = true;
  let passwordValid = true;
  if (!userData.email.includes('@')) {
    emailValid = false;
    console.log('email');
  }
  if (userData.password.length < 8) {
    passwordValid = false;
    console.log('pass');
  }

  return emailValid && passwordValid;
};
