export default function galeria(wrapperId, layout, items) {
const wrapper = document.getElementById(wrapperId);
 wrapper.style.display = `${layout}`;

  items.forEach(item =>{
    const card = document.createElement('div');
    card.className = "cards";
    const tituloCard = document.createElement('h3');
    tituloCard.textContent = item.titulo;
    const spanCard = document.createElement('span');
    spanCard.textContent = item.span;
    card.append(tituloCard, spanCard);
    wrapper.append(card);

  });
}




