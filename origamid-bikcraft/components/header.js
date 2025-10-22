
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
