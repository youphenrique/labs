package BridgePattern;

import java.util.ArrayList;

public class Markers implements PrintTypeImplementor{
    private String marker;

    public Markers(String marker){
        this.marker = marker;
    }

    @Override
    public void print(ArrayList<String> lista){
        lista.forEach(str -> System.out.println(marker + " " + str));
    }
}
