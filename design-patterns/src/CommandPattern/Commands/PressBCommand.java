package CommandPattern.Commands;

import CommandPattern.Command;
import CommandPattern.GameReceiver;

public class PressBCommand implements Command{
    private GameReceiver game;
    public PressBCommand(GameReceiver game){
        this.game = game;
    }
    @Override
    public void Execute() {
        game.PressB();
    }
}
