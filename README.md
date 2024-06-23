# hotel-management-service

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


## **Instruções para instalação e contribuições no projeto**

<br>

- Faça um `fork` do projeto através do link [API Achei um pet](https://github.com/Dariellysantos/achei-um-pet-service/fork).

- Copie o código do _fork_ realizado e, no _prompt de comando_ da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma _branch_ para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `8080`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o _commit_ com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo _Pull Request_ com as contribuições para o projeto original.
<h1 align="center">

## **Features e rotas**

Esta API está sendo escutada na `porta 3000` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:3000/` ou `https://achei-um-pet-service.herokuapp.com/` antes dos endpoints de requisição.

### _Manipulando registros como pessoa usuária_

| Feature                                | Método | Rota | Exemple Value Model                       |
| -------------------------------------- | ------ | ---------------------------- |----------------|
| Login                                  | POST   | `/login`                     |                       |
| Cadastro de usuario                    | POST   | `/users`                     |
| Feed                                   | PUT    | `/posts`                     |
| Postagem detalhada                     | GET    | `/posts/:id`                 |
| UP (Curtida)                           | GET    | `/posts/:id/up`              |
| Ajudar um caso                         | GET    | `/posts/:id/help`            |
| Cadastra animais de rua                | POST   | `/posts/post`                |
| Visualizar postagens de um usuario     | POST   | `/users/:id/posts`           |
| Buscar usuario                         | GET    | `/users/:id/user`            |
| Buscar proximo a localidade do usuário | GET    | ` /posts?postalCodeFilter=5` |
| Atualizar cadastro                     | PATCH  | ` /posts/:id/update`         |
| Apagar postagem feita                  | DELETE | `/posts/user/:id/post/:id`   |