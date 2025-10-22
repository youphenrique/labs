package VisitorPattern;

public class MergesortVisitor implements ArrayVisitor{
    private int[] numbers;
    private int[] helper;
    private int number;

    @Override
    public double visit(int[] array){
        long startTime = System.currentTimeMillis();

        this.numbers = array;
        number = array.length;
        this.helper = new int[number];
        mergesort(0, number - 1);

        long endTime = System.currentTimeMillis();
        double totalTime = (endTime - startTime) / 1000.0;

        return totalTime;
    }

    private void mergesort(int low, int high) {
        if (low < high) {
            int middle = low + (high - low) / 2;
            mergesort(low, middle);
            mergesort(middle + 1, high);
            merge(low, middle, high);
        }
    }

    private void merge(int low, int middle, int high) {
        for(int i = low; i <= high; i++){
            helper[i] = numbers[i];
        }

        int i = low;
        int j = middle + 1;
        int k = low;

        while(i <= middle && j <= high){
            if(helper[i] <= helper[j]){
                numbers[k] = helper[i];
                i++;
            }else{
                numbers[k] = helper[j];
                j++;
            }
            k++;
        }

        while (i <= middle) {
            numbers[k] = helper[i];
            k++;
            i++;
        }
    }

}
