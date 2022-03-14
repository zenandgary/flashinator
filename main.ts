basic.forever(function () {
    control.waitMicros(2000000)
    pins.digitalWritePin(DigitalPin.P0, 1)
    led.plot(0, 0)
    control.waitMicros(1000000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    led.unplot(0, 0)
    control.waitMicros(100000)
    pins.digitalWritePin(DigitalPin.P0, 1)
    led.plot(0, 0)
    control.waitMicros(1000000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    led.unplot(0, 0)
})
