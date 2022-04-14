let jeHraZapnuta = false
input.onButtonPressed(Button.A, function () {
    if (jeHraZapnuta == false) {
        lightGate.calibrate(Deviation.Medium)
    }
    jeHraZapnuta = !(jeHraZapnuta)
})
lightGate.onLightLevelDrop(function () {
    if (jeHraZapnuta) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
