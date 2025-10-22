package SingletonPattern;

public class AplicacaoLogger {
    public static void main(String[] args){
        LoggerSingleton log1 = LoggerSingleton.getInstancia();
        log1.setAtivo(true);
        log1.log("PRIMEIRA MENSAGEM DE LOG");
        LoggerSingleton log2 = LoggerSingleton.getInstancia();
        log2.log("SEGUNDA MENSAGEM DE LOG");
    }

}
