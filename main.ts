gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Click, function () {
    _continue = 1
    while (_continue == 1) {
        for (let index = 0; index <= 4; index++) {
            led.toggle(2, index)
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Click, function () {
    _continue = 0
})
let _continue = 0
_continue = 0
