var bar = new function () {
    this.color = "#0000ff";
    this.height = BAR_HEIGHT;
    this.x = 200;
    this.y = CANVAS_HEIGHT - this.height;
    this.width = BAR_WIDTH;
    this.speed = BAR_SPEED;
    this.accelaration = 0;

    this.draw = function () {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.x, this.y, this.width, this.height);
        context.closePath();
        context.fill();
    }

    let moveX = 0;

    this.move = function () {
        if (this.x < 0 || this.x > CANVAS_WIDTH - this.width) {
            moveX = - moveX;
        }
        this.x += moveX;
        this.draw();
    }

    this.setBarKeyBoard = function () {
        window.addEventListener("keydown", press_down, false);
        var that = this;
        function press_down(event) {
            let keyCode = event.which;
            switch (keyCode) {
                case 37:
                    moveX = - that.speed;
                    break;
                case 39:
                    moveX = + that.speed;
                    break;
            }
        }
        window.addEventListener("keyup", press_up, false);
        function press_up (event) {
            moveX = 0;
        }
    }
}


















