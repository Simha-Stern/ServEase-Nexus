import { JwtPayload } from 'jsonwebtoken';
import {verifyAuthToken} from './Providers/jwt';
import {Request, Response, NextFunction} from 'express';


export const auth = (req:Request, res:Response, next: NextFunction) => {
  try {
    const tokenFromClient = req.headers.authorization;
    const debtId = req.params.id;
    if (!tokenFromClient) {
      return res.status(401).json({
        message: 'No token provided',
      });
    }
    const userInfo = verifyAuthToken(tokenFromClient) as JwtPayload;
    if (!userInfo) {
      return res.status(401).json({
        message: 'Invalid token',
      });
    }
    const serviceId = userInfo.serviceId;
    if (serviceId !== debtId) {
      return res.status(401).json({
        message: 'Permission denied',
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid request',
    });
  }
};

export function tokenCheckerForDebt(token: string, info?: any): boolean {
  const decodedUser = verifyAuthToken(token) as JwtPayload;
  if (!decodedUser) {
    return false;
  }
  if (decodedUser.serviceId)
  return true;
}