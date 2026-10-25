import acordeon from './utilidades/acordeon.js';
import carouselSemJs from './utilidades/carouselSemJs.js';
import carouselSetas from './utilidades/carouselSetas.js';
import galeria from './utilidades/galeria.js';

const clientes = [
  { titulo: "Cliente Alpha", span: 1 },
  { titulo: "Cliente Beta", span: 2 },
  { titulo: "Cliente Gama", span: 1 },
  { titulo: "Cliente Delta", span: 3 },
  { titulo: "Cliente Épsilon", span: 2 },
  { titulo: "Cliente Zeta", span: 1 },
  { titulo: "Cliente Eta", span: 2 },
  { titulo: "Cliente Teta", span: 1 },
  { titulo: "Cliente Iota", span: 3 },
  { titulo: "Cliente Kappa", span: 2 },
];



acordeon('acordeon', 'O que é JavaScript?', 'Uma linguagem de programação.');
acordeon('acordeon', 'O que é HTML?', 'Uma linguagem de marcação.');

carouselSetas('carousel-setas');

galeria('galeria', 'grid', clientes );
