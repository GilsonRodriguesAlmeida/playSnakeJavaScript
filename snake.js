
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

    //Controls 
    document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            //arrow right = 39
            case 39:
                veloX = 1;
                veloY = 0;
                break;
            //arrow left = 37
            case 37:
                veloX = -1;
                veloY = 0;
                break;
            //arrow up
            case 38:
                veloY = -1;
                veloX = 0;
                break;
            //arrow down
            case 40:
                veloY = 1;
                veloX = 0;
                break;
        }
    });

}

function game() {
    //config screen
    context.fillStyle = "#2980B9";
    // distance border h, distance border v, large, height
    context.fillRect(0,0,canvas.width, canvas.height)

    //displacement snake
    positionX += veloX;
    positionY += veloY;

    //mirroring snake
    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0;
    }

    //Config Snake
    context.fillStyle = "#00f102";

    for(let i = 0; i < snake.length; i++){
        context.fillRect(snake[i].x * grid, snake[i].y * grid, grid - 1, grid - 1)
        if(snake[i].x == positionX && snake[i].y == positionY){
            tam = 3;
        }
    }

    //Position snake
    snake.push({x: positionX, y: positionY})

    //delete snake
    while(snake.length > tam){
        snake.shift(); //tira o primeiro valor de um array
    }

    //config food
    context.fillStyle = "#F1C40F";
    context.fillRect(foodX*grid, foodY*grid, grid -1, grid -1);

    // eating food
    if(positionX == foodX && positionY == foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }

}