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
# Saida(Navegador):
```text
--- BLOCO 1: ARRAYS E METODOS ---
Ola, Ana!
Ola, Bruno!
Ola, Carlos!
Nomes em maiusculas: [ 'ANA', 'BRUNO', 'CARLOS' ]
Precos acima de 20: [ 25, 40, 60 ]
Soma de todos os precos: 140
Apenas nomes dos produtos: [ 'Caderno', 'Caneta', 'Estojo', 'Mochila' ]
Produtos menores que 50: [ { nome: 'Caderno', preco: 15 }, { nome: 'Caneta', preco: 3 }, { nome: 'Estojo', preco: 20 } ]
Soma total dos produtos: R\$ 158
Caderno: R\$ 15
Caneta: R\$ 3
Estojo: R\$ 20
Mochila: R\$ 120

--- BLOCO 2: MANIPULACAO DO DOM ---
Texto do paragrafo: Primeiro paragrafo de teste.
Texto do paragrafo: Segundo paragrafo de teste.
Tem a classe destaque? true
Quantidade total de itens na lista: 6

--- BLOCO 3: EVENTOS ---
```

