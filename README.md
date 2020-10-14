# Chat App - @Author Ismael Alves <cearaismael1997@gmail.com>
Este projeto foi gerado com [Vue.js](https://vuejs.org/) versão 2.6.11.

## Screenshots

Login app view:

<img src="https://raw.githubusercontent.com/ismaelalvesgit/vue-chat/master/app.png" width="800">

Chat app:

<img src="https://raw.githubusercontent.com/ismaelalvesgit/vue-chat/master/app01.png" width="800">

## Development

### Setup

#### 1) Instalação de dependencias
```sh
npm install

# Você pode instalar vue CLI globalmeente em seu SO
npm install -g @vue/cli @vue/cli-service-global
# OU
yarn global add @vue/cli @vue/cli-service-global
```
#### 2) Iniciar o servidor de desenvolvimento
``` sh
npm run serve
```
### Build Docker
Para gerar um nova imagem docker do projeto, o arquivo de configuração da imagem está localizado em `Dockerfile`.
``` sh
npm run docker:build
```
Você tambem pode iniciar uma instancia de sua imagem local, o arquivo de configuração da imagem está  localizado em `Dockerfile`.
``` sh
npm run docker:run
```

### Build da aplicação
Para gerar um build do projeto basta roca o comando abaixo no seu CMD ou TERMINAL do seu SO, para mais informações 
sobre build do [Vue.js](https://vuejs.org/) acesse este [Link](https://cli.vuejs.org/guide/mode-and-env.html).
```sh
npm run build
```
### Customização de Configurações do projeto
Verifique [Configurações e Referencias](https://cli.vuejs.org/config/).