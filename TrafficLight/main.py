import machine
import utime

led_red = machine.Pin(15, machine.Pin.OUT)
led_yellow = machine.Pin(14, machine.Pin.OUT)
led_green = machine.Pin(13, machine.Pin.OUT)
button = machine.Pin(16, machine.Pin.IN, machine.Pin.PULL_DOWN)
buzzer = machine.Pin(12, machine.Pin.OUT)

print("starting")

while True:
    if button.value() == 1:
        led_red.value(1)
        for i in range(10):
            buzzer.value(1)
            utime.sleep(0.2)
            buzzer.value(0)
            utime.sleep(0.2)
        led_red.value(0)

    led_red.value(1)
    utime.sleep(2)
    led_red.value(0)
    led_yellow.value(1)
    utime.sleep(2)
    led_yellow.value(0)
    led_green.value(1)
    utime.sleep(2)
    led_green.value(0)
    led_yellow.value(1)
    utime.sleep(2)
    led_yellow.value(0)
