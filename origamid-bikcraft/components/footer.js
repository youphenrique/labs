
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
