package SingletonPattern;

public class LoggerSingleton {
    private static LoggerSingleton instancia;
    private boolean ativo = false;
    private LoggerSingleton(){}
    public static LoggerSingleton getInstancia(){
        if(instancia == null)
            instancia = new LoggerSingleton();
        return instancia;
    }

    public boolean isAtivo() {
        return ativo;
    }
    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }
    public void log(String s){
         if (this.ativo)
             System.out.println("LOG::" + s);
    }

}
