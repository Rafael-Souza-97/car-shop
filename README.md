# Car Shop

Aplicação realizada enquanto aluno da [Trybe](https://www.betrybe.com/) para reforçar os conhecimentos sobre [MongoDB](https://www.mongodb.com/).

Neste projeto, foi aplicada a `Programação Orientada a Objetos (POO)` para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. Para isso, foi utilizado o banco de dados [MongoDB](https://www.mongodb.com/), um banco de dados `NoSQL` orientado a documentos, através do framework do [Mongoose](https://mongoosejs.com/), que é uma biblioteca do Node.js que permite a modelagem de dados e a interação com o [MongoDB](https://www.mongodb.com/) de forma simplificada.

Para garantir a qualidade e confiabilidade da API construída, foram realizados testes automatizados utilizando as bibliotecas [Mocha](https://mochajs.org/), [Sinon](https://sinonjs.org/), [Chai](https://www.chaijs.com/) e [Jest](https://jestjs.io/). Essas ferramentas permitem a criação de testes unitários, de integração e de aceitação, possibilitando a validação do comportamento da aplicação em diferentes níveis.

<br>

<details>
  <summary><strong>Como instalar o Projeto Car Shop</strong></summary><br />

## Instalação
 
<hr>
 
### Rodando a aplicação via [Docker](https://www.docker.com/)

> - :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.

> - :warning: Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima

> - :warning: Se você se deparar com o erro abaixo, quer dizer que sua aplicação já esta utilizando a `porta 3000`, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop <nome-do-container>`

<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/car-shop.git`:

```bash
git clone git@github.com:Rafael-Souza-97/car-shop.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd car-shop
```

<br>

- Rode o serviço `node` com o comando `docker-compose up -d`:

 > - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
 > - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
 
```bash
docker-compose up -d
```

<br>

- Use o comando `docker exec -it Commerce bash`:

 > - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

```bash
docker exec -it car_shop bash
```

<br>

- Instale as depëndencias, caso necessário, com `npm install` (dentro do bash do container):

```bash
npm install
```

<br>
<hr>
 
### Rodando a aplicação SEM [Docker](https://www.docker.com/)

 > :warning: Para rodar a aplicação desta forma, obrigatoriamente você deve ter o [Node](https://nodejs.org/en/) instalado em seu computador.
 
<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/car-shop.git`:

```bash
git clone git@github.com:Rafael-Souza-97/car-shop.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd car-shop
```

- Instale as depëndencias com `npm install`:

```bash
npm install
```

<hr>
</details>
  
<br>
  
## Autor

- [Rafael Souza](https://github.com/Rafael-Souza-97)

## Referências

 - [Trybe](https://www.betrybe.com/)

## Tecnologias / Ferramentas utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [API RESTful](https://blog.betrybe.com/desenvolvimento-web/api-rest-tudo-sobre/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [POO](https://blog.betrybe.com/tecnologia/poo-programacao-orientada-a-objetos/#:~:text=A%20programa%C3%A7%C3%A3o%20orientada%20a%20objetos,que%20existe%20s%C3%A3o%20os%20objetos.)
- [SOLID](https://blog.betrybe.com/linguagem-de-programacao/solid-cinco-principios-poo/)
- [Thunder Client](https://www.thunderclient.com/)
- [ESLint](https://eslint.org/)
- [Zoom](https://zoom.us/)
- [Slack](https://slack.com/intl/pt-br/)
- [VsCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) & [GitHub](https://github.com/)
- [Linux - Ubuntu](https://ubuntu.com/)
  
## Testes

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Jest](https://jestjs.io/)

## Infos Adicionais

- ###### Percentual de cumprimento de requisitos ([Trybe](https://www.betrybe.com/))- 100%

## Preview

https://user-images.githubusercontent.com/99055008/220996035-feba0c43-c51e-480f-840d-1b190370ece0.mp4
