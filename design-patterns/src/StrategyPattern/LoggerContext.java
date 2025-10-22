package StrategyPattern;


public class LoggerContext {
    private LoggerMode mode;
    public LoggerStrategy strategy;
    public LoggerContext(LoggerMode mode){
        setMode(mode);
    }

    public void setMode(LoggerMode mode) {
        switch(mode){
            case EVENT_VIEWER_MODE:
                strategy = new LoggerEventViewerStrategy();
                this.mode = mode;
                break;
            case FILE_MODE:
                strategy = new LoggerFileStrategy();
                this.mode = mode;
                break;
            case DATABASE_MODE:
                strategy = new LoggerDatabaseStrategy();
                this.mode = mode;
                break;
            default:
                throw new RuntimeException("Não existe este modo");
        }
    }
    public void log(String s){
            strategy.log(s);
    }
}
