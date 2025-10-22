import org.hyperskill.hstest.dynamic.DynamicTest;
import org.hyperskill.hstest.stage.StageTest;
import org.hyperskill.hstest.testcase.CheckResult;
import org.hyperskill.hstest.testing.TestedProgram;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

// Bubblegum: $202.0
// Toffee: $118.0
// Ice cream: $2250.0
// Milk chocolate: $1680.0
// Doughnut: $1075.0
// Pancake: $80.0
//
// Income: $5405.0
// Staff expenses: $4170
// Other expenses: $220
// Net income: $1015

public class MyFirstProjectTest extends StageTest {
    @DynamicTest
    CheckResult testFirstProject() {
        TestedProgram pr = new TestedProgram();

        String output = pr.start().toLowerCase().strip();
        if (output.isEmpty()) {
            return CheckResult.wrong("Your program didn't print any output.");
        } else if (output.contains(">")) {
            return CheckResult.wrong("The greater-than symbol followed by a space (> ) represents the user input " +
                    "in examples. It's not part of the input and you shouldn’t print this sign");
        }
        if (!output.contains("earned")) {
            return CheckResult.wrong("Your program didn't print the 'Earned amount' line");
        }
        Map<String, String> map = new HashMap<>() {{
            put("Bubblegum", "202");
            put("Toffee", "118");
            put("Ice cream", "2250");
            put("Milk chocolate", "1680");
            put("Doughnut", "1075");
            put("Pancake", "80");
        }};
        for (String name : map.keySet()) {
            if (!output.contains(name.toLowerCase())) {
                return CheckResult.wrong(String.format("Your program should print the '%s' as an item", name));
            }
            if (!output.contains(map.get(name))) {
                return CheckResult.wrong(String.format("Incorrect earned amount for %s.", name));
            }
        }
        if (!output.contains("income")) {
            return CheckResult.wrong("Your program should print the 'Income' on a separate line");
        }
        if (!output.contains("5405")) {
            return CheckResult.wrong("Incorrect total income! Make sure you didn’t print the total income value from " +
                    "the examples, calculate it based on the earnings mentioned in previous stage.");
        }
        if (!output.contains("staff expenses")) {
            return CheckResult.wrong("Your program should ask the user for input with the 'Staff expenses' line");
        }
        if (output.contains("other expenses") || output.contains("net income")) {
            return CheckResult.wrong("When the program has just started, you should not yet print the 'Other " +
                    "expenses' or 'Net income' lines, as no input has been provided yet.");
        }
        if (!pr.isWaitingInput()) {
            return CheckResult.wrong("Your program should ask the user to input the staff expenses");
        }
        String output1 = pr.execute("4170").toLowerCase().strip();
        if (!output1.contains("other expenses")) {
            return CheckResult.wrong("Your program should ask the user for input with the 'Other expenses' line");
        }
        if (!pr.isWaitingInput()) {
            return CheckResult.wrong("Your program should ask the user to input other expenses");
        }
        String output2 = pr.execute("220").toLowerCase().strip();
        if (!output2.contains("net income")) {
            return CheckResult.wrong("Your program should print the 'Net income' on a separate line");
        } else if (!output2.contains("1015")) {
            return CheckResult.wrong(
                    "Incorrect net income! Make sure you didn’t print the net income value from the examples" +
                            ", calculate it by subtracting expenses provided in the input from the total income");
        }
        return CheckResult.correct();
    }
}