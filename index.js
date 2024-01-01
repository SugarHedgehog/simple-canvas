CanvasRenderingContext2D.prototype.drawLine = function (x1, y1, x2, y2) {
    this.beginPath();
    this.moveTo(x1, y1);
    this.lineTo(x2, y2);
    this.stroke();
    this.closePath();
};

CanvasRenderingContext2D.prototype.drawRegularGrid = function (squareSide, squaresQuantity) {
    for (var i = -squaresQuantity; i <= squaresQuantity; i++) {
        this.drawLine(-squareSide * squaresQuantity, squareSide * i, squareSide * squaresQuantity, squareSide * i);
        this.drawLine(squareSide * i, -squareSide * squaresQuantity, squareSide * i, squareSide * squaresQuantity);
    }
};

CanvasRenderingContext2D.prototype.drawFilledCircle = function (x, y, radius) {
    this.beginPath();
    this.arc(x, y, radius, 0, 2 * Math.PI, false);
    this.fill();
    this.closePath();
};

CanvasRenderingContext2D.prototype.drawArc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
    anticlockwise = anticlockwise || false;
    this.beginPath();
    this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    this.stroke();
    this.closePath();
};

CanvasRenderingContext2D.prototype.drawIrregularGrid = function (width, height, cellWidth, cellHeight, scale) {
    scale = 1;
    if (scale !== undefined){
        cellWidth *= scale;
        cellHeight *= scale;
    }
    for (let i = 0; i < width; i += cellWidth)
        this.drawLine(i, 0, i, height);
    for (let i = 0; i < height; i += cellHeight)
        this.drawLine(0, i, width, i);
};

CanvasRenderingContext2D.prototype.drawSection = function (vertex) {
    this.beginPath();
    this.moveTo(vertex.last()[0], vertex.last()[1]);
    vertex.map((v) => this.lineTo(v[0], v[1]));
    this.fill();
    this.closePath();
};

CanvasRenderingContext2D.prototype.drawLineAtAngle = function (x, y, angle, length) {
    this.drawLine(x, y, x + angle.cos() * length, y + angle.sin() * length);
};
