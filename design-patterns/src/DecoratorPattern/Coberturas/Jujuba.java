package DecoratorPattern.Coberturas;

import DecoratorPattern.Yogurt;
import DecoratorPattern.YogurtDecorator;

public class Jujuba extends YogurtDecorator {
    public double custo;
    public String ingredientes;

    public Jujuba(Yogurt yogurtDecorado) {
        super(yogurtDecorado);
        this.custo = 1.25;
        this.ingredientes = "Jujubas";
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
