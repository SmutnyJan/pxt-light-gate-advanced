input.onButtonPressed(Button.A, function () {
    Svetelna_Brana.SpustitKalibraci(5)
})
Svetelna_Brana.ProvedKontrolu(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # # # .
        # . . . #
        `)
})
Svetelna_Brana.NastavitToleranci(25)
