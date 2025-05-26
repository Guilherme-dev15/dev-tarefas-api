import express from 'express';
import connectDatabase from './config/database.js';
import taskRoutes from './routes/taskRoutes.js';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swaggerConfig.js';

const app = express();
const PORT = 3000;

connectDatabase();

app.use(express.json());

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas da API
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
