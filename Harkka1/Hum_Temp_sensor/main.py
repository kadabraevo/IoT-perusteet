import machine
import time
import dht

sensor = dht.DHT22(machine.Pin(15))

while True:
    try:
        sensor.measure()
        temperature = sensor.temperature()
        humidity = sensor.humidity()
        print("Temerature: {:.1f}°C".format(temperature))
        print("Humidity: {:.1f}%".format(humidity))
    except OSError as e:
        print("Sensor read error: ", e)

    time.sleep(1)
