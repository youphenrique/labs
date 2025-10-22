package FactoryPattern.Visualizadores;

import FactoryPattern.Images.ImageJPG;
import FactoryPattern.Visualizador;
import FactoryPattern.Image;

public class VisualizadorJPG implements Visualizador {
    @Override
    public void Visualizar() {
        Image imagem = new ImageJPG();
        imagem.carregar();
        imagem.exibir();
        imagem.fechar();
    }
}
