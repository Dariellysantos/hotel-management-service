# hotel-management-service
### Aplicação de gerenciamento de Hóspedes de um Hotel X e suas reservas.
## **Funcionalidades**

- [x] Login
- [x] Cadastro de usuário
- [x] Listar usuario por Id
- [x] Lista de todos usuários
- [x] Alteração dados usuário
- [x] Remoção de cadastro de usuário
- [x] Cadastro de reserva
- [x] Lista de reservar por data das reservas
- [x] Alterar status da reserva por Id


## **Tecnologias, bibliotecas e dependências**


- [x] Git version
- [x] Node version
- [x] npm version
- [x] Express version
- [x] Mongoose version
- [x] Dotenv-safe version
- [x] Cors
- [x] Nodemon version 


## **Instruções para instalação e contribuições no projeto**

<br>

- Faça um `fork` do projeto através do link [Hotel manegement](https://github.com/Dariellysantos/hotel-management-service.git).

- Copie o código do _fork_ realizado e, no _prompt de comando_ da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma _branch_ para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `2323`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o _commit_ com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo _Pull Request_ com as contribuições para o projeto original.
<h1 align="center">

## **Features e rotas**

Esta API está sendo escutada na `porta 2323` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:2323/` 

### _Documentação das rotas_

| Feature                                | Método | Rota |      Model                    |
| -------------------------------------- | ------ | ---------------------------- |----------------|
| Login                                  | POST   | `/login`|  {"login" :"fulana@email.com.br","password": "Teeer4" }|                                                  
 Cadastro de usuario                    | POST   | `/user`  |{"name": "fulane de Tal","email": "fune@email.com.br","birthday": "23/04/1992","password": "Teeer44","state": " “Minas Gerais","city": " “Contagem","country": "Brasil"}|                                  
 Lista usuario ID                                   | GET    | `/user/:id`                     |
| Lista de usuario                     | GET    | `/user`                 |
| Alterar dados usuario                           | PATCH    | `/user/:id`              | {"name": "fulane de Tal","email": "fune@email.com.br","birthday": "23/04/1992","password": "Teeer44","state": " “Minas Gerais","city": " “Contagem","country": "Brasil"}|
Deletar cadastro usuario                         | DELETE    | `/user/:id`            |
|Cadastro de reserva     | POST   | `/booking`          |{"name": "GH","emailClient": "fune@email.com.br","roomNumber": "631","amountToPay": 1000.80,"dateOfStay": [12/10/2024",20/10/2024"],"status": "CONFIRMADO"}| 
 Lista de reservar por data das reservas                         | POST    | `/booking`            | {"checkin": "11/10/2024",checkout": "23/10/2024"}
|Alterar status da reserva por Id | PUT    | ` /booking/:id` |{"status": "CHECK-OUT"}
   
   <br>Criado com por **Darielly Santos** <br>
[![Linkedin Badge](https://img.shields.io/badge/-Darielly%20Santos-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/darielly-santos/)
