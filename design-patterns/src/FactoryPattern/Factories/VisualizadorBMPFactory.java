package FactoryPattern.Factories;

import FactoryPattern.VisualizadorFactory;
import FactoryPattern.Visualizador;
import FactoryPattern.Visualizadores.VisualizadorBMP;

public class VisualizadorBMPFactory implements VisualizadorFactory {
    @Override
    public Visualizador criaVisualizador() {
        return new VisualizadorBMP();
    }
}
