import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users.route';

const app = express();
// adicionando um midleware para interpretar json
app.use(express.json());
// configurando para o express entender query string
app.use(express.urlencoded({ extended: true }));
//configuração de rotas
app.use(usersRoute);
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso' });
})

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});
