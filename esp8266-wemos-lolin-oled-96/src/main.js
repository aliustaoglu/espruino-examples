I2C1.setup({ sda: NodeMCU.D1, scl: NodeMCU.D2 });
var g = require('SSD1306').connect(I2C1, function start() {
  g.setFontVector(20);
  g.drawString('Wemos', 2, 2);
  g.drawString('Lolin32', 2, 32);
  g.flip();
});