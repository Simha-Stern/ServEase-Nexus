import {verifyAuthToken} from './Providers/jwt';

const auth = (req, res, next) => {
  try {
    const tokenFromClient = req.headers.authorization;
    if (!tokenFromClient) {
      return res.status(401).json({
        message: 'No token provided',
      });
    }
    const userInfo = verifyAuthToken(tokenFromClient);
    if (!userInfo) {
      return res.status(401).json({
        message: 'Invalid token',
      });
    }
    req.user = userInfo;
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
  module.exports = auth;
};
