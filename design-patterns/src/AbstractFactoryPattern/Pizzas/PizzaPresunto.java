package AbstractFactoryPattern.Pizzas;

import AbstractFactoryPattern.Pizza;

public class PizzaPresunto extends Pizza {
    public PizzaPresunto() {
        super();
        ingredientes.add("queijo");
        ingredientes.add("presunto");
        ingredientes.add("tomate");
    }
}
