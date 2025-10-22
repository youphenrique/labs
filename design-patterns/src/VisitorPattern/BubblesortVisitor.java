package VisitorPattern;

public class BubblesortVisitor implements ArrayVisitor{

    @Override
    public double visit(int[] array){
        long startTime = System.currentTimeMillis();

        for(int i = 0; i < array.length; i++){
            for(int j = 1; j < array.length - i; j++){
                if(array[j - 1] > array[j]){
                    int aux = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = aux;
                }
            }
        }

        long endTime = System.currentTimeMillis();
        double totalTime = (endTime - startTime) / 1000.0;

        return totalTime;
    }

}
