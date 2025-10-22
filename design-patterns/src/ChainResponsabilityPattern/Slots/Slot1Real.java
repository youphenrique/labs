package ChainResponsabilityPattern.Slots;

import ChainResponsabilityPattern.CaixaSingleton;
import ChainResponsabilityPattern.Produto;
import ChainResponsabilityPattern.SlotsChain;

public class Slot1Real extends SlotsChain{


    public Slot1Real(double value) {
        super(value);
    }

    @Override
    protected void colocarMoeda(Produto produto) {
        System.out.println("You have put  R$ "+value+".");
        CaixaSingleton caixa = CaixaSingleton.getInstance();
        caixa.setTotal(caixa.getTotal()+value);
        double total = caixa.getTotal();
        if(total>=produto.getValue()){
            System.out.println("Buyed "+produto.getName()+". price: "+produto.getValue()+" change: "+String.valueOf(total-produto.getValue()));
            caixa.setTotal(0.0);
        }
    }
}
