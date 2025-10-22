package CommandPattern.Commands;

import CommandPattern.Command;
import CommandPattern.GameReceiver;

public class PressACommand implements Command {
    private GameReceiver game;
    public PressACommand(GameReceiver game){
        this.game = game;
    }
    @Override
    public void Execute() {
        game.PressA();
    }
}
