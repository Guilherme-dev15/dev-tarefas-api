// src/docs/swaggerConfig.js
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DevTarefas API',
      version: '1.0.0',
      description: 'API para gerenciamento de tarefas com Node.js, Express e MongoDB',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // ← Isso é ESSENCIAL! Certifique-se que o path está correto.
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
