# Boas vindas ao repositório do CPF API!



**Overview**

A CPF API foi criada com o intuito de poder adicionar, consultar, e excluir CPFs com risco de fraude em uma lista restrita.

**Tecnologias utilizadas**

- Projeto realizado com Docker, Node, MySQL, Typescript, Express;
- Testes com mocha, chai e sinon;
- RESTful API;
- Arquitetura em camadas (model, service, controller e routes);
- POO;
- Utilização de princípios SOLID;

**Como rodar o projeto em sua máquina:**

 - Na raiz, rode em seu terminal o comando 'docker-compose up -d';
 - Rode o comando 'docker exec -it backend bash' para acessar o terminal do container Node recém criado;
 - No terminal do Node (container backend) rode o comando 'npm install' (para instalar as dependencias);
 - Rode o comando 'npm run create:db' (para criar e popular o banco de dados);
 - Rode o comando 'npm run dev' (para executar o server);
<br><br> 
# Enpoints:
<br> 

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

````
{
	"type": "InvalidException",
	"message": "CPF is not valid."
}
````

{
	"type": "ExistsCpfException",
	"message": "CPF alerady exists"
}

{
	"type": "NotFoundCpfException",
	"message": "CPF not found"
}