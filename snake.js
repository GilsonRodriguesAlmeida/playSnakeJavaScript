
window.onload = function(){

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    //variable
    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    veloX = 0;
    veloY = 0;
    grid = 20;
    tam = 3;

    //Call function play 100 milliseconds
    setInterval(game, 100)

}

function game() {
    //config screen
    context.fillStyle = "#2980B9";
    // distance border h, distance border v, large, height
    context.fillRect(0,0,canvas.width, canvas.height)

    //Position snake
    snake.push({x: positionX, y: positionY})

    //Config Snake
    context.fillStyle = "#00f102";

    for(let i = 0; i < snake.length; i++){
        context.fillRect(snake[i].x * grid, snake[i].y * grid, grid - 1, grid - 1)
    }
}