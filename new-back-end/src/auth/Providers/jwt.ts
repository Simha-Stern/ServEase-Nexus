import jwt from 'jsonwebtoken';
import { UserType } from 'src/users/dto/user.schema';
import { config } from 'dotenv';

config({ path: '../../../.env' });

let key = process.env.JWT_PRIVATE_KEY;

const generateAuthToken = (user: UserType) => {
    const { id, isAdmin, active } = user;
    const token = jwt.sign({ id, isAdmin, active }, key);
    return token;
}

const verifyAuthToken = (tokenFromClient: string) => {
    try {
        const userData = jwt.verify(tokenFromClient, key);
        return userData;
    } catch (err) {
        return null;
    }
}

export { verifyAuthToken, generateAuthToken };