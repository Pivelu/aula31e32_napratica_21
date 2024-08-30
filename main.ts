let tempo = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        tempo += -1
        basic.showNumber(tempo)
        basic.pause(100)
    }
    basic.showString("amo pipoca")
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(10)
    tempo = 10
})
basic.forever(function () {
	
})
