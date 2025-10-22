package DecoratorPattern.Coberturas;

import DecoratorPattern.YogurtDecorator;

public class CaldaDeMorango extends YogurtDecorator {
    public double custo;
    public String ingredientes;

    public CaldaDeMorango(YogurtDecorator yogurtDecorado) {
        super(yogurtDecorado);
        this.custo = 1.50;
        this.ingredientes = "Calda de Morango";
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
