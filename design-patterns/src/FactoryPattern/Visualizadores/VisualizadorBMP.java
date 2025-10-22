package FactoryPattern.Visualizadores;

import FactoryPattern.Images.ImageBMP;
import FactoryPattern.Visualizador;
import FactoryPattern.Image;

public class VisualizadorBMP implements Visualizador {
    @Override
    public void Visualizar() {
        Image imagem = new ImageBMP();
        imagem.carregar();
        imagem.exibir();
        imagem.fechar();
    }
}
