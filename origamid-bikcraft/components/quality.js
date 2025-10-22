
Vue.component('vue-quality', {
  props: ['seenCall'],
  template: `
    <div class="container">
      <h2 class="subtitle">Qualidade</h2>
      <img src="assets/img/bikcraft-qualidade.png" alt="Bikcraft">
      <ul class="quality-list">
        <li class="grid-1-3">
          <h3>Durabilidade</h3>
          <p>Sólida como pedra, leve como o vento e resistente como o diamante, são nossos diferenciais.</p>
        </li>
        <li class="grid-1-3">
          <h3>Design</h3>
          <p>Feitas sob medida para o melhor conforto e eficiência. Adaptamos a sua Bikcraft para o seu corpo.</p>
        </li>
        <li class="grid-1-3">
          <h3>Sustentabilidade</h3>
          <p>Além de ajudar a cuidar do meio ambiente, tirando carros da rua, toda a produção é sustentável.</p>
        </li>
      </ul>
      <div class="call" v-if="seenCall">
        <p>Conheça mais a nossa história</p>
        <a href="about.html" class="btn btn-black">Sobre</a>
      </div>
    </div>`
});

new Vue({
  el: '#vue-quality',
  data: {
    seenCall: page === 'index'
  }
});
