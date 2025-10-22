package VisitorPattern;

public class QuicksortVisitor implements ArrayVisitor{
    private int[] numbers;
    private int number;

    @Override
    public double visit(int[] array){
        long startTime = System.currentTimeMillis();

        if(array == null || array.length == 0){
            return 0;
        }
        this.numbers = array;
        number = array.length;
        quicksort(0, number - 1);

        long endTime = System.currentTimeMillis();
        double totalTime = (endTime - startTime) / 1000.0;

        return totalTime;
    }

    private void quicksort(int low, int high){
        int i = low, j = high;
        int pivot = numbers[low + (high - low) / 2];

        while(i <= j){
            while(numbers[i] < pivot){
                i++;
            }
            while(numbers[j] > pivot){
                j--;
            }
            if(i <= j){
                exchange(i, j);
                i++;
                j--;
            }
        }

        if(low < j)
            quicksort(low, j);
        if(i < high)
            quicksort(i, high);
    }

    private void exchange(int i, int j) {
        int temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }

}
