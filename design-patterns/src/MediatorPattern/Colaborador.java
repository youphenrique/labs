package MediatorPattern;

public abstract class Colaborador {
    protected Mediator mediator;

    public Colaborador(Mediator m){
        mediator = m;
    }
    public void enviarMensagem(String msg){
        mediator.enviarMensagem(msg,this);
    }
    public void logIn() {
        mediator.logIn(this);
    }
    public void logOut() {
       mediator.logOut(this);
    }

    public abstract void receberMensagem(String msg);
    public abstract String gerarId();
}
