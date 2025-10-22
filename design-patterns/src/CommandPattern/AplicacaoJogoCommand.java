package CommandPattern;

import CommandPattern.Commands.PressACommand;
import CommandPattern.Commands.PressBCommand;
import CommandPattern.Games.Corrida;
import CommandPattern.Games.Futebol;
import CommandPattern.Games.Luta;

public class AplicacaoJogoCommand {
    public static void main(String[] args){
        GameReceiver game1= new Corrida();
        GameReceiver game2= new Futebol();
        GameReceiver game3= new Luta();

        ControleInvoker controle1 = new ControleInvoker();
        ControleInvoker controle2 = new ControleInvoker();
        ControleInvoker controle3 = new ControleInvoker();

        controle1.addCommand("Pressiona A", new PressACommand(game1));
        controle1.addCommand("Pressiona B", new PressBCommand(game1));
        controle2.addCommand("Pressiona A", new PressACommand(game2));
        controle2.addCommand("Pressiona B", new PressBCommand(game2));
        controle3.addCommand("Pressiona A", new PressACommand(game3));
        controle3.addCommand("Pressiona B", new PressBCommand(game3));

        controle1.executeCommand("Pressiona A");
        controle2.executeCommand("Pressiona B");
        controle3.executeCommand("Pressiona B");
        controle1.executeCommand("Pressiona B");
    }
}
