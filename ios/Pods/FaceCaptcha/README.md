#  Certiface para iOS

Neste repositório encontre as documentações para **iOS** sobre o **Liveness FaceCaptcha**, **Liveness 3D** e **Documentoscopia**.


## Sobre

O Liveness, ou Prova de Vida, pode ser executado através de  SDK único que reúne os tipos: *Liveness FaceCaptcha* e *Liveness 3D*. 

Os tipos de Liveness serão apresentados na demonstração do serviço e a escolha de um deles deve ser efetuada mediante contratação. Um diagnóstico será efetuado pelo time comercial, responsável por ofertar a melhor experiência para o cliente, considerando seu o modelo de negócio e o comportamento de seus usuários.

Para cada tipo de Liveness, são apresentados propriedades técnicas específicas. Assim, a pessoa desenvolvedora deve executar os comandos pertencentes ao tipo do serviço contratado.

Abaixo, estão descritos os processos de: instalação, uso, guias de migração e outros documentos. Esses processos integram o projeto FaceCapctha.

##  Instalação

O SDK está disponível via [CocoaPods](https://cocoapods.org/), forma recomendada. A instalação também pode ser realizada manualmente.


####  CocoaPods

1. No início do `Podfile`, inclua a linha:

```rb
source 'https://github.com/oititec/liveness-ios-specs.git'
```

2. Após isso, adicione a dependência:

```rb
pod 'FaceCaptcha', '~> 3.1.1'
```

3. Rode `pod install`.

####  Manual

Para adicionar o SDK manualmente no seu projeto, siga estas [instruções](Documentation/ManualInstallation.md).

##  Uso

###  Permissões de acesso

No `Info.plist` do projeto, adicione a descrição de uso de câmera (`Privacy - Camera Usage Description`).

![Instalação 4](Documentation/Images/installation_4.png)


###  Liveness FaceCaptcha

As instruções de uso, integração e implementação do **Liveness FaceCaptcha** podem ser acessadas nos links abaixo:

  - [Guia de uso e integração](Documentation/FaceCaptcha-Usage.md);
  - [Guia de implementação de view customizada](Documentation/FaceCaptcha-CustomView.md).

###  Liveness 3D

As instruções de uso, integração, implementação e customização do **Liveness 3D** podem ser acessadas nos links abaixo: 

  - [Guia de uso e integração](Documentation/Liveness3D-Usage.md);
  - [Guia de implementação de view customizada](Documentation/Liveness3D-CustomView.md);
  - [Guia de customização do Liveness3DTheme](Documentation/Liveness3D-Liveness3DTheme.md).
  - [Exemplo de Projeto: criação e inicialização](https://github.com/oititec/liveness3d-ios-sample)

###  Documentoscopia

As instruções de uso e integração da **Documentoscopia** podem ser acessadas nos links abaixo:

  - [Guia de uso e integração](Documentation/Documentscopy-Usage.md);
  - [Guia de customização de view customizada](Documentation/Documentscopy-CustomView.md).



## Outros Documentos


###  Sample

Um exemplo de implementação pode ser encontrado no projeto [SampleFaceCaptcha](https://github.com/oititec/liveness-ios-sdk/tree/main/SampleFaceCaptcha "SampleFaceCaptcha"), neste mesmo repositório.

### Troubleshooting

- [Troubleshooting](Documentation/Troubleshooting.md)

###  Changelog

- As novidades das versões podem ser acessadas [neste link](Documentation/Changelog.md).

##  Guias de migração

- [3.0.0](Documentation/Migration-Guide-3.0.0.md) - BREAKING CHANGE
- [2.0.0](Documentation/Migration-Guide-2.0.0.md) - BREAKING CHANGE
- [1.2.0](Documentation/Migration-Guide-1.2.0.md) - BREAKING CHANGE

>⚠️ **Para conhecer mais sobre Liveness, consulte [este link.](https://certifaceid.readme.io/docs/liveness-detection-vs-atualizada)**

