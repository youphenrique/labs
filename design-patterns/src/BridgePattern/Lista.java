package BridgePattern;

import java.util.ArrayList;

public abstract class Lista{
    protected ArrayList<String> lista = new ArrayList<>();
    private PrintTypeImplementor printType;

    public Lista(PrintTypeImplementor printType){
        this.printType = printType;
    }

    public abstract void add(String str);

    public void print(){
        printType.print(lista);
    }
}
