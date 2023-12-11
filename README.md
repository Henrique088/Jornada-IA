<h1 align="center">Jornada-IA </h1>
<p align="center">
Criação de uma inteligência Artificial 
</p>
<p align="center" >
<img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=RED&style=for-the-badge"/>
</p>

### Tópicos 

:small_blue_diamond: [Descrição sobre IA](#descrição-sobre-ia)

:small_blue_diamond: [Função da IA criada](#função-da-ia-criada)

:small_blue_diamond: [Alert](#alert)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)


## Descrição sobre IA

A Inteligência Artificial (IA) é um campo da ciência da computação que se dedica a criar sistemas capazes de realizar tarefas que normalmente requerem inteligência humana. Essas tarefas incluem o aprendizado, a percepção, o raciocínio, o reconhecimento de fala, a compreensão de linguagem natural e a tomada de decisões. O objetivo central da IA é desenvolver máquinas que possam executar funções complexas de maneira autônoma, sem intervenção humana constante.

## Função da IA criada

 A IA feita visa criar um player capaz de jogar o famoso jogo Dino T-Rex do google, sem que o mesmo perca. Para isso foi feito arquivos base de uma IA como o arquivo 
 RNA.js e o utils.js. E os demais arquivos implementam a mecânica do jogo e chama a base da IA para ir fazendo o treinamento.

 ## Alert 

 Para o funcionamento da IA é somente necessário os arquivos contidos na pasta script. 
 
## Pré requisitos

* Ter o google chrome instalado em sua máquina
* Ter o visual studio code com a extenção live server

## Como rodar a aplicação :arrow_forward:

1. Baixe o código em sua máquina. Exclua os arquivos exceto a pasta script.

2. Abra a pasta com o visual studio code.

3. Execute  o live server.

4. Digite no seu navegador google chrome

```
chrome://dino
```

5. Depois de um f12 para abrir o inspecionar.

6. E por fim vá na aba console e digite: 
```
const s = document.createElement('script');
s.type = 'module';
s.src = 'http://localhost:5500/scripts/script.js'
document.body.appendChild(s);

```

