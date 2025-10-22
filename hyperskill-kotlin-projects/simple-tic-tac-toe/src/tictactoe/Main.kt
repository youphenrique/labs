package tictactoe

import java.util.Scanner

const val X_WINNER_CODE = 264
const val O_WINNER_CODE = 237

val gs = CharArray(9) { ' ' }

enum class GameState {
    X_WINS, O_WINS, DRAW, NOT_FINISHED
}

fun getIndex(x: Int, y: Int) = (x - 1) * 3 + (y - 1)

fun checkGameState(): GameState {
    // diagonals

    val d1 = gs[0].code + gs[4].code + gs[8].code
    val d2 = gs[2].code + gs[4].code + gs[6].code

    if (d1 == X_WINNER_CODE || d2 == X_WINNER_CODE) {
        return GameState.X_WINS
    }
    if (d1 == O_WINNER_CODE || d2 == O_WINNER_CODE) {
        return GameState.O_WINS
    }

    // rows

    val r1 = gs[0].code + gs[1].code + gs[2].code
    val r2 = gs[3].code + gs[4].code + gs[5].code
    val r3 = gs[6].code + gs[7].code + gs[8].code

    if (r1 == X_WINNER_CODE || r2 == X_WINNER_CODE || r3 == X_WINNER_CODE) {
        return GameState.X_WINS
    }
    if (r1 == O_WINNER_CODE || r2 == O_WINNER_CODE || r3 == O_WINNER_CODE) {
        return GameState.O_WINS
    }

    // columns

    val c1 = gs[0].code + gs[3].code + gs[6].code
    val c2 = gs[1].code + gs[4].code + gs[7].code
    val c3 = gs[2].code + gs[5].code + gs[8].code

    if (c1 == X_WINNER_CODE || c2 == X_WINNER_CODE || c3 == X_WINNER_CODE) {
        return GameState.X_WINS
    }
    if (c1 == O_WINNER_CODE || c2 == O_WINNER_CODE || c3 == O_WINNER_CODE) {
        return GameState.O_WINS
    }

    return GameState.NOT_FINISHED
}

fun printGameState() {
    println("---------")
    println("| ${gs[0]} ${gs[1]} ${gs[2]} |")
    println("| ${gs[3]} ${gs[4]} ${gs[5]} |")
    println("| ${gs[6]} ${gs[7]} ${gs[8]} |")
    println("---------")
}

fun main() {
    var scanner: Scanner
    var playerTurn = 'X'
    var emptyCellCount = 9
    var gameState = GameState.NOT_FINISHED

    printGameState()

    do {
        var moveX: Int? = null
        var moveY: Int? = null

        scanner = Scanner(readln())

        if (scanner.hasNext()) {
            moveX = scanner.next().toIntOrNull()
        }
        if (scanner.hasNext()) {
            moveY = scanner.next().toIntOrNull()
        }

        if (moveX == null || moveY == null) {
            println("You should enter numbers!")
        } else if (moveX < 1 || moveX > 3 || moveY < 1 || moveY > 3) {
            println("Coordinates should be from 1 to 3!")
        } else if (gs[getIndex(moveX, moveY)] != ' ') {
            println("This cell is occupied! Choose another one!")
        } else {
            gs[getIndex(moveX, moveY)] = if (playerTurn == 'X') {
                playerTurn = 'O'
                'X'
            } else {
                playerTurn = 'X'
                'O'
            }

            emptyCellCount--
            gameState = checkGameState()

            if (gameState == GameState.NOT_FINISHED && emptyCellCount == 0) {
                gameState = GameState.DRAW
            }

            printGameState()
        }
    } while (gameState == GameState.NOT_FINISHED)

    println(
        when (gameState) {
            GameState.X_WINS -> "X wins"
            GameState.O_WINS -> "O wins"
            else -> "Draw"
        }
    )
}