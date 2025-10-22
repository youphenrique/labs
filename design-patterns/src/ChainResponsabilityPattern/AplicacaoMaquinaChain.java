package ChainResponsabilityPattern;

import ChainResponsabilityPattern.Slots.Slot1Real;
import ChainResponsabilityPattern.Slots.Slot25Centavos;
import ChainResponsabilityPattern.Slots.Slot50Centavos;

public class AplicacaoMaquinaChain {
    public static void main(String[] args){
        Produto chips =  new Produto("Chips",2.50);
        SlotsChain maquina = new Slot1Real(1.0);
        maquina.setNext(new Slot25Centavos(0.25));
        maquina.setNext(new Slot50Centavos(0.50));
        System.out.println("Welcome!!!");
        try {
            maquina.colocarMoeda(0.25,chips);
            maquina.colocarMoeda(1,chips);
            maquina.colocarMoeda(1,chips);
            maquina.colocarMoeda(0.50,chips);
            maquina.colocarMoeda(1,chips);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
