package BridgePattern;

import java.util.ArrayList;

public class Numbers implements PrintTypeImplementor{
    private int number;

    public Numbers(){
        number = 1;
    }

    @Override
    public void print(ArrayList<String> lista){
        lista.forEach(str -> {
            System.out.println(number + " " + str);
            number++;
        });
    }

}
