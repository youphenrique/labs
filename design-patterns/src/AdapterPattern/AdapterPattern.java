package AdapterPattern;

public class AdapterPattern {

    public static void main(String[] args){
        Cliente cliente = new Cliente(new SomadorAdapter());
        cliente.executar();
    }

}
