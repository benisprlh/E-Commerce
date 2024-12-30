import jwt, { JwtPayload } from 'jsonwebtoken';
import * as jose from 'jose';

const SECRET_KEY = process.env.JWT_SECRET as string;

export const createToken = (payload: JwtPayload) => jwt.sign(payload, SECRET_KEY);

export const readPayloadJose = async <T>(token: string) => {
  const secret = new TextEncoder().encode(SECRET_KEY);
  const { payload } = await jose.jwtVerify<T>(token, secret);

  return payload;
};
