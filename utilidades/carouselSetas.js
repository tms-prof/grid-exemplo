
export default function carouselSetas(wrapperId){
const wrapper = document.getElementById('wrapperId');
const item = `<!-- bloco que agrupa tudo e serve de referência para as setas -->
  <!-- botão da seta esquerda -->
  <button class="carousel-btn carousel-prev" aria-label="Anterior"></button>

  <!-- trilha que rola na horizontal (a barra fica escondida pelo CSS) -->
  <div class="carousel-track">
    <div class="carousel-setas-item" style="background:#2457d6">1</div>
    <div class="carousel-setas-item" style="background:#c2410c">2</div>
    <div class="carousel-setas-item" style="background:#15803d">3</div>
    <div class="carousel-setas-item" style="background:#7e22ce">4</div>
    <div class="carousel-setas-item" style="background:#be123c">5</div>
    <div class="carousel-setas-item" style="background:#0e7490">6</div>
  </div>
  <!-- botão da seta direita -->
  <button class="carousel-btn carousel-next" aria-label="Próximo"></button>
</div>` ;

wrapper.innerHTML = item;

const track = wrapper.querySelector('.carousel-track');   // trilha que rola
const prev  = wrapper.querySelector('.carousel-prev');    // seta esquerda
const next  = wrapper.querySelector('.carousel-next');    // seta direita

function step() {
  const slide = track.firstElementChild;                  // primeiro slide
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0; // gap do CSS
  return slide.offsetWidth + gap;                         // quanto rolar por clique
}

function update() {
  const max = track.scrollWidth - track.clientWidth;      // quanto dá para rolar
  prev.disabled = track.scrollLeft <= 1;                  // começo: desativa a esquerda
  next.disabled = track.scrollLeft >= max - 1;            // fim: desativa a direita
}

prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
track.addEventListener('scroll', update);
window.addEventListener('resize', update);
update();


}