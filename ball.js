var ball = new function () {
    this.radius = 10;
    this.x = 250;
    this.y = 250;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
    this.color = "#0000ff"
    this.speed = 5;
    this.moveAngle = Math.random();

    this.draw = function () {
        context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        context.closePath();
        context.fill();
    }

    var moveX = this.speed,
        moveY = moveX * (1 + this.moveAngle);

    this.moveRules = function (barEdge1, barEdge2) {
        if (this.y > (CANVAS_HEIGHT - this.radius) && (this.x < barEdge1 || this.x > barEdge2)) {
            clearInterval(interval);
            alert("Game over!");
        }
        if ((this.y <= this.radius) ||
            (this.y >= (CANVAS_HEIGHT - this.radius)) && (this.x >= barEdge1 && this.x <= barEdge2)
        ) {
            moveY = - moveY;
        }
        if (this.x <= this.radius || this.x >= (CANVAS_WIDTH - this.radius)) {
            moveX = - moveX;
        }
    }

    this.move = function (barEdge1, barEdge2) {
        this.moveRules(barEdge1, barEdge2);
        this.x -= moveX;
        this.y -= moveY;
        this.draw();
    }
}