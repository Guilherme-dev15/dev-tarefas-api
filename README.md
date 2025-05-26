DevTarefas API 📝
API RESTful para gerenciamento de tarefas, construída com Node.js, Express e MongoDB. Permite criar, listar, atualizar e deletar tarefas. A documentação está disponível via Swagger.

🚀 Tecnologias Utilizadas
Node.js
Express.js
MongoDB
Mongoose
Swagger (Documentação)
Joi (Validação)
Nodemon
📦 Instalação e Execução
bash
Run
Copy code
# Clonar o repositório
git clone https://github.com/Guilherme-dev15/dev-tarefas-api.git

# Acessar a pasta
cd dev-tarefas-api

# Instalar as dependências
npm install

# Iniciar o servidor
npm run dev
📑 Documentação da API
Acesse a documentação Swagger:

👉 http://localhost:3000/api-docs

🔄 Endpoints principais
Método

Rota

Descrição

GET

/tasks

Listar todas as tarefas

GET

/tasks/:id

Buscar tarefa por ID

POST

/tasks

Criar nova tarefa

PUT

/tasks/:id

Atualizar uma tarefa existente

DELETE

/tasks/:id

Remover uma tarefa

🧪 Testes via Swagger
Você pode testar todos os endpoints diretamente pelo Swagger UI sem necessidade de usar Postman.

📁 Estrutura do Projeto
bash
Run
Copy code
src/
│
├── config/          # Conexão com o banco de dados
├── controllers/     # Lógica dos endpoints
├── docs/            # Swagger config
├── middlewares/     # Validação de dados
├── models/          # Schema do Mongoose
├── routes/          # Rotas da aplicação
├── app.js           # Configuração principal do Express
├── server.js        # Início da aplicação


👨‍💻 Autor
GUILHERME DOS ANJOS MACEDO

📍 São Paulo/SP
📧 guilherme.macedo1598@gmail.com
🔗 LinkedIn
🐙 GitHub: @Guilherme-dev15