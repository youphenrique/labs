package CommandPattern.Games;

import CommandPattern.GameReceiver;

public class Luta implements GameReceiver{
    @Override
    public void PressA() {
        System.out.println("Jogador Soca Oponente.");
    }

    @Override
    public void PressB() {
        System.out.println("Jogador Defende Ataque.");
    }
}
