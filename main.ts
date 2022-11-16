input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    cuteBot.moveTime(cuteBot.Direction.forward, 70, 3)
    basic.pause(500)
    cuteBot.moveTime(cuteBot.Direction.backward, 70, 3)
})
input.onButtonPressed(Button.B, function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
    basic.pause(500)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    basic.pause(500)
})
basic.showIcon(IconNames.Tortoise)
