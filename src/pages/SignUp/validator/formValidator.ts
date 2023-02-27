export interface UserData {
  email: string
  username: string
  password: string
  confirmPassword: string
  'dob[1]'?: string
  'dob[2]'?: string
  'dob[3]'?: string
  dob?: string
}

export const isValid = (userData: UserData): boolean => {
  let emailValid = true;
  let passwordValid = true;
  let dobValid = true;
  if (!userData.email.includes('@')) {
    emailValid = false;
    console.log('email');
  }
  if (userData.password.length < 8) {
    passwordValid = false;
    console.log('pass');
  }
  if (userData.dob?.length == 0) {
    dobValid = false;
    console.log(userData);
  }
  return emailValid && passwordValid && dobValid;
};
