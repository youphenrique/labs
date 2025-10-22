package VisitorPattern;

import java.util.Random;

public class Array{
    Random randomGenerator = new Random();
    private int[] array;
    private final int MAX = 100, BOUND = 500;

    public Array(){
        array = new int[MAX];
    }

    public void generateNumbers(){
        for(int i = 0; i < MAX; i++){
            array[i] = randomGenerator.nextInt(BOUND);
        }
    }

    public void printArray(){
        for(int i = 0; i < MAX; i++){
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }

    public void accept(ArrayVisitor visitor){
        double runtime = visitor.visit(array);
        printArray();
        System.out.printf("Runtime: %.3f ms\n", runtime);
    }
}
