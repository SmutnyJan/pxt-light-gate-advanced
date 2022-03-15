let jeHraZapnuta = false
input.onButtonPressed(Button.A, function () {
    if (jeHraZapnuta == false) {
        lightGate.calibrate(50)
    }
    jeHraZapnuta = !(jeHraZapnuta)
})
lightGate.onLightLevelDrop(function () {
    if (jeHraZapnuta) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
