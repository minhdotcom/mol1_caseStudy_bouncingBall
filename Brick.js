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
var brickY = BRICK_ALIGNMENT;
for (i = 1; i <= BRICK_ROW; i++) {
    var brickWidth = (CANVAS_WIDTH - (2 * BRICK_ALIGNMENT) + 10) / BRICK_COLUMN - 10,
        brickHeight = 10,
        brickX = BRICK_ALIGNMENT;
    for (let j = 1; j <= BRICK_COLUMN; j++) {
        brick = new Brick(brickX, brickY, brickWidth, brickHeight, "#d3d3d3", 0);
        bricks.push(brick);
        brickX += brickWidth + 10;
    }
    brickY += 30;
}