
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


Vue.component('vue-form-data', {
  props: ['seen', 'textareaLabel', 'socialNetworksComponent'],
  template: `
    <div class="container">
      <h2 class="subtitle" v-if="seen">Orçamento</h2>
      <form id="form" class="form grid-8">
        <label for="name">Nome</label>
        <input type="text" id="name">
        <label for="email">E-mail</label>
        <input type="text" id="email">
        <label for="phone">Telefone</label>
        <input type="text" id="phone">
        <label for="specifications">{{ textareaLabel }}</label>
        <textarea id="specifications" cols="30" rows="5"></textarea>
        <button type="submit" v-bind:class="{ btn: seen, 'btn btn-black': !seen }">Enviar</button>
      </form>
      <div class="data grid-8">
        <h3>Dados</h3>
        <span>+55 21 9999-9999</span>
        <span>contato@bikcraft.com</span>
        <div v-if="!seen">
          <span>Rua Ali Perto - Botafogo</span>
          <span>Rio de Janeiro - RJ - Brasil</span>
        </div>
        <div v-if="seen">
          <h3>Monte sua Bikcraft</h3>
          <p>Escolha as especificações:</p>
          <ul>
            <li>– Cores</li>
            <li>– Estilo</li>
            <li>– Medidas</li>
            <li>– Acessórios</li>
            <li>– E Outros</li>
          </ul>
        </div>
        <component
          v-else
          v-bind:is="socialNetworksComponent"
          class="social-networks-footer"
        ></component>
      </div>
    </div>    
  `
});

new Vue({
  el: '#vue-form-data',
  data: {
    seen: page === 'products',
    socialNetworksComponent: page === 'products' ? null : socialNetworksComponent,
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
