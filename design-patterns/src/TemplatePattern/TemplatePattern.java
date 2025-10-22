package TemplatePattern;

import java.io.IOException;

public class TemplatePattern {

    public static void main(String[] args) throws IOException{
        System.out.println("-------------------- Template Design Pattern --------------------");

        StringTransformer stringUpperCase = new ToUpperCase();
        stringUpperCase.transformString();

        StringTransformer stringLowerCase = new ToLowerCase();
        stringLowerCase.transformString();

        StringTransformer stringDuplicated = new Duplicate();
        stringDuplicated.transformString();

        StringTransformer stringReverse = new Reverse();
        stringReverse.transformString();
    }

}
