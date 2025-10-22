package DecoratorPattern.SaboresBase;

import DecoratorPattern.Yogurt;

public class Limão implements Yogurt {
    private double custo = 7;
    private String sabor = "Yogurt sabor limão";
    private String ingrediente = "Yogurt de Limão";
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
