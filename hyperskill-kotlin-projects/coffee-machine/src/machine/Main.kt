package machine

data class Recipe(
    val water: Int,
    val milk: Int,
    val coffeeBeans: Int,
    val price: Int
)

class CoffeeMachine(
    var waterAmount: Int,
    var milkAmount: Int,
    var coffeeBeansAmount: Int,
    var disposableCupsAmount: Int,
    var moneyAmount: Int
) {
    private var state: String = "WRITE_ACTION"
    private val recipes = mapOf(
        "1" to Recipe(250, 0, 16, 4),
        "2" to Recipe(350, 75, 20, 7),
        "3" to Recipe(200, 100, 12, 6)
    )

    fun promptAction() {
        when (state) {
            "WRITE_ACTION" -> promptWriteAction()
            "BUY" -> promptBuyAction()
            "FILL_WATER" -> promptFillWater()
            "FILL_MILK" -> promptFillMilk()
            "FILL_COFFEE_BEANS" -> promptFillCoffeeBeans()
            "FILL_DISPOSABLE_CUPS" -> promptFillDisposableCups()
        }
    }

    fun handleActionInput(action: String) {
        when {
            state == "WRITE_ACTION" && action == "remaining" -> processRemainingAction()
            state == "WRITE_ACTION" && action == "fill" -> state = "FILL_WATER"
            state == "WRITE_ACTION" && action == "buy" -> state = "BUY"
            state == "WRITE_ACTION" && action == "take" -> processTakeAction()
            state == "WRITE_ACTION" && action == "exit" -> return
            state == "BUY" -> processBuyAction(action)
            state == "FILL_WATER" -> processFillAction("water", action.toInt())
            state == "FILL_MILK" -> processFillAction("milk", action.toInt())
            state == "FILL_COFFEE_BEANS" -> processFillAction("coffee beans", action.toInt())
            state == "FILL_DISPOSABLE_CUPS" -> processFillAction("disposable cups", action.toInt())
        }

        println()
    }

    fun promptWriteAction() {
        println("Write action (buy, fill, take, remaining, exit):")
    }

    fun processRemainingAction() {
        println("\nThe coffee machine has:")
        println("$waterAmount ml of water")
        println("$milkAmount ml of milk")
        println("$coffeeBeansAmount g of coffee beans")
        println("$disposableCupsAmount disposable cups")
        println("$$moneyAmount of money")

        state = "WRITE_ACTION"
    }

    fun promptBuyAction() {
        println("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:")
    }

    fun processBuyAction(drinkAction: String) {
        if (drinkAction != "back") {
            val drinkType = recipes[drinkAction]!!
            if (canMakeDrink(drinkType)) {
                makeDrink(drinkType)
            }
        }

        state = "WRITE_ACTION"
    }

    private fun canMakeDrink(recipe: Recipe) = when {
        waterAmount < recipe.water -> {
            println("Sorry, not enough water!")
            false
        }

        milkAmount < recipe.milk -> {
            println("Sorry, not enough milk!")
            false
        }

        coffeeBeansAmount < recipe.coffeeBeans -> {
            println("Sorry, not enough coffee beans!")
            false
        }

        disposableCupsAmount < 1 -> {
            println("Sorry, not enough disposable cups!")
            false
        }

        else -> true
    }

    private fun makeDrink(recipe: Recipe) {
        println("I have enough resources, making you a coffee!")

        waterAmount -= recipe.water
        milkAmount -= recipe.milk
        coffeeBeansAmount -= recipe.coffeeBeans
        disposableCupsAmount--
        moneyAmount += recipe.price
    }

    fun promptFillWater() {
        println("Write how many ml of water you want to add:")
    }

    fun promptFillMilk() {
        println("Write how many ml of milk you want to add:")
    }

    fun promptFillCoffeeBeans() {
        println("Write how many grams of coffee beans you want to add:")
    }

    fun promptFillDisposableCups() {
        println("Write how many disposable cups you want to add:")
    }

    fun processFillAction(component: String, fillAmount: Int) {
        when (component) {
            "water" -> {
                waterAmount += fillAmount
                state = "FILL_MILK"
            }

            "milk" -> {
                milkAmount += fillAmount
                state = "FILL_COFFEE_BEANS"
            }

            "coffee beans" -> {
                coffeeBeansAmount += fillAmount
                state = "FILL_DISPOSABLE_CUPS"
            }

            "disposable cups" -> {
                disposableCupsAmount += fillAmount
                state = "WRITE_ACTION"
            }
        }
    }

    fun processTakeAction() {
        println("I gave you $${moneyAmount}")
        moneyAmount = 0
        state = "WRITE_ACTION"
    }
}

fun main() {
    val coffeeMachine = CoffeeMachine(400, 540, 120, 9, 550)

    while (true) {
        coffeeMachine.promptAction()
        val action = readln()
        coffeeMachine.handleActionInput(action)
        if (action == "exit") break
    }
}