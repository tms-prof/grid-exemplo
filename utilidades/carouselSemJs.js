
export default function carouselSemJs(wrapperId){
const wrapper = document.getElementById(wrapperId);
const item = `
<!-- container que rola na horizontal -->
<div id="carousel">
  <!-- cada filho é um slide -->
  <div class="carousel-item" style="background:#2457d6">Slide 1</div>
  <div class="carousel-item" style="background:#c2410c">Slide 2</div>
  <div class="carousel-item" style="background:#15803d">Slide 3</div>
  <div class="carousel-item" style="background:#7e22ce">Slide 4</div>
</div>`;
wrapper.innerHTML = item;
}

