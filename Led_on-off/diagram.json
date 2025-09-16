{
  "version": 1,
  "author": "Anonymous maker",
  "editor": "wokwi",
  "parts": [
    {
      "type": "board-pi-pico-w",
      "id": "pico",
      "top": -99.25,
      "left": 3.55,
      "attrs": { "env": "micropython-20241129-v1.24.1" }
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn1",
      "top": 25.4,
      "left": -134.4,
      "attrs": { "color": "green", "xray": "1", "bounce": "1" }
    },
    {
      "type": "wokwi-led",
      "id": "led1",
      "top": -22.8,
      "left": 157.8,
      "attrs": { "color": "red", "flip": "1" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r1",
      "top": 23.15,
      "left": 96,
      "attrs": { "value": "150" }
    }
  ],
  "connections": [
    [ "pico:GND.4", "btn1:2.r", "black", [ "h0" ] ],
    [ "pico:GP13", "btn1:1.r", "green", [ "h-57.6", "v-28.76" ] ],
    [ "r1:1", "pico:GP18", "green", [ "v38.4", "h-28.8" ] ],
    [ "r1:2", "led1:A", "green", [ "v0" ] ],
    [ "pico:GND.5", "led1:C", "black", [ "h105.91", "v-57.56" ] ]
  ],
  "dependencies": {}
}
