package VisitorPattern;

public class VisitorPattern {

    public static void main(String[] args){
        Array array = new Array();

        array.generateNumbers();
        System.out.println("### Quicksort Visitor ###");
        array.accept(new QuicksortVisitor());
        System.out.println();

        array.generateNumbers();
        System.out.println("### Mergesort Visitor ###");
        array.accept(new MergesortVisitor());
        System.out.println();

        array.generateNumbers();
        System.out.println("### Bubblesort Visitor ###");
        array.accept(new BubblesortVisitor());
        System.out.println();
    }

}
