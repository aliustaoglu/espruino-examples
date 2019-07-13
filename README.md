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

