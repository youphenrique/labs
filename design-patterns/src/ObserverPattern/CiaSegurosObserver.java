package ObserverPattern;

public class CiaSegurosObserver implements Observer{
    SistemaDeAlarmeObserver sistema;

    public CiaSegurosObserver(SistemaDeAlarmeObserver s){
        sistema=s;
        sistema.Attach(this);
    }
    public void contataCliente(){
        System.out.println("\nContatando Cliente\n");
    }
    @Override
    public void update() {
        System.out.println("#############Sistema Seguro###############");
        System.out.println(sistema.getRelatorio());
        System.out.println("##########################################");
    }
}
