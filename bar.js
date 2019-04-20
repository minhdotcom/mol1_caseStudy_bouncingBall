var bar = new function () {
    this.color = "#0000ff";
    this.height = 10;
    this.x = 200;
    this.y = CANVAS_HEIGHT - this.height;
    this.width = 100;

    this.draw = function () {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.x, this.y, this.width, this.height);
        context.closePath();
        context.fill();
    }

    var speed = 0;

    this.move = function () {
        if (this.x <= 0 || this.x >= CANVAS_WIDTH - this.width) {
            speed = - speed;
        }
        this.x += speed;
        this.draw();
    }

    this.setBarKeyBoard = function () {
        window.addEventListener("keydown", press_down, false);
        function press_down(event) {
            var keyCode = event.which;
            switch (keyCode) {
                case 37:
                    speed = -5;
                    break;
                case 39:
                    speed = +5;
                    break;
            }
        }
        window.addEventListener("keyup", press_up, false);
        function press_up (event) {
            speed = 0;
        }
    }
}


















