# DevTarefas API 📝

API RESTful para gerenciamento de tarefas, construída com Node.js, Express e MongoDB. Permite criar, listar, atualizar e deletar tarefas. A documentação interativa está disponível via Swagger.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB Atlas (nuvem)
- Mongoose
- Swagger (Documentação)
- Joi (Validação de dados)
- Nodemon (Ambiente de desenvolvimento)

---

## 📦 Instalação e Execução

```bash
# 1. Clonar o repositório
git clone https://github.com/Guilherme-dev15/dev-tarefas-api.git

# 2. Acessar a pasta
cd dev-tarefas-api

# 3. Instalar as dependências
npm install
```

### ☁️ Configuração do MongoDB Atlas (banco na nuvem)

- Acesse: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Crie uma conta gratuita e configure um cluster gratuito (M0).
- Crie um banco de dados chamado `devtarefas`.
- Crie um usuário com login e senha.
- Libere acesso à sua máquina com IP: `0.0.0.0/0` (acesso público).
- Copie a string de conexão (exemplo):

```plaintext
mongodb+srv://<usuário>:<senha>@<cluster>.mongodb.net/devtarefas?retryWrites=true&w=majority
```

- Crie um arquivo `.env` na raiz do projeto com o conteúdo:

```plaintext
MONGODB_URI=mongodb+srv://<usuário>:<senha>@<cluster>.mongodb.net/devtarefas
PORT=3000
```

### ▶️ Rodando a aplicação

```bash
npm run dev
```

O servidor será iniciado em [http://localhost:3000](http://localhost:3000).

---

## 📑 Documentação da API

Acesse a documentação Swagger:

👉 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 🔧 Endpoints principais

| Método | Rota            | Descrição                          |
|--------|-----------------|------------------------------------|
| GET    | /tasks          | Listar todas as tarefas           |
| GET    | /tasks/:id      | Buscar tarefa por ID               |
| POST   | /tasks          | Criar nova tarefa                  |
| PUT    | /tasks/:id      | Atualizar uma tarefa existente      |
| DELETE | /tasks/:id      | Remover uma tarefa                 |

---

## 🧪 Testes via Swagger

Você pode testar todos os endpoints diretamente no navegador, sem precisar de Postman, acessando [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

---

## 📁 Estrutura do Projeto

```bash
src/
│
├── config/          # Conexão com o MongoDB
├── controllers/     # Lógica dos endpoints
├── docs/            # Configuração do Swagger
├── middlewares/     # Validação com Joi
├── models/          # Schema do Mongoose
├── routes/          # Arquivos de rota
├── app.js           # Configuração principal do Express
└── server.js        # Inicialização da aplicação
```

---

## 👨‍💻 Autor

**GUILHERME DOS ANJOS MACEDO**  
📧 guilherme.macedo1598@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/guilherme-macedo)  
🐙 GitHub: [@Guilherme-dev15](https://github.com/Guilherme-dev15)