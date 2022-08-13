import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';


// rota é o endereço completo da requisição
// recurso: qual a entidade que estamos acessando no sistema

//GET : buscar informações no BE
//POST: enviar informações no BE
//PUT: atualizar informação
//DELETE : deletar informação

//Request Params - parametros na propria rota qe identificam um unico recurso
//Query params - parametros da propria rota, geralmente opcionais, para filtros e paginação
//Request body - parametros para criação/atualização de informações

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

app.listen(3333);