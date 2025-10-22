package TemplatePattern;

public class ToLowerCase extends StringTransformer{

    @Override
    public void transform(){
        string = string.toLowerCase();
    }

    @Override
    public void print(){
        System.out.print("Lowercase string: " + string + "\n");
    }

}
