import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken'
import userRepository from "../repositories/user.repository";

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];
        if (!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informadas!');
        }
        const [authenticationType, token] = authorizationHeader.split(' ');
        if (authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de athenticação inválido!');
        }
        const secretKey = 'my_secret_key';
        try {
            const tokenPayload = JWT.verify(token, secretKey);
            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Token Inválido!');
            }
            const uuid = tokenPayload.sub;
            const user = {
                uuid: uuid,
                username: tokenPayload.username
            };
            req.user = user;
            next();
        } catch (e) {
            throw new ForbiddenError('Token Inválido!');
        }
    } catch (e) {
        next(e);
    }
}

export default jwtAuthenticationMiddleware;