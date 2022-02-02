import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'
import userRepository from '../repositories/user.repository';

const usersRoute = Router();
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userRepository.findAllUsers();
        res.status(StatusCodes.OK).send(users);
    } catch (error) {
        next(error);
    }
});

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send(user);
    } catch (error) {
        next(error);
    }

});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = req.body;
        const uuid = await userRepository.create(newUser);
        newUser.uuid = uuid;
        res.status(StatusCodes.CREATED).send(newUser);
    } catch (error) {
        next(error);
    }
});

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const usuarioAlterado = req.body;
        usuarioAlterado.uuid = uuid;
        await userRepository.update(usuarioAlterado);
        res.sendStatus(StatusCodes.OK);
    } catch (error) {
        next(error);
    }
});

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        await userRepository.remove(uuid);
        res.sendStatus(StatusCodes.OK);
    } catch (error) {
        next(error);
    }
});

export default usersRoute;