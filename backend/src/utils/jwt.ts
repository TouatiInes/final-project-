import jwt, { SignOptions } from 'jsonwebtoken';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export const generateToken = (payload: JWTPayload): string => {
  const secret = process.env.JWT_SECRET || 'fallback-secret';
  const expiresIn = process.env.JWT_EXPIRE || '7d';

  const { userId, email, role } = payload;
  const options: SignOptions = {
    expiresIn: expiresIn
  };

  return jwt.sign({ userId, email, role }, secret, options);
};

export const verifyToken = (token: string): JWTPayload => {
  const secret = process.env.JWT_SECRET || 'fallback-secret';

  return jwt.verify(token, secret) as JWTPayload;
};
