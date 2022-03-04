let jeHraZapnuta = false
SvetelnaBrana.onLightDrop(function () {
    if (jeHraZapnuta) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    if (jeHraZapnuta == false) {
        SvetelnaBrana.spustitKalibraci(50)
    }
    jeHraZapnuta = !(jeHraZapnuta)
})
