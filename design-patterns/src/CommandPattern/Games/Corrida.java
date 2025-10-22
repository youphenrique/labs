package CommandPattern.Games;

import CommandPattern.GameReceiver;

public class Corrida implements GameReceiver {
    @Override
    public void PressA() {
        System.out.println("Jogador Acelera Carro.");
    }

    @Override
    public void PressB() {
        System.out.println("Jogador Freia Carro.");
    }
}
