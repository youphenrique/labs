
Vue.component('vue-portfolio', {
  props: ['seen', 'changeTransition', 'activeTransition', 'images'],
  template: `
    <div class="container">
      <h2 class="subtitle" v-if="seen">Portfólio</h2>
      <ul class="portfolio-list">
        <li class="grid-8">
          <img v-bind:class="['image-transition', !seen ? 'fade-in-out' : '']" v-bind:src="images[0].src" v-bind:alt="images[0].alt">
        </li>
        <li class="grid-8">
          <img v-bind:class="['image-transition', !seen ? 'fade-in-out' : '']" v-bind:src="images[1].src" v-bind:alt="images[1].alt">
        </li>
        <li class="grid-16">
          <img src="assets/img/portfolio/esporte.jpg" alt="Bicicleta esporte">
        </li>
      </ul>
      <div class="call" v-if="seen">
        <p>Conheça mais o nosso portfólio</p>
        <a href="portfolio.html" class="btn">Portfólio</a>
      </div>
      <ul class="selector-transition" v-else>
        <li v-bind:class="{ 'active-transition': activeTransition === 'first' }"></li>
        <li v-bind:class="{ 'active-transition': activeTransition === 'second' }"></li>
      </ul>
    </div>
  `
});

new Vue({
  el: '#vue-portfolio',
  data: {
    seen: page === 'index',
    activeTransition: 'first',
    images: [
      {
        src: 'assets/img/portfolio/retro.jpg',
        alt: 'Bikcraft retro',
      },
      {
        src: 'assets/img/portfolio/passeio.jpg',
        alt: 'Bikcraft passeio',
      },
    ]
  },
  created() {
    if (!this.seen) {
      setInterval(() => {
        this.changeTransition();
      }, 4000);
    }
  },
  methods: {
    changeTransition() {
      this.activeTransition = this.activeTransition === 'first' ? 'second' : 'first';
      this.images = [this.images[1], this.images[0]];
    },
  }
});
