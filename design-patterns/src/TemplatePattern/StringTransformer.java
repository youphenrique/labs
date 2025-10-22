package TemplatePattern;

import java.io.*;

public abstract class StringTransformer{
    protected String string;

    // Primitive Operation 1
    abstract void transform();
    // Primitive Operation 2
    abstract void print();

    // Template Method
    public void transformString() throws IOException{
        BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
        //read the string
        System.out.print("\nEnter a string: ");
        string = input.readLine();

        //transform the string
        System.out.println("Transforming string... ");
        transform();

        //print the string
        print();
    }
}
