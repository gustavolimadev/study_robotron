const lista = document.querySelector('.lista');
var botoes = document.querySelectorAll('[data-botao]')

botoes.forEach((botao) => {
  botao.addEventListener('click', (evento) => {
    mostraEscondeTinda(evento.target.dataset.botao)
  })
})

function mostraEscondeTinda(operacao) {
  if(operacao === 'mostrar') lista.classList.remove('esconder');
  else if(operacao === 'esconder') lista.classList.add('esconder');
  else alert(`A operação escolhida (${operacao}) é inválida!`);
}