# Boas vindas ao repositório do CPF API!



**Overview**

A CPF API foi criada com o intuito de poder adicionar, consultar, e excluir CPFs com risco de fraude em uma lista restrita.
<br><br>

**Tecnologias**

- Projeto realizado com Docker, Node, MySQL, Typescript, Express;
- Testes com mocha, chai e sinon;
- RESTful API;
- Arquitetura em camadas (model, service, controller e routes);
- POO;
- Utilização de princípios SOLID;
<br><br>

**Como rodar o projeto em sua máquina:**

 Na raiz, rode em seu terminal o comando:
 ```
 docker-compose up -d
 ```
 Para acessar o terminal do container Node recém criado rode o comando:
 ```
 docker exec -it backend bash
 ```
 ******A partir de agora, os comandos devem ser rodados no terminal do container backend**
 <br>
 <br>
 Para instalar as dependências, rode o comando:
 ```
 npm install
 ```
 Para criar e popular o banco de dados, rode o comando:
  ```
 npm run create:db
 ```
 Para executar o server, rode o comando:
 ```
 npm run dev
 ```
 Para executar os testes, rode o comando:
 ```
 npm run test
 ```
<br>

# Endpoints:

*Para executar manualmente as requisições, caso use o Thunder Client, importe a _thunder-collection_cpfApi.json_, localizada na raiz do projeto.

-----
## MÉTODO POST
-----
<br> 

  **URL: _/cpf_**

  **Funcionalidade:** Adiciona um novo CPF à lista <br>
  Input Body no formato:
  ````
  { "cpf": "12345678901"}
  ````
<br>

-----
## MÉTODO GET
-----
<br> 

  **URL: _/cpf_**

  **Funcionalidade:** Retorna todos os CPFs da lista no formato:<br>
  ```
  [
    {
      cpf: '11111111111',
      createdAt: '2023-01-17T22:22:08.547Z',
    },
    {
      cpf: '22222222222',
      createdAt: '2023-01-17T22:22:08.547Z',
    },
  ]
  ```
  <br>
  
  **URL: _/cpf/{numeroCPF}_**

  **Funcionalidade:** Retorna o CPF buscado, caso esteja na lista. Caso contrário, retornará uma exceção.
  <br><br> 

-----
## MÉTODO DELETE
-----
<br> 

  **URL: _/cpf/{numeroCPF}_**

  **Funcionalidade:** Caso o CPF passado esteja na lista restrita, fará a exclusão. Se não for um CPF válido, retornará exceção.

-----
## Exceções
-----
<br>
CPF inválido:

````
{
	"type": "InvalidException",
	"message": "CPF is not valid."
}
````

CPF já existente na lista:

````
{
	"type": "ExistsCpfException",
	"message": "CPF alerady exists"
}
````

CPF não encontrado:
````
{
	"type": "NotFoundCpfException",
	"message": "CPF not found"
}
````
<br>
**Code reviews, comentários e ideias de melhoria são sempre muito bem vindas!
Agradeço sua visita e aguardo seu contato :D**
<br>
<br>

luizgbes@gmail.com

<a href="https://www.linkedin.com/in/lgbestel">
  <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>