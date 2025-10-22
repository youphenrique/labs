package BridgePattern;

public class BridgePattern{

    public static void main(String[] args){
        Lista lista;

        System.out.println("------------------ Listas ordenadas ------------------\n");

        lista = addData(new OrderedList(new Letters()));
        lista.print();
        System.out.println();

        lista = addData(new OrderedList(new Numbers()));
        lista.print();
        System.out.println();

        lista = addData(new OrderedList(new Markers("-")));
        lista.print();
        System.out.println();

        System.out.println("------------------ Listas não ordenadas ------------------\n");

        lista = addData(new UnorderedList(new Letters()));
        lista.print();
        System.out.println();

        lista = addData(new UnorderedList(new Numbers()));
        lista.print();
        System.out.println();

        lista = addData(new UnorderedList(new Markers("*")));
        lista.print();
        System.out.println();
    }

    public static Lista addData(Lista lista){
        lista.add("Paulo");
        lista.add("Henrique");
        lista.add("da");
        lista.add("Silva");
        lista.add("Dutra");

        return lista;
    }
}
