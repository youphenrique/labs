package StrategyPattern;

public class AplicaçãoLoggerwithModes {
    public static void main(String[] args){
        LoggerContext log1 = new LoggerContext(LoggerMode.EVENT_VIEWER_MODE);
        log1.log("PRIMEIRA MENSAGEM DE LOG");
        LoggerContext log2 = new LoggerContext(LoggerMode.DATABASE_MODE);
        log2.log("SEGUNDA MENSAGEM DE LOG");
        LoggerContext log3 = new LoggerContext(LoggerMode.FILE_MODE);
        log3.log("TERCEIRA MENSAGEM DE LOG");
    }
}
