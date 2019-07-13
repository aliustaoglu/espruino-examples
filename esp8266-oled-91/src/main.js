I2C1.setup({ sda: NodeMCU.D2, scl: NodeMCU.D1 });
var g = require('SSD1306').connect(I2C1, function start() {
  g.setFontVector(20);
  g.drawString('Cuneyt', 2, 2);
  g.drawString('Aliustaoglu', 2, 32);
  g.flip();
});



