function Brick (x,y,width,height,color,health) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.heath = health;

    this.leftSide = this.x;
    this.rightSide = this.x + this.width;
    this.topSide = this.y;
    this.bottomSide = this.y + this.height;

    this.draw = function () {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.x, this.y, this.width, this.height);
        context.closePath();
        context.fill();
    }
}

var bricks = [],
    brick;
var brickY = 50;
for (i = 1; i <= BRICK_NO_HEIGHT; i++) {
    var brickWidth = (CANVAS_WIDTH - 10) / BRICK_NO_ROW - 10,
        brickHeight = 10,
        brickX = 10;
    for (let j = 1; j <= BRICK_NO_ROW; j++) {
        brick = new Brick(brickX, brickY, brickWidth, brickHeight, "#d3d3d3", 0);
        bricks.push(brick);
        brickX += brickWidth + 10;
    }
    brickY += 30;
}