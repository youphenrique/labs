package BuilderPattern;

public abstract class LancheBuilder {
    protected LancheProduct lanche;

    public abstract String buildSanduiche();
    public abstract String buildBatata();
    public abstract String buildBrinquedo();
    public abstract String buildRefrigerante();

    public LancheBuilder(){
        lanche = new LancheProduct();
    }

    public LancheProduct getLanche(){
        return lanche;
    }
}
