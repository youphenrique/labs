package BridgePattern;

import java.util.Collections;

public class OrderedList extends Lista{

    public OrderedList(PrintTypeImplementor printType){
        super(printType);
    }

    @Override
    public void add(String str){
        lista.add(str);
        Collections.sort(lista, (String s1, String s2) -> s1.compareToIgnoreCase(s2));
    }

}
