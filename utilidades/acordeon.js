export default function acordeon(wrapperId, pergunta, resposta) {
  const wrapper = document.getElementById(wrapperId);
  
  if (!wrapper) {
  console.warn(`acordeon: #${wrapperId} não encontrado`);
  return;
}

  const item = document.createElement('div');
  item.className = 'acordeon';
  item.innerHTML = `
    <div class="acordeon-pergunta">
      <span>${pergunta}</span>
      <button class="acordeon-button" aria-expanded="false">+</button>
    </div>

    <div class="acordeon-resposta">
      <div class="acordeon-resposta-conteudo">
        <span>${resposta}</span>
      </div>
    </div>

  `;

 const botao = item.querySelector('.acordeon-button');
  botao.addEventListener('click', () => {
    const aberto = item.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto);
  });

  wrapper.appendChild(item);
}