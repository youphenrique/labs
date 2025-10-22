package BridgePattern;

public class UnorderedList extends Lista{

    public UnorderedList(PrintTypeImplementor printType){
        super(printType);
    }

    @Override
    public void add(String str){
        lista.add(str);
    }
}
