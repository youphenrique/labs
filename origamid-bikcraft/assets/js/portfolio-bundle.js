
Vue.component('vue-header', {
  props: ['activeMenu'],
  template: `
    <div class="container">
      <a href="index.html" class="grid-2">
        <img src="assets/img/bikcraft.png" alt="Bikcraft">
      </a>
      <nav class="grid-14 header-menu">
        <ul>
          <li>
            <a href="about.html" v-bind:class="{ 'active-menu': activeMenu === 'about' }">Sobre</a>
          </li>
          <li>
            <a href="products.html" v-bind:class="{ 'active-menu': activeMenu === 'products' }">Produtos</a>
          </li>
          <li>
            <a href="portfolio.html" v-bind:class="{ 'active-menu': activeMenu === 'portfolio' }">Portfólio</a>
          </li>
          <li>
            <a href="contact.html" v-bind:class="{ 'active-menu': activeMenu === 'contact' }">Contato</a>
          </li>
        </ul>
      </nav>
    </div>`
});

new Vue({
  el: '#vue-header',
  data: {
    activeMenu: page
  }
});


new Vue({
  el: '#vue-quote',
  data: {
    view: 'quote-a'
  },
  components: {
    'quote-a': {
      template: `
        <blockquote class="customer-quote">
          <p>"Nada melhor do que dar um rolê com a minha Bikcraft na orla. Essa é a minha companheira mais fiel, nunca me traiu e está sempre a minha disposição."</p>
          <cite>Jhony Rato</cite>
        </blockquote>
      `
    },
    'quote-b': {
      template: `
        <blockquote class="customer-quote">
          <p>"Aqueles que ainda não possuem uma Bikcraft, não sabem o que estão perdendo. A precisão é absurda e a velocidade transcendental. Nunca vida nada igual."</p>
          <cite>Bernardo</cite>
        </blockquote>
      `
    },
    'quote-c': {
      template: `
        <blockquote class="customer-quote">
          <p>"Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo."</p>
          <cite>Barbara Moss</cite>
        </blockquote>
      `
    },
  },
  created() {
    let currentQuoteIndex = 0;

    setInterval(() => {
      currentQuoteIndex = (currentQuoteIndex + 1) % 3;

      switch (currentQuoteIndex) {
        case 0:
          this.view = 'quote-a';
          break;
        case 1:
          this.view = 'quote-b';
          break;
        case 2:
          this.view = 'quote-c';
          break;
      }
    }, 4500);
  }
});


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


Vue.component('vue-break', {
  template: `
    <blockquote class="external-quote container">
      <p>"O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana."</p>
      <cite>WILLIAM MORRIS</cite>
    </blockquote>`
});

new Vue({ el: '#vue-break' });


const socialNetworksComponent = {
  template: `
    <div>
      <h3>Redes Sociais</h3>
      <ul>
        <li>
          <a href="http://facebook.com" target="_blank">
            <img src="assets/img/redes-sociais/facebook.png" alt="Facebook contato">
          </a>
        </li>
        <li>
          <a href="http://instagram.com" target="_blank">
            <img src="assets/img/redes-sociais/instagram.png" alt="Instagram contato">
          </a>
        </li>
        <li>
          <a href="http://twitter.com" target="_blank">
            <img src="assets/img/redes-sociais/twitter.png" alt="Twitter contato">
          </a>
        </li>
      </ul>
    </div>
  `
};


Vue.component('vue-footer', {
  props: ['socialNetworksComponent'],
  template: `
    <div>
      <div class="footer">
        <div class="container">
          <div class="grid-8 history-footer">
            <h3>Nossa história</h3>
            <p>Quando iniciamos a Bikcraft queríamos apenas um produto que adoraríamos utilizar. Éramos apaixonados por pedalar e também por fazer as coisas com as nossas próprias mãos. Assim, surgiu um sonho na garagem da nossa casa.</p>
          </div>
          <div class="grid-4 contact-footer">
            <h3>Contato</h3>
            <ul>
              <li>- +55 21 9999-9999</li>
              <li>- contato@bikcraft.com</li>
              <li>- Rua Ali Perto - Botafogo</li>
            </ul>
          </div>
          <div class="grid-4 social-networks-footer">
            <component v-bind:is="socialNetworksComponent"></component>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <p class="grid-16">Bikcraft {{ new Date().getFullYear() }} - Alguns direitos reservados.</p>
        </div>
      </div>
    </div>`
});

new Vue({
  el: '#vue-footer',
  data: {
    socialNetworksComponent
  }
});

const innerIntroductionElement = document.querySelector('.inner-introduction').children[0];

setTimeout(() => {
  innerIntroductionElement.children[0].classList.add('animated', 'fade-in-down');
}, 400);

setTimeout(() => {
  innerIntroductionElement.children[1].classList.add('animated', 'fade-in-down');
}, 800);

setTimeout(() => {
  document.querySelector('.animate-inner').classList.add('animated', 'fade-in-down');
}, 1000);

if (page === 'portfolio') {
  setTimeout(() => {
    const animateInnerNode = document.querySelectorAll('.animate-inner-2');

    animateInnerNode[0].classList.add('animated', 'fade-in-down');
    animateInnerNode[1].classList.add('animated', 'fade-in-down');
    animateInnerNode[2].classList.add('animated', 'fade-in-down');
  }, 1600);
}
