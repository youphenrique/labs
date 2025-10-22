package CommandPattern;
import java.util.HashMap;

public class ControleInvoker {
    private final HashMap<String, Command> commands;
    public ControleInvoker(){
        commands = new HashMap<>();
    }
    public void addCommand(final String name, final Command command) {
        commands.put(name, command);
    }
    public void executeCommand(String name) {
        if (commands.containsKey(name)) {
            commands.get(name).Execute();
        }
    }
}
