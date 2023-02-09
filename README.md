# Boas vindas ao repositório do CPF API!

**Overview**
- Projeto realizado com Docker, Node, mySQL, Typescript, Express;
- RESTful API;
- Arquitetura em camadas (model, service, controller e rotas);
- POO;
- SOLID;

**Como rodar o projeto em sua máquina:**
 - Na raiz, rode em seu terminal o comando 'docker-compose up -d';
 - Rode o comando 'docker exec -it backend bash' para acessar o terminal do container Node recém criado;
 - No terminal do Node (container backend) rode o comando 'npm install' (para instalar as dependencias);
 - Rode o comando 'npm run create:db' (para criar e popular o banco de dados);
 - Rode o comando 'npm run dev' (para executar o server);