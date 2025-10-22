
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
