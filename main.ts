input.onButtonPressed(Button.A, function () {
    if (randint(1, 6) > 1) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        game.addScore(2)
    } else {
        game.gameOver()
    }
})
