package ChainResponsabilityPattern;

public class CaixaSingleton {
    private static CaixaSingleton instance;
    private double total;
    private CaixaSingleton(){
        total = 0.0;
    }

    public static CaixaSingleton getInstance() {
        if(instance == null) instance = new CaixaSingleton();
        return instance;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
