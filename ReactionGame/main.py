import machine
import utime
import urandom

#LED, button setup
led = machine.Pin(15, machine.Pin.OUT)
button = machine.Pin(14, machine.Pin.IN, machine.Pin.PULL_DOWN)

print("Reaction game starting")
#global
timer_start = 0

#Interrupt handler
def button_handler(pin):
    button.irq(handler=None)
    reaction_time = utime.ticks_diff(utime.ticks_ms(), timer_start)
    print("Your reaction time was: " + str(reaction_time) + " millisecons!")
    print("Program complete.")

#ready check
led.value(1)
utime.sleep(urandom.uniform(5, 10))

led.value(0)
timer_start = utime.ticks_ms()

button.irq(trigger=machine.Pin.IRQ_RISING, handler=button_handler)
