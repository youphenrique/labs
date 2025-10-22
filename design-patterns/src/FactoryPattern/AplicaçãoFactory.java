package FactoryPattern;

import FactoryPattern.Factories.VisualizadorBMPFactory;
import FactoryPattern.Factories.VisualizadorJPGFactory;

public class AplicaçãoFactory {
    public static void main(String[] args){
        VisualizadorFactory fabrica = new VisualizadorBMPFactory();
        Visualizador visual;
        visual = fabrica.criaVisualizador();
        visual.Visualizar();
        fabrica = new VisualizadorJPGFactory();
        Visualizador visual2 = fabrica.criaVisualizador();
        visual2.Visualizar();
    }
}
