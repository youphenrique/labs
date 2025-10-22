package DecoratorPattern.Topos;

import DecoratorPattern.Yogurt;
import DecoratorPattern.YogurtDecorator;

public class Castanhas extends YogurtDecorator {
    public double custo;
    public String ingredientes;

    public Castanhas(Yogurt yogurtDecorado) {
        super(yogurtDecorado);
        this.custo = 0.50;
        this.ingredientes = "Castanhas";
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
