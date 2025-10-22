package DecoratorPattern;

import DecoratorPattern.Coberturas.CaldaDeChocolate;
import DecoratorPattern.SaboresBase.Limão;
import DecoratorPattern.Topos.Castanhas;

public class AplicacaoYogurtDecorator {
    public static void main(String[] args){
        Yogurt myYogurt = new Limão();
        System.out.println("Descrição: "+myYogurt.getDescription());
        System.out.println("Ingredientes: \n" + myYogurt.getIngredientes());
        System.out.println("Custo: "+ myYogurt.getCusto()+"\n");

        System.out.println("Adicionando Castanhas");
        myYogurt =  new Castanhas(myYogurt);
        System.out.println("Descrição: "+myYogurt.getDescription());
        System.out.println("Ingredientes: \n" + myYogurt.getIngredientes());
        System.out.println("Custo: "+ myYogurt.getCusto()+"\n");

        System.out.println("Adicionando Calda de Chocolate");
        myYogurt =  new CaldaDeChocolate(myYogurt);
        System.out.println("Descrição: "+myYogurt.getDescription());
        System.out.println("Ingredientes: \n" + myYogurt.getIngredientes());
        System.out.println("Custo: "+ myYogurt.getCusto()+"\n");

    }
}
