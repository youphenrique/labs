package AbstractFactoryPattern;

import java.text.ParseException;

public class AplicacaoPizzariaAbstractFactory {
    public static void main(String[] args){
        try {
            Pizzaria pizzaria = new Pizzaria("27/10/2017");
            Pizza pizza1 = pizzaria.recebePedido("pizza calabresa");
            Pizza pizza2 = pizzaria.recebePedido("pizza presunto");
            if(pizza1!=null)System.out.println(pizza1.getIngredientes());
            if(pizza2!=null)System.out.println(pizza2.getIngredientes());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
