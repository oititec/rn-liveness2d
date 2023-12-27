# [RN] @oiti/rn-liveness2d

# 1. Sobre o Repositório

Este repositório é responsável pela biblioteca NPM do Liveness Oiti, com ele é possível instalar e usar as funções de `startLiveness2d()` e de `startDocumentscopy()` e as views `<Liveness2dView />` e `<DocumentsCopyView />` da Oititec disponíveis para aplicativos híbridos em React Native.

# 2. O que é a biblioteca?

O NPM (node package manager) é o gerenciador de pacotes do node.js (runtime de javascript).

Com o NPM você pode gerenciar dependências do seu projeto, acessar o repositório do NPM e ter acesso a inúmeras bibliotecas e frameworks JavaScript, permite a instalação/desinstalação dos mesmos assim como a criação de seus próprios módulos públicos ou privados.

# 3. Requisitos Mínimos

| Android   | iOS     |
| --------- | ------- |
| Gradle: 8 | iOS: 11 |

# 3. Uso (PASSO 1)

As instruções de uso, integração, implementação e customização do **Liveness Oiti** podem ser acessadas através das etapas abaixo:

## 3.1. Instalação

Usando NPM:

```bash
npm install @oiti/rn-liveness2d
```

ou usando YARN

```bash
yarn add @oiti/rn-liveness2d
```

## 3.2. iOS Configuração

Adicionar o Pod do Liveness2D no seu Podfile que está localizado dentro da pasta `ios`

```objectivec
pod 'OILiveness2D', '1.2.2', :source => 'https://github.com/oititec/ios-artifactory.git'
```

## 3.3. Android Configuração

Adicionar o repositório do SDK Liveness2D no seu build.gradle que está localizado dentro da pasta `android` em allprojects ->repositories

```gradle
maven {
    url 'https://raw.githubusercontent.com/oititec/android-oiti-versions/master'
}
```

# 4. Uso no Javascript (PASSO 2)

Primeiro devemos chamar a função desejada da biblioteca '@oiti/rn-liveness2d'

```
import { FUNÇÕES e VIEWS DESEJADAS } from '@oiti/rn-liveness2d';
```

## 4.1. Funções

### Diagrama E2E startLiveness2d

![E2Eliveness2d.png](/Documentation/assets/E2Eliveness2d.png)

### Diagrama E2E startDocumentscopy()

![E2Edocumentscopy.png](/Documentation/assets/E2Edocumentscopy.png)

### 4.1.1. Funções Existentes

| Função                        | Parâmetros | Retorno                    |
| ----------------------------- | ---------- | -------------------------- |
| startLiveness2d("APP KEY");   | AppKey     | RESULT_OK, RESULT_CANCELED |
| startDocumentscopy("APP KEY") | AppKey     | RESULT_OK, RESULT_CANCELED |

> AppKey: gerada na etapa 2 da [documentação CertifaceID](https://certifaceid.readme.io/docs/integra%C3%A7%C3%A3o-atualizada)

### 4.1.2. Exemplo de uso (Funções)

Após efetuar a importação da biblioteca, deve ser aplicada a app Key gerada dentro do parâmetro da função desejada, no exemplo abaixo chamamos a função quando clicamos no botão "Liveness 2D" ou "Documentoscopia"

```jsx
export default function App() {
  const [result, setResult] = React.useState<string | undefined>();
  const appKey = 'APP KEY';

const options = {
    appkey: appKey,
    baseUrl: 'https://comercial.certiface.com.br:8443/',
    apparence: {
      backgroundColor: '#025951',
      loadingColor: '#0CF25D',
    },
  };

  return (
    <View>
    //Liveness2D
      <Button
        onPress={() => {
          startLiveness2d(options).then(setResult);
        }}
        title="Liveness 2D"
      />
    //Documentoscopia
      <Button
        onPress={() => {
          startDocumentscopy(options).then(setResult);
        }}
        title="Documentoscopia"
      />
    </View>
  );
}

```

## 4.2. View Customizadas

Na biblioteca é possível aplicar uma view/componente para customizar as telas de `instruções` e a tela de permissão.

| View               | Propiedades | Descrição |
| ------------------ | ----------- | --------- |
| <Liveness2dView /> | options     |

navigation
callbackView
CustomInstructionView
CustomPermissionView | View do Liveness 2d para carregar as telas customizadas. |
| <DocumentsCopyView /> | options
navigation
callbackView
CustomInstructionView
CustomPermissionView | View da Documentoscopia para carregar as telas customizadas. |

### 4.2.1. Propriedades

| Propriedade           | Obrigatoriedade | Tipo                  | Descrição                                                                                                             |
| --------------------- | --------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| options               | SIM             | JSON                  | App Key gerada no backend da aplicação e retornada para uso da biblioteca.                                            |
| navigation            | SIM             | React navigation prop | Ambiente que deseja estar rodando a aplicação                                                                         |
| callbackView          | SIM             | string                | Endereço de endpoint da certiface, você pode usar uma string vazia caso deseje que a biblioteca defina um automático. |
| CustomInstructionView | NÃO             | Component             | Aplica as propriedades de customização do carregamento antes de começar o Liveness2d.                                 |
| CustomPermissionView  | NÃO             | Component             | Aplica as propriedades de customização do carregamento antes de começar o Liveness2d.                                 |

### 4.2.2. JSON `options`

Para aplicar as configurações na View você deve aplicar as seguintes propriedades em formato JSON no Javascript:

```jsx
const options = {
  appkey: appKey,
  baseUrl: 'https://comercial.certiface.com.br:8443/',
  apparence: {
    backgroundColor: '#025951',
    loadingColor: '#0CF25D',
  },
};
```

### 4.2.3. Chaves do `options`

| View      | Valores                                  | Descrição                                                                                                             |
| --------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| appkey    | appKey                                   | App Key gerada no backend da aplicação e retornada para uso da biblioteca.                                            |
| baseUrl   | https://comercial.certiface.com.br:8443/ | Endereço de endpoint da certiface, você pode usar uma string vazia caso deseje que a biblioteca defina um automático. |
| apparence | {                                        |

      backgroundColor: '#025951',
      loadingColor: '#0CF25D',

} | Aplica as propriedades de customização do carregamento antes de começar o Liveness2d. |

### 4.2.4. Exemplo de uso (View Customizada)

Para utilizar uma view customizada você pode aplicar o seguinte código em sua biblioteca React Native.

```jsx
import * as React from 'react';

import { DocumentsCopyView } from '@oiti/rn-liveness2d';

export default function Documentscopy({ navigation }: { navigation: any }) {
  const appKey = 'SUA_APP_KEY_AQUI';
  const options = {
    appkey: appKey,
    environment: '.HML',
    baseUrl: 'https://comercial.certiface.com.br:8443/',
    apparence: {
      backgroundColor: '#025951',
      loadingColor: '#0CF25D',
    },
  };
  return (
    <DocumentsCopyView
      options={options}
      navigation={navigation}
      callbackView="Home"
      CustomInstructionView={CustomInstructionView}
      CustomPermissionView={CustomPermissionView}
    />
  );
}
```

# 5. Como executar o clone do Repositório?

Execute o código abaixo em seu terminal para clonar o código:

```bash
git clone https://github.com/oititec/rn-liveness2d
```

# 6. Como rodar o Script?

Para rodar o script desse repositório você deve instalar as dependências do projeto, então na pasta root do projeto clonado rodar o comando.

## 7 Yarn

```bash
yarn
```

## 7.1 Executar Projeto

> Executar sempre em dispositivos físicos e não no simulador do iOS e Android

Yarn

```bash
yarn example android
```

```bash
yarn example ios
```
