// BLOCO 1 - ARRAYS E METODOS

console.log("--- BLOCO 1: ARRAYS E METODOS ---");

// 1. Array de nomes, forEach e map
const nomes = ["Ana", "Bruno", "Carlos"];
nomes.forEach(nome => console.log(`Ola, ${nome}!`));

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiusculas:", nomesMaiusculos);

// 2. Array de precos, filter e reduce
const precos = Array.of(10, 25, 40, 5, 60);
const precosAltos = precos.filter(preco => preco > 20);
console.log("Precos acima de 20:", precosAltos);

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma de todos os precos:", somaPrecos);

// 3. Array de objetos produtos e combinacao de metodos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Caneta", preco: 3 },
    { nome: "Estojo", preco: 20 },
    { nome: "Mochila", preco: 120 }
];

const apenasNomes = produtos.map(prod => prod.nome);
console.log("Apenas nomes dos produtos:", apenasNomes);

const produtosBaratos = produtos.filter(prod => prod.preco < 50);
console.log("Produtos menores que 50:", produtosBaratos);

const somaTotalProdutos = produtos.reduce((acc, prod) => acc + prod.preco, 0);
console.log("Soma total dos produtos: R\$ " + somaTotalProdutos);

produtos.forEach(prod => console.log(`${prod.nome}: R$ ${prod.preco}`));


// BLOCO 2 - MANIPULACAO DO DOM

console.log("\n--- BLOCO 2: MANIPULACAO DO DOM ---");

// 1. Alteracao do h1
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Nicol";

// 2. querySelectorAll nos paragrafos
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log("Texto do paragrafo:", p.textContent));

// 3. innerHTML na lista
const lista = document.querySelector("#lista");
lista.innerHTML = "<li>Item Inserido 1</li><li>Item Inserido 2</li>";

// 4. createElement e append
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

// 5. classList add e contains
terceiroItem.classList.add("destaque");
console.log("Tem a classe destaque?", terceiroItem.classList.contains("destaque"));

// 6. Array de tarefas para a lista
const tarefas = ["Estudar JS", "Fazer exercicios", "Revisar DOM"];
tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.textContent = tarefa;
    lista.append(li);
});

const primeiroLi = lista.querySelector("li");
if (primeiroLi) {
    primeiroLi.classList.add("feito");
}

const totalItens = document.querySelectorAll("li").length;
console.log("Quantidade total de itens na lista:", totalItens);


// BLOCO 3 - EVENTOS E EVENT DELEGATION

console.log("\n--- BLOCO 3: EVENTOS ---");

const botao = document.querySelector("#botao");

// 1. Evento de click
botao.addEventListener("click", () => {
    console.log("Clicou!");
});

// 2. Evento de mouseover
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

// 3. Evento de keyup
const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => {
    console.log("Valor atual do campo nome:", campoNome.value);
});

// 4. Event Delegation na lista
lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Texto do LI clicado:", e.target.textContent);
    }
});

// Criacao de um item dinamico para testar se o delegation funciona nele
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item Dinamico de Teste (Clique em mim)";
lista.append(itemDinamico);

// 5. Formulario de tarefas
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o recarregamento da pagina
    
    const textoTarefa = campoTarefa.value.trim();
    
    if (textoTarefa !== "") {
        const novoLi = document.createElement("li");
        novoLi.textContent = textoTarefa;
        lista.append(novoLi);
        campoTarefa.value = ""; // Limpa o campo
    }
});
