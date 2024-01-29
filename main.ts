radio.onReceivedNumber(function (receivedNumber) {
    if (steen == 1 && receivedNumber == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (steen == 1 && receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (steen == 1 && receivedNumber == 3) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    } else if (steen == 2 && receivedNumber == 1) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    } else if (steen == 2 && receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (steen == 2 && receivedNumber == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (steen == 3 && receivedNumber == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (steen == 3 && receivedNumber == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    } else if (steen == 3 && receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    steen = 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    steen = 3
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    steen = 2
})
let steen = 0
radio.setGroup(3)
loops.everyInterval(500, function () {
    if (input.temperature() <= 20) {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    } else if (input.temperature() >= 26) {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    } else {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    }
})
basic.forever(function () {
	
})
