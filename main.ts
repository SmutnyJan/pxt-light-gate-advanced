input.onButtonPressed(Button.A, function () {
    Svetelna_Brana.SpustitKalibraci(5)
})
Svetelna_Brana.NastavitToleranci(25)
basic.forever(function () {
    if (Svetelna_Brana.ProvedKontrolu() == true) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
    }
})
