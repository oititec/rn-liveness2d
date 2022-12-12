# 1. Sobre o Repositório

Este repositório é responsável pela biblioteca NPM do Liveness Oiti, com ele é possível instalar e usar as funções de FaceCaptcha e de Documentoscopia da Oititec disponíveis para aplicativos híbridos em React Native.

# 2. O que é a biblioteca?

O NPM (node package manager) é o gerenciador de pacotes do node.js (runtime de javascript).

Em primeiro lugar, com o NPM você pode gerenciar dependências do seu projeto, acessar o repositório do NPM e ter acesso a inúmeras bibliotecas e frameworks JavaScript, permite a instalação/desinstalação dos mesmos assim como a criação de seus próprios módulos públicos ou privados.

# 3. Uso

### Liveness Oiti

As instruções de uso, integração, implementação e customização do **Liveness Oiti** podem ser acessadas através do sumário abaixo:

FaceCaptcha

- [(ANDROID)Guia de estilização do FaceCaptcha](Documentation/xmlCUSTOMIZATION.md.md);
- [(iOS)Guia de estilização do FaceCaptcha](Documentation/xmlCUSTOMIZATION.md.md);

Documentoscopia:

- [(ANDROID)Guia de estilização da Documentoscopia](Documentation/liveness3DThemeiOSCUSTOMIZATION.md);
- [(iOS)Guia de estilização da Documentoscopia](Documentation/liveness3DThemeiOSCUSTOMIZATION.md);

React Native:

- [Utilizando NativeModules do React](Documentation/reactnativeUSAGE.md).

# 4. Como executar o clone do Repositório?

Execute o clone do repositório abaixo para baixar o código de exemplo:

```sh
git clone https://github.com/oititec/liveness3d-bridge-rn
```

# 5. Como rodar o Script?

Para rodar o script desse repositório você deve instalar as dependências do projeto, então na pasta root do projeto clonado rodar o comando.

## 5.1 Yarn

```sh
yarn
```

## 4.2 Executar Projeto

> Executar sempre em dispositivos físicos e não no simulador do iOS e Android

Yarn

```sh
yarn example android
```

```sh
yarn example ios
```
