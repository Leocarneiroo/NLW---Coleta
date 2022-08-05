import express from 'express';
import routes from './routes';


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

app.use(express.json());

app.use(routes);

app.listen(3333);