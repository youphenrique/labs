
Vue.component('vue-item-product', {
  props: ['name', 'imagesSrc', 'imagesAlt'],
  template: `
    <div class="container item-product">
      <div class="grid-11">
        <img v-bind:src="imagesSrc[0]" v-bind:alt="imagesAlt">
        <h2>{{ name }}</h2>
      </div>
      <div class="grid-5 icon-product">
        <img v-bind:src="imagesSrc[1]" v-bind:alt="imagesAlt">
      </div>
      <div class="grid-8">
        <img v-bind:src="imagesSrc[2]" v-bind:alt="imagesAlt">
      </div>
      <div class="grid-8 info-product">
        <p>No mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial na fórmula da gestão inovadora da qual fazemos parte.</p>
        <ul>
          <li>Conforto</li>
          <li>Velocidade</li>
          <li>Design</li>
          <li>Versatilidade</li>
        </ul>
      </div>
    </div>
  `
});

new Vue({
  el: '#vue-products',
  data: {
    products: [
      {
        id: uuid(),
        name: 'Passeio',
        imagesSrc: [
          'assets/img/produtos/bikcraft-passeio-1.jpg',
          'assets/img/produtos/passeio.png',
          'assets/img/produtos/bikcraft-passeio-2.jpg',
        ],
        imagesAlt: 'Ícone passeio',
      },
      {
        id: uuid(),
        name: 'Esporte',
        imagesSrc: [
          'assets/img/produtos/bikcraft-esporte-1.jpg',
          'assets/img/produtos/esporte.png',
          'assets/img/produtos/bikcraft-esporte-2.jpg',
        ],
        imagesAlt: 'Ícone esporte',
      },
      {
        id: uuid(),
        name: 'Retrô',
        imagesSrc: [
          'assets/img/produtos/bikcraft-retro-1.jpg',
          'assets/img/produtos/retro.png',
          'assets/img/produtos/bikcraft-retro-2.jpg',
        ],
        imagesAlt: 'Ícone retro',
      },
    ]
  },
});

function uuid() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
