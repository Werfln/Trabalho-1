const inputNome = document.querySelector('.input-nome');
const inputMensagem = document.querySelector('.input-mensagem');
const btnSubmit = document.querySelector('.btn-submit');
const recados = document.querySelector('.recados');

function fundoAzul()
{
	document.body.style.backgroundColor = "blue";
}

function fundoCinza()
{
	document.body.style.backgroundColor = "grey";
}

function fundoAmarelo()
{
	document.body.style.backgroundColor = "yellow";
}

// Se o botão enviar for clicado faz essa função
btnSubmit.addEventListener('click', function() {
    if(!inputNome.value) return;    // Não tem nome definido não adiciona
    criaRecado(`${inputNome.value}: ${inputMensagem.value}`);   // Chama a função que vai criar os recados
});

// Cria os recados
function criaRecado(textInput) {
    const li = document.createElement('li');    // Cria uma 'li'
    li.innerText = textInput;                   // Adiciona o texto do input na li
    recados.appendChild(li);                    // A li se torna filho de recados
    limpaInput();                               // Chama a função que limpa o input
    criaBotaoExcluir(li);                        // Chama a função para criar o botão Excluir
}

// Limpa o input dps de enviar
function limpaInput() {
    inputNome.value = '';       // Muda o valor do input para nada
    inputNome.focus();          // Foca no input nome
    inputMensagem.value = '';   // Muda o valor do input para nada
}

// Cria o botão Excluir
function criaBotaoExcluir(li) {
    li.innerText += ' ';                                    // Adiciona um espaço do lado dos recados
    const botaoExcluir = document.createElement('button');   // Cria um botão
    botaoExcluir.innerText = 'Excluir';                       // Adiciona 'Excluir' no botão
    botaoExcluir.setAttribute('class', 'Excluir');            // Adiciona a classe Excluir
    li.appendChild(botaoExcluir);                            // Torna filho da li
}

function creditos()
{
    alert("Disciplina: Desenvolvimento de Software para Web.                        Equipe: Apenas eu, Luan de Lima Leandro");
}

// Excluir
document.addEventListener('click', function(e) {
    const element = e.target;    // Captura o elemtento clicado
    
    // Se tiver Excluir na classe ele apaga
    if(element.classList.contains('Excluir')) element.parentElement.remove();
});

// Adiciona a funcionalidade da tecla 'enter' nos campos nome e mensagem
inputNome.addEventListener('keypress', function(e) {
    // Se o elemento clicado for igual ao enter ele cria o recado
    if(e.keyCode == 13) {
        if(!inputNome.value) return;                                // Se mensagem tiver vazio sai da função
        criaRecado(`${inputNome.value}: ${inputMensagem.value}`);   // Chama função criar recado
    }
});

inputMensagem.addEventListener('keypress', function(e) {
    // Se o elemento clicado for igual ao enter ele cria o recado
    if(e.keyCode == 13) {
        if(!inputMensagem.value) return;                            // Se mensagem tiver vazio sai da função
        criaRecado(`${inputNome.value}: ${inputMensagem.value}`);   // Chama função criar recado
    }
});
