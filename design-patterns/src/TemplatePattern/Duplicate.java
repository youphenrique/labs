package TemplatePattern;

public class Duplicate extends StringTransformer{

    @Override
    public void transform(){
        string = string + string;
    }

    @Override
    public void print(){
        System.out.print("Duplicate string: " + string);
        System.out.println();
    }

}
