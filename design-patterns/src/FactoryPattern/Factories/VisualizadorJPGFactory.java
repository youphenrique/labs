package FactoryPattern.Factories;

import FactoryPattern.VisualizadorFactory;
import FactoryPattern.Visualizador;
import FactoryPattern.Visualizadores.VisualizadorJPG;

public class VisualizadorJPGFactory implements VisualizadorFactory {
    @Override
    public Visualizador criaVisualizador() {
        return new VisualizadorJPG();
    }
}
