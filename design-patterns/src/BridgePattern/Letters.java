package BridgePattern;

import java.util.ArrayList;

public class Letters implements PrintTypeImplementor{
    private char letter;

    public Letters(){
        letter = 'a';
    }

    @Override
    public void print(ArrayList<String> lista){
        lista.forEach(str -> {
            System.out.println(letter + " " + str);
            letter = (char)(letter + 1);
        });
    }
}
