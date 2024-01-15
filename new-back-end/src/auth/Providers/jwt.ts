import jwt from 'jsonwebtoken';
import { UserType } from 'src/users/dto/user.schema';

let key = 'my_private_key';

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