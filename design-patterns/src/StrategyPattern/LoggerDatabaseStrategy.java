package StrategyPattern;

import SingletonPattern.LoggerSingleton;

public class LoggerDatabaseStrategy implements LoggerStrategy {
    @Override
    public void log(String s) {
        LoggerSingleton logger = LoggerSingleton.getInstancia();
        if(!logger.isAtivo())logger.setAtivo(true);
        logger.log("DATABASE::LOG::"+s);
    }
}
