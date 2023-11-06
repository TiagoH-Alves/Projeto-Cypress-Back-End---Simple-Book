# Projeto Cypress para Validação da API Simple Books

Este projeto Cypress realiza a validação da API Simple Books, incluindo a verificação do status da API, do endpoint de boas-vindas e da criação de novas ordens.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter o [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html) instalado em seu ambiente.

## Configuração

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/TiagoH-Alves/SempreIt.git
```

2. Instale as dependências:

```bash
npm install
```

3. Abra o Cypress com o seguinte comando:

```bash
npx cypress open
```

4. Voc pode rodar os testes via cmd

```bash
npx cypress run 
```
Isso iniciará a execução dos testes do Cypress. Os resultados dos testes serão exibidos diretamente no prompt de comando.

## Arquivos de Teste
Este projeto inclui os seguintes arquivos de teste:

### 1. `GetStatus.cy.js`

Este arquivo de teste verifica o status da API e seus campos. Ele realiza uma solicitação GET para o endpoint `/status` da API e verifica se o código de status é 200 (OK) e se os campos da resposta estão corretos.

### 2. `GetWelcome.cy.js`

Este arquivo de teste verifica o status da API e seus campos. Ele realiza uma solicitação GET para o endpoint `/welcome` da API e verifica se o código de status é 200 (OK) e se os campos da resposta estão corretos.

### 3. `PostNewOrder.cy.js`

Este arquivo de teste valida o envio de uma nova ordem válida. Ele realiza uma solicitação POST para o endpoint `/orders` da API, incluindo os dados necessários no corpo da solicitação. Em seguida, verifica se a API responde com um código de status 201 (Created) e se a resposta contém a propriedade `created` definida como `true`.

## Executando os Testes

Após configurar o ambiente e abrir o Cypress, você pode executar os testes de API selecionando o arquivo de teste desejado na interface do Cypress ou via CMD.