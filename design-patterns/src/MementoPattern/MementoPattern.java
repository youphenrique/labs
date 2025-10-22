package MementoPattern;

public class MementoPattern{

    public static void main(String[] args){
        CalculatorOriginator calculator = new CalculatorOriginator();

        calculator.addExpression("(");
        calculator.addExpression("20");
        calculator.addExpression("+");
        calculator.addExpression("2");
        calculator.addExpression(")");
        calculator.addExpression("*");
        calculator.addExpression("4");

        calculator.showExpression();
        calculator.undoOperation();
        calculator.showExpression();
        calculator.undoOperation();
        calculator.showExpression();
        calculator.calculate();
    }

}
