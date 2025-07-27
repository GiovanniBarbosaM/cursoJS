// Array para armazenar os números adicionados
let numeros = [];

// Função para adicionar número à lista
function Adicionar() {
    const input = document.getElementById('txti');
    const select = document.getElementById('selnum');
    const numero = Number(input.value);
    
    // Validações
    if (input.value === '') {
        alert('Por favor, digite um número!');
        input.focus();
        return;
    }
    
    if (numero < 1 || numero > 100) {
        alert('Digite um número entre 1 e 100!');
        input.focus();
        return;
    }
    
    if (numeros.includes(numero)) {
        alert('Este número já foi adicionado!');
        input.focus();
        return;
    }
    
    // Adiciona o número ao array
    numeros.push(numero);
    
    // Cria nova opção no select
    const option = document.createElement('option');
    option.text = `Valor ${numero} adicionado`;
    option.value = numero;
    select.appendChild(option);
    
    // Limpa o input
    input.value = '';
    input.focus();
    
    // Limpa resultado anterior se existir
    limparResultado();
}

// Função para analisar os números (corrigindo o nome da função)
function adicionar() {
    if (numeros.length === 0) {
        alert('Adicione pelo menos um número antes de analisar!');
        return;
    }
    
    // Remove resultado anterior se existir
    limparResultado();
    
    // Cria div para mostrar resultados
    const section = document.querySelector('section');
    const resultDiv = document.createElement('div');
    resultDiv.id = 'resultado';
    resultDiv.innerHTML = gerarAnalise();
    
    section.appendChild(resultDiv);
}

// Função para gerar a análise dos números
function gerarAnalise() {
    const total = numeros.length;
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = (soma / total).toFixed(2);
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    
    return `
        <h2>Análise dos Números</h2>
        <p><strong>Total de números cadastrados:</strong> ${total}</p>
        <p><strong>Maior número:</strong> ${maior}</p>
        <p><strong>Menor número:</strong> ${menor}</p>
        <p><strong>Soma de todos os valores:</strong> ${soma}</p>
        <p><strong>Média dos valores:</strong> ${media}</p>
        <p><strong>Números em ordem crescente:</strong> ${numerosOrdenados.join(', ')}</p>
        <p><strong>Números pares:</strong> ${numeros.filter(n => n % 2 === 0).length}</p>
        <p><strong>Números ímpares:</strong> ${numeros.filter(n => n % 2 !== 0).length}</p>
    `;
}

// Função para limpar resultado anterior
function limparResultado() {
    const resultDiv = document.getElementById('resultado');
    if (resultDiv) {
        resultDiv.remove();
    }
}

// Função para permitir adicionar número pressionando Enter
document.getElementById('txti').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        Adicionar();
    }
});

// Função para limpar toda a lista (funcionalidade extra)
function limparLista() {
    numeros = [];
    const select = document.getElementById('selnum');
    select.innerHTML = '<option disabled selected>Selecione um número</option>';
    limparResultado();
    document.getElementById('txti').focus();
}

// Adiciona botão de limpar lista (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('section');
    const clearButton = document.createElement('input');
    clearButton.type = 'button';
    clearButton.value = 'Limpar Lista';
    clearButton.onclick = limparLista;
    clearButton.style.marginLeft = '10px';
    
    // Adiciona o botão após o segundo botão
    const segundoDiv = section.children[1];
    const segundoBotao = segundoDiv.querySelector('input[type="button"]');
    segundoBotao.parentNode.insertBefore(clearButton, segundoBotao.nextSibling);
});