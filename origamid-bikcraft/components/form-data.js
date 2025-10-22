
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
