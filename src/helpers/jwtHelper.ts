import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const myJwt: any = jwt;
const createToken = (payload: object, secret: Secret, expireTime: string) => {
  return myJwt.sign(payload, secret, { expiresIn: expireTime });
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelper = { createToken, verifyToken };
