package cinema

class Cinema(private val rows: Int, private val columns: Int) {
    private val seatingArrangement = Array(rows + 1) { CharArray(columns + 1) }
    private var purchasedTickets = 0
    private var currentIncome = 0
    private var totalIncome = 0

    init {
        for (i in 0..rows) {
            for (j in 0..columns) {
                if (i == 0 && j == 0) {
                    seatingArrangement[i][j] = ' '
                } else if (i == 0) {
                    seatingArrangement[0][j] = j.toString().first()
                } else if (j == 0) {
                    seatingArrangement[i][0] = i.toString().first()
                } else {
                    seatingArrangement[i][j] = 'S'
                }
            }
        }
    }

    init {
        val totalSeats = rows * columns
        totalIncome = if (totalSeats <= 60) totalSeats * 10 else {
            val halfRows = rows / 2
            if (rows % 2 == 0) halfRows * columns * 18
            else columns * (halfRows * 10 + (halfRows + 1) * 8)
        }
    }

    fun processTicketPurchase() {
        var row: Int
        var seat: Int

        while(true) {
            println("\nEnter a row number:")

            row = readln().toInt()

            println("Enter a seat number in that row:")

            seat = readln().toInt()

            if (row < 1 || row > rows || seat < 1 || seat > columns) {
                println("Wrong input!")
            } else if (seatingArrangement[row][seat] == 'B') {
                println("That ticket has already been purchased!")
            } else break
        }

        val ticketPrice = if (rows * columns <= 60 || row <= rows / 2) 10 else 8

        seatingArrangement[row][seat] = 'B'
        purchasedTickets++
        currentIncome += ticketPrice

        println("\nTicket price: $$ticketPrice")
    }

    fun printSeatingArrangement() {
        println("\nCinema:")

        for (i in 0..rows) {
            println(seatingArrangement[i].joinToString(separator = " "))
        }
    }

    fun printStatistics() {
        println("\nNumber of purchased tickets: $purchasedTickets")
        println("Percentage: ${"%.2f".format(purchasedTickets.toDouble() / (rows * columns) * 100)}%")
        println("Current income: $$currentIncome")
        println("Total income: $$totalIncome")
    }
}

fun main() {
    println("Enter the number of rows:")

    val rows = readln().toInt()

    println("Enter the number of seats in each row:")

    val seatsInRow = readln().toInt()

    val cinema = Cinema(rows, seatsInRow)

    while (true) {
        println("\n1. Show the seats")
        println("2. Buy a ticket")
        println("3. Statistics")
        println("0. Exit")

        val choice = readln().toInt()

        when (choice) {
            1 -> cinema.printSeatingArrangement()
            2 -> cinema.processTicketPurchase()
            3 -> cinema.printStatistics()
            0 -> break
        }
    }
}