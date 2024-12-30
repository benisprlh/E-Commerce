import bcryptjs from 'bcryptjs';

export const hashPass = (pass: string): string => {
  return bcryptjs.hashSync(pass);
};

export const comparePass = (pass: string, hashPassword: string): boolean => {
  return bcryptjs.compareSync(pass, hashPassword);
};
