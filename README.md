# Entregável de Desenvolvimento Web –  Introdução ao JavaScript – Semana 03
# Sistema de Manipulacao de Arrays, DOM e Eventos

Este projeto demonstra a aplicacao pratica de recursos fundamentais do JavaScript moderno (ES6+) voltados para a movimentacao de estruturas de dados, controle de elementos HTML via Document Object Model (DOM) e gerenciamento otimizado de eventos no navegador.

## Metodos de Array Utilizados

*   Array.of: Utilizado para a inicializacao explicita e segura do array de precos, garantindo a integridade dos dados numericos na declaracao.
*   forEach: Utilizado para iterar sobre colecoes de dados sem modificar a estrutura original e sem retornar valores. Ideal para operacoes de exibicao direta ou criacao dinamica de elementos visuais.
*   map: Aplica uma funcao de transformacao em cada elemento do array e retorna uma nova colecao com exatamente a mesma quantidade de itens, preservando a imutabilidade dos dados de origem.
*   filter: Avalia cada item de um array com base em uma condicao logica e retorna um novo array contendo apenas os elementos que passaram com sucesso no teste especificado.
*   reduce: Processa os elementos de um array de forma acumulativa, transformando toda a colecao em um unico valor final (como a soma total de valores monetarios).

## Manipulacao do DOM

A manipulacao do DOM foi realizada utilizando seletores modernos como querySelector e querySelectorAll para capturar os nos HTML. O gerenciamento de estados visuais e estilizacoes foi feito atraves da propriedade classList (com os metodos add, contains e toggle), o que evita a escrita direta de estilos inline e mantem a separacao de responsabilidades entre a lógica e a estilizacao (CSS).

## Importancia do Event Delegation

O Event Delegation (Delegacao de Eventos) foi implementado atrelando um unico ouvinte de evento (addEventListener) ao elemento pai (a tag ul de ID lista), em vez de adicionar um ouvinte para cada tag li individualmente.

Essa tecnica traz dois grandes beneficios:
1. Performance: Economiza memoria do sistema, pois o navegador gerencia apenas um vinculo de evento na arvore do DOM, independentemente se a lista possui poucos ou milhares de itens.
2. Elementos Dinamicos: Permite que novos itens criados via JavaScript (como os inseridos atraves do formulario de tarefas) herdem o comportamento de clique automaticamente, ja que o evento e disparado pelo elemento pai e capturado atraves da propriedade e.target.
