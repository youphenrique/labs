# frontend-assesment

> Takehome frontend challenge that evaluates javascript and problem resolution skills.

## Instruções para executar o projeto

1. Certifique-se de ter o Node.js (v12.16.1+), Yarn (preferencialmente) e o Git instalado em sua máquina;
2. Clone o repositório para sua máquina local;
3. Execute o comando `yarn` ou `yarn install` na pasta raiz do projeto para baixar as dependências;
4. Crie um arquivo (ou renomeie o arquivo `.env.example` para) `.env`, na pasta raiz do projeto, e insira nele o seguinte conteúdo:

```shell script
BROWSER=none
REACT_APP_API_BASE_URL=https://deckofcardsapi.com/api
```

5. Para usar a aplicação, execute o comando `yarn dev`; quando o servidor estiver pronto, basta acessar o endereço `http://localhost:3000`;

6. Para executar os testes automatizados utilize o comando abaixo de acordo com o seu sistema:

- Windows (cmd.exe)

```shell script
set "CI=true" && yarn test:integration && yarn test:e2e:windows
```

> As aspas em torno da atribuição da variável são necessárias para evitar um espaço em branco à direita.

- Linux, macOS (Bash)

```shell script
CI=true yarn test:integration && yarn test:e2e
```

7. (OPCIONAL) Caso queira ver o [StoryBook](https://storybook.js.org/) utilizado no projeto, execute o comando `yarn storybook`;

> Quando o servidor estiver pronto, automaticamente o _browser_ abrirá uma nova aba com o endereço `http://localhost:9009`;

O projeto foi inicializado com o boilerplate gerado pelo [Create React App](https://github.com/facebook/create-react-app).
