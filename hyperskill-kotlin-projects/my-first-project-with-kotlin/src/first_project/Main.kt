package first_project

fun main() {
    val itemsEarningsMap = mapOf(
        "Bubblegum" to 202,
        "Toffee" to 118,
        "Ice cream" to 2250,
        "Milk chocolate" to 1680,
        "Doughnut" to 1075,
        "Pancake" to 80
    )

    println("Earned amount:")
    itemsEarningsMap.forEach { (itemName, earnings) -> println("$itemName: $$earnings") }
    val totalEarnings = itemsEarningsMap.values.sum()
    println("\nIncome: $${totalEarnings}")

    println("Staff expenses:")
    val staffExpensesValue = readln().toInt()

    println("Other expenses:")
    val otherExpensesValue = readln().toInt()

    println("Net income: $${(totalEarnings - staffExpensesValue - otherExpensesValue)}")
}