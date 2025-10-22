package BuilderPattern;

import java.util.*;

public class Pedido {
    private ArrayList<String> dentroDaCaixa;
    private ArrayList<String> foraDaCaixa;
    private String[] itens;
    private String restaurante;

    public Pedido(String restaurante){
        dentroDaCaixa = new ArrayList<String>();
        foraDaCaixa = new ArrayList<String>();
        itens = new String[]{"Sanduiche", "Batata", "Brinquedo", "Refrigerante"};
        this.restaurante = restaurante;
    }

    public void adicionarDentroDaCaixa(String item) {
        dentroDaCaixa.add(item);
    }

    public void adicionarForaDaCaixa(String item) {
        foraDaCaixa.add(item);
    }

    public String toString() {
        StringBuffer buffer = new StringBuffer();
        buffer.append("Seu pedido: " + restaurante + "\n");
        buffer.append("Dentro da caixa:\n");
        for(int i = 0; i < dentroDaCaixa.size(); i++){
            buffer.append("\t" + itens[i] + ": " + dentroDaCaixa.get(i) + "\n");
        }
        buffer.append("Fora da caixa:\n");
        for (String item : foraDaCaixa){
            buffer.append("\t" + itens[3] + ": " + item + "\n");
        }
        buffer.append("\nTenha um bom dia!\n\n------------------------------------------------------");
        return buffer.toString();
    }
}