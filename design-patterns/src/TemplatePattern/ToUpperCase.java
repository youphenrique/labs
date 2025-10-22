package TemplatePattern;

public class ToUpperCase extends StringTransformer{

    @Override
    public void transform(){
        string = string.toUpperCase();
    }

    @Override
    public void print(){
        System.out.print("Uppercase string: " + string);
        System.out.println();
    }
}
