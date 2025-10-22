package StrategyPattern;

import SingletonPattern.LoggerSingleton;

public class LoggerFileStrategy implements LoggerStrategy{
    @Override
    public void log(String s) {
        LoggerSingleton logger = LoggerSingleton.getInstancia();
        if(!logger.isAtivo())logger.setAtivo(true);
        logger.log("FILE::LOG::"+s);
    }
}
