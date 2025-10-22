package MementoPattern;

public class CalculatorMemento{
    private String expressionState;

    public CalculatorMemento(String expression){
        setState(expression);
    }

    public void setState(String expressionState){
        this.expressionState = expressionState;
    }

    public String getState(){
        return expressionState;
    }
}
