package CommandPattern.Games;

import CommandPattern.GameReceiver;

public class Futebol implements GameReceiver{
    @Override
    public void PressA() {
        System.out.println("Jogador Chuta a Bola.");
    }

    @Override
    public void PressB() {
        System.out.println("Jogador Toca a Bola.");
    }
}
