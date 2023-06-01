input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let dood = 0
let knuffel = 20
let voeding = 20
basic.forever(function () {
    knuffel += -1
    voeding += -1
    basic.pause(1000)
})
basic.forever(function () {
    if ((knuffel > 10 && voeding) > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (knuffel < 10 && knuffel > 0 || voeding < 10 && voeding > 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (knuffel < 0 || voeding < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
