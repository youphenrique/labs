package DecoratorPattern.SaboresBase;
import DecoratorPattern.Yogurt;

public class Morango implements Yogurt{
    private double custo = 8;
    private String sabor = "Yogurt sabor morango";
    private String ingrediente = "Yogurt de Morango";
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
