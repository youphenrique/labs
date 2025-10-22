package AbstractFactoryPattern.Pizzas;

import AbstractFactoryPattern.Pizza;

public class PizzaCalabresa extends Pizza {
    public PizzaCalabresa() {
        super();
        ingredientes.add("queijo");
        ingredientes.add("calabresa");
        ingredientes.add("tomate");
    }
}
