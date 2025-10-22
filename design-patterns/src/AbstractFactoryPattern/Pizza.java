package AbstractFactoryPattern;

import java.util.ArrayList;
import java.util.List;

public class Pizza {
    protected List<String> ingredientes;

    public Pizza(){
        ingredientes = new ArrayList<>();
    }

    public List<String> getIngredientes() {
        return ingredientes;
    }
}
