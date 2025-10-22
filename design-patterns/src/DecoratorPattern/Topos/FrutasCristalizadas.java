package DecoratorPattern.Topos;

import DecoratorPattern.Yogurt;
import DecoratorPattern.YogurtDecorator;

public class FrutasCristalizadas extends YogurtDecorator {
    public double custo;
    public String ingredientes;
    public FrutasCristalizadas(Yogurt yogurtDecorado) {
        super(yogurtDecorado);
        this.custo = 0.80;
        this.ingredientes = "Frutas Cristalizadas";
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
        return super.getIngredientes()+",\n"+ingredientes;
    }
}
