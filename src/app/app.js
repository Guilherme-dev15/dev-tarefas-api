
import express from 'express';
import cors from 'cors';
import taskRoutes from "../routes/taskRoutes.js";
import swaggerUi from  'swagger-ui-express';
import swaggerSpec from '../docs/swaggerConfig.js';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Configuração do Swagger para documentação da API

// Middlewares
app.use(cors()); // Para permitir requisições de diferentes domínios (CORS)
app.use(express.json()); // Para permitir o parsing de JSON no corpo das requisições

// Rotas
app.use('/api/tasks', taskRoutes); // Definindo o prefixo "/api/tasks" para as rotas relacionadas às tarefas

// Rota de teste para garantir que a API está funcionando
app.get('/', (req, res) => {
  res.send('API Dev-Tarefas funcionando!');
});

export default app;
