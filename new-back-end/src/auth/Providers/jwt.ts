import jwt from 'jsonwebtoken';
import config from 'config';

const key = config.get('JWT_KEY');

const generateAuthToken = user => {
    const { _id, isAdmin, }
}