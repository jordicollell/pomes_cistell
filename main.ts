input.onButtonPressed(Button.A, function () {
    cistell.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    cistell.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let cistell: game.LedSprite = null
cistell = game.createSprite(0, 4)
let poma = game.createSprite(0, 0)
basic.forever(function () {
    if (cistell.isTouching(poma)) {
        music.playTone(880, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        game.addScore(1)
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        poma.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    poma.set(LedSpriteProperty.Y, 0)
    poma.set(LedSpriteProperty.X, randint(0, 4))
})
