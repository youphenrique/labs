package BuilderPattern;

public class AtendenteDirector {
    private LancheBuilder lancheBuilder;
    private Pedido pedido;

    public AtendenteDirector(LancheBuilder lancheBuilder){
        this.lancheBuilder = lancheBuilder;
        String nomeRestaurante = lancheBuilder.getClass().toString().split("[.]")[1];
        nomeRestaurante = nomeRestaurante.substring("Funcionario".length(), nomeRestaurante.length());
        pedido = new Pedido(nomeRestaurante);
    }

    public LancheProduct montaLanche(){
        String sanduiche = lancheBuilder.buildSanduiche();
        pedido.adicionarDentroDaCaixa(sanduiche);
        String batata = lancheBuilder.buildBatata();
        pedido.adicionarDentroDaCaixa(batata);
        String brinquedo = lancheBuilder.buildBrinquedo();
        pedido.adicionarDentroDaCaixa(brinquedo);
        String refrigerante = lancheBuilder.buildRefrigerante();
        pedido.adicionarForaDaCaixa(refrigerante);
        return lancheBuilder.getLanche();
    }

    public String imprimePedido(){
        return pedido.toString();
    }
}
