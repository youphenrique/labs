package AbstractFactoryPattern.Pizzaiolos;

import AbstractFactoryPattern.Pizza;
import AbstractFactoryPattern.PizzaioloAbstractFactory;
import AbstractFactoryPattern.Pizzas.PizzaPresunto;

public class PizzaioloFactoryB implements PizzaioloAbstractFactory {

    @Override
    public Pizza makePizzaCalabresa() {
        System.out.println("Não sabe fazer pizza de calabresa.");
        return null;
    }

    @Override
    public Pizza makePizzaPresunto() {
        return new PizzaPresunto();
    }
}
