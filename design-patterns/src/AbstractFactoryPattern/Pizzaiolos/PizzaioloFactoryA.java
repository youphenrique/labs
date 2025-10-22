package AbstractFactoryPattern.Pizzaiolos;

import AbstractFactoryPattern.Pizza;
import AbstractFactoryPattern.PizzaioloAbstractFactory;
import AbstractFactoryPattern.Pizzas.PizzaCalabresa;

public class PizzaioloFactoryA implements PizzaioloAbstractFactory {

    @Override
    public Pizza makePizzaCalabresa() {
        return new PizzaCalabresa();
    }

    @Override
    public Pizza makePizzaPresunto() {
        System.out.println("Não sabe fazer pizza de presunto.");
        return null;
    }
}
