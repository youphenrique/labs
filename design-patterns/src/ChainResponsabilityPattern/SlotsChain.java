package ChainResponsabilityPattern;

public abstract class SlotsChain {
    protected SlotsChain next;
    protected double value;
    protected CaixaSingleton caixa;

    public SlotsChain(double value) {
        this.value = value;
        next = null;
    }

    public void setNext(SlotsChain slot) {
        if(next == null){
            next = slot;
        }else{
            next.setNext(slot);
        }
    }
    public void colocarMoeda(double moeda,Produto produto) throws Exception {
        if(moeda == value){
            colocarMoeda(produto);
        }else{
            if(next == null){
                throw new Exception("Não existe slot para esta moeda");
            }
            next.colocarMoeda(moeda,produto);
        }
    }
    protected abstract void colocarMoeda(Produto produto);
}
