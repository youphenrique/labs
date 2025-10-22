package TemplatePattern;

public class Reverse extends StringTransformer{

    @Override
    public void transform(){
        string = new StringBuilder(string).reverse().toString();
    }

    @Override
    public void print(){
        System.out.println("Reverse string: " + string);
        System.out.println();
    }

}
