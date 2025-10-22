package MementoPattern;

import java.util.Stack;

public class CalculatorCareTaker {
    private Stack<CalculatorMemento> states;

    public CalculatorCareTaker(){
        states = new Stack<CalculatorMemento>();
    }

    public void addMemento(CalculatorMemento memento){
        states.push(memento);
    }

    public CalculatorMemento getLastMemento(){
        if(states.empty()){
            return new CalculatorMemento("");
        }
        CalculatorMemento state = states.peek();
        states.pop();
        return state;
    }
}
