/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#a0a803 icon="\uf030"
namespace Svetelna_Brana {
    let toleration = 0
    let calibrated = false
    let calibrationBegan = false
    let lightLevel = 0

    /**
    * Nastaví novou toleraci
    */
    //% block="Nastav toleranci %tolerace"

    export function NastavitToleranci(tol: number): void {
        toleration = tol;
    }

    /**
    * Spustí kalibraci
    */
    //% block="Zkalibruj za %cas vteřin"

    export function SpustitKalibraci(seconds: number): void {
        calibrated = false
        led.stopAnimation()
        music.stopAllSounds()
        calibrationBegan = true
        while (seconds > 0) {
            basic.showNumber(seconds)
            basic.pause(1000)
            seconds += -1
        }
        lightLevel = input.lightLevel()
        calibrated = true
    }

    /**
    * Zkontroluje hladinu světla
    */
    //% block="Proveď kontrolu"
    export function ProvedKontrolu(action: () => void) {
        const myEventID = 111 + Math.randomRange(0, 100); // semi-unique

        control.onEvent(myEventID, 0, function () {
            control.inBackground(() => {
                action()
            })
        })

        control.inBackground(() => {
            while (true) {
                if (calibrationBegan == false) {
                    basic.showString("Zkalibrujte senzor!")
                }
                else if (calibrated == true) {
                    if (input.lightLevel() > lightLevel + toleration || input.lightLevel() < lightLevel - toleration) {
                        control.raiseEvent(myEventID, 0)
                    }
                    else {
                        basic.showIcon(IconNames.Happy)
                    }
                }
                basic.pause(20)
            }
        })
    }










}