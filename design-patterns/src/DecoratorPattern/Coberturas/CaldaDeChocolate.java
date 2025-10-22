package DecoratorPattern.Coberturas;

import DecoratorPattern.Yogurt;
import DecoratorPattern.YogurtDecorator;

public class CaldaDeChocolate extends YogurtDecorator {
    public double custo;
    public String ingredientes;

    public CaldaDeChocolate(Yogurt yogurtDecorado) {
        super(yogurtDecorado);
        this.custo = 1.50;
        this.ingredientes = "Calda de Chocolate";
    }

    @Override
    public double getCusto() {
        return super.getCusto() + custo;
    }

    @Override
    public String getDescription() {
        return super.getDescription();
    }

    @Override
    public String getIngredientes() {
        return super.getIngredientes() + ",\n" + ingredientes;
    }
}