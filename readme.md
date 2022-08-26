<h1 align="center">Controle Orçamento</h1>
<h3 align="center">Alura Challenge - BackEnd 4</h3>

<p align="center">💻 Aplicação desenvolvida para a 4ª edição do Alura-Challenge</p>
<hr>

# Tabela de conteúdos

<!--ts-->

-   [Tabela de Conteudo](#tabela-de-conteudo)
-   [Features](#features)
-   [Tecnologias](#tecnologias)
-   [Apresentação](#apresentação)
-   [Resumo](#resumo)
-   [Instalação](#instalação)
-   [Scripts](#scripts)
    <!--te-->
    <hr>

## Features

-   [x] Cadastro de usuário
-   [x] Cadastro de receitas e despesas
-   [x] Resumos de despesas e receitas

## Tecnologias

Esta Aplicação foi desenvolvida usando as seguintes tecnologias:

<!--ts-->

-   Node.JS
-   Express
-   Typescript
-   TypeOrm
-   MySql
-   Npm
-   Jest
-   Swagger
-   Docker
-   Prettier
-   jsonwebtoken
-   joi
-   winston
<!--te-->

## Apresentação

Há uma versão da aplicação rodando nos servidores da Azure no endereço:
https://controle-orcamento.azurewebsites.net/status

Para testes pode ser utilizado o swagger em:
https://controle-orcamento.azurewebsites.net/docs

Documentação Postman:
https://documenter.getpostman.com/view/16662719/VUqypESb

## Resumo

Aplicação de estudo criada para o Alura-Challenge, utilizando como base um serviço de controle orçamentário, onde foi implementado
um sistema de cadastro de usuário com autenticação, cadastro de receitas e despesa e retorno de informações,
inclusive por data e um resumo organizado por data e categoria de despesa.

Foi escolhido Node.js para desenvolvimento, utilizando Typescript, framework Express e TypeOrm para conexão com banco de dados.

Para o banco de dados utilizei um mySql hospedado na Azure. Também utilizei docker para subir a aplicação na Azure.

A aplicação possui sistema de autenticação utilizando token JWT, possui logs gerados com winston e validação de dados com joi.

## Instalação

Para instalação:

-   Instalar as depêndiencias com o comando `npm install`.
-   Criar um arquivo **.env** na raiz do projeto conforme o exemplo que está em **.env.example**.
-   Setar as variáveis de ambiente:
    -   `HOST_DB` - endereço do banco de dados
    -   `PORT_DB` - porta do banco de dados
    -   `USER_DB` - usuário do banco de dados
    -   `PASSWORD_DB` - senha de acesso do banco de dados
    -   `NAME_DB` - nome do banco de dados
    -   `APP_PORT` - porta em qual a aplicação irá rodar
    -   `JWT_SECRET` - palavar-segredo para geração do token JWT
    -   `JWT_EXPIRES` - tempo de expiração do token JWT
-   Criar um banco de dados com o mesmo nome contido na váriavel `NAME_DB`.
-   Efetuar o comando `npm run start`

#### Observação:

Não é necessário rodar as migrações se o arquivo `./src/datasource.ts` estiver com a propriedade `synchronize` setada como `true`, mas caso deseje poderá setar essa propriedade para `flase`, e efetuar o comando `npm run migration:up`, após a criação do banco de dados.

## Scripts:

-   _start_ - Realiza a build da aplicação e roda os arquivos em Javascript.
-   _build_ - Realiza a build da aplicação e cria uma pasta dist para os arquivos.
-   _dev_ - Roda a aplicação sem precisar realizar a build.
-   _test_ - Roda todos os testes unitários.
-   _docker:build_ - Cria uma imagem docker da aplicação, conforme o arquivo dockerfile. Gera a partir da build.
-   _docker:run_ - Serve a aplicação de acordo com a imagem criada. está configurada para utilizar as mesmas váriaveis de ambiente do arquivo **.env**.
-   _migration:create_ - Cria uma migration vazia em `.src/migrations`.
-   _migration:generate_ - Gera uma migration de acordo com modificações efetuadas nas entidades.
-   _migration:up_ - Roda as migrations.
-   _migration:down_ - Reverte a última migration.

#### Observação:

Utilize o `npm run` antes dos scripts.
