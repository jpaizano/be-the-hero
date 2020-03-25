// Importa as funcionalidade do express
// para a variável express
const express = require('express');

const cors = require('cors');

// Importa as rotas
const routes = require('./routes');

// Variável para instanciar a aplicação
const app = express();

app.use(cors());

// Identificar arquivos em json
app.use(express.json());

app.use(routes)

// Porta de acesso a aplicacao
app.listen(3333);