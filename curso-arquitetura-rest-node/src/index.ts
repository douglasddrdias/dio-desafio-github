import express from 'express'
import errorHandler from './middlewares/error-handler-middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();
// adicionando um middleware para interpretar json
app.use(express.json());
// configurando para o express entender query string
app.use(express.urlencoded({ extended: true }));
//configuração de rotas
app.use(usersRoute);
app.use(statusRoute);

// configurando os Handlers de erro
app.use(errorHandler);

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});
