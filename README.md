## Collection of Espruino examples with ESP8266 or ESP32

This repository uses `espruino-create-project` library to create the boilerplate.

### esp8266-oled-91

![esp8266-oled-91](https://raw.githubusercontent.com/aliustaoglu/espruino-examples/master/pics/esp8266-oled-91.png)

```javascript
I2C1.setup({ sda: NodeMCU.D2, scl: NodeMCU.D1 });
var g = require('SSD1306').connect(I2C1, function start() {
  g.setFontVector(20);
  g.drawString('Cuneyt', 2, 2);
  g.drawString('Aliustaoglu', 2, 32);
  g.flip();
});
```

### esp8266-wemos-lolin-oled-96

Pinout:

![lolin32-oled-pinout](https://raw.githubusercontent.com/aliustaoglu/espruino-examples/master/pics/lolin32-oled-pinout.jpg)

| Oled | ESP          |
| ---- | ------------ |
| SCL  | GPIO 5 (D1)  |
| SDA  | GPIO 4 (D2)  |

![esp8266-wemos-lolin32](https://raw.githubusercontent.com/aliustaoglu/espruino-examples/master/pics/esp8266-wemos-lolin32.png)


```javascript
I2C1.setup({ sda: NodeMCU.D1, scl: NodeMCU.D2 });
var g = require('SSD1306').connect(I2C1, function start() {
  g.setFontVector(20);
  g.drawString('Wemos', 2, 2);
  g.drawString('Lolin32', 2, 32);
  g.flip();
});
```