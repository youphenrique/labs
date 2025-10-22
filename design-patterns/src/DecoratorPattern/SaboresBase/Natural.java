package DecoratorPattern.SaboresBase;

import DecoratorPattern.Yogurt;

public class Natural implements Yogurt {
    private double custo = 6;
    private String sabor = "Yogurt sabor Natural";
    private String ingrediente = "Yogurt Natural";
    @Override
    public double getCusto() {
        return custo;
    }

    @Override
    public String getDescription() {
        return sabor;
    }

    @Override
    public String getIngredientes() {
        return ingrediente;
    }
}
