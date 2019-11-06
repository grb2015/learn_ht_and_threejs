function(g,rect,comp,data,view){
    var x = rect.x;
    var y = rect.y;
    var width = rect.width;
    var height = rect.height;

    var borderColor = comp.getValue('borderColor');
    var borderWidth = comp.getValue('borderWidth');
    var background = comp.getValue('background');
    var value = comp.getValue('value');
    var foreColor = comp.getValue('foreColor');
    var valueVisible = comp.getValue('valueVisible');
    var valueColor = comp.getValue('valueColor');
    var valueFont = comp.getValue('valueFont');
    var gradientColor = comp.getValue('gradientColor');
    var direction = comp.getValue('direction');

    if (value < 0) value = 0;
    if (value > 1) value = 1;

    // draw background
    if (background) {
        g.fillStyle = background;
        g.beginPath();
        g.rect(x, y, width, height);
        g.fill();
    }

    if (gradientColor) {
        if (direction === 'v') {
            var t = g.createLinearGradient(x, y, x+width, y);
        }
        else {
            var t = g.createLinearGradient(x, y, x, y+height);
        }    
        t.addColorStop(0, foreColor);
        t.addColorStop(0.5, gradientColor);
        t.addColorStop(1, foreColor);
        g.fillStyle = t;
    }
    else {
        g.fillStyle = foreColor;
    }

    g.beginPath();
    if (direction === 'v') {
        g.rect(x, y+height * (1 - value), width, height * value);
    }
    else {
        g.rect(x, y, width * value, height);
    }  
    g.fill();

    // draw border
    if (borderWidth && borderColor) {
        ht.Default.drawBorder(g, borderColor, x, y, width, height, borderWidth);
    }

    if (valueVisible) {
        ht.Default.drawText(g, parseInt(value * 100) + '%', valueFont, valueColor, x, y, width, height, 'center', 'middle');
    }

}
