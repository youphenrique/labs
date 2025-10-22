package ObserverPattern;

public class DelegaciaObserver implements Observer{
    SistemaDeAlarmeObserver sistema;

    public DelegaciaObserver(SistemaDeAlarmeObserver s){
        sistema=s;
        sistema.Attach(this);
    }
    public void enviaViatura(){
        System.out.println("\nViatura a caminho\n");
    }
    @Override
    public void update() {
           System.out.println("***************Sistema Delegacia***************");
           System.out.println(sistema.getRelatorio());
           System.out.println("***********************************************");
    }
}
