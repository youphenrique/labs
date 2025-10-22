package DecoratorPattern;

public class YogurtDecorator implements Yogurt{
    protected Yogurt yogurtDecorado;
    public YogurtDecorator(Yogurt yogurtDecorator){
        this.yogurtDecorado = yogurtDecorator;
    }
    @Override
    public double getCusto() {
        return yogurtDecorado.getCusto();
    }

    @Override
    public String getDescription() {
        return yogurtDecorado.getDescription();
    }

    @Override
    public String getIngredientes() {
        return yogurtDecorado.getIngredientes();
    }
}
