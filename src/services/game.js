import {player} from '../objects/player';
import {enemy} from '../objects/enemy';
import {move} from './movement';



/**
 * the game approach doesn't need to maintain an array of objects which represent the location
 * there can just be an array of the objects on a layer which contain the information to handle things
 * 
 * the object should store the dimensions of the space it takes up
 * the object itself can handle what it does like drawing directly to canvas or just using existing image
 * that means the object would be specific to canvas 
 * 
 * if it was the base layer it would just be an image that takes up the entire space - maybe?
 * this allows
 * 
 * */

function Entity(width,height){
    this.width = 3;
    this.height = 3;
    this.img = '';


}

window.onload = function(){
    document.addEventListener('keydown',handleKeyPress);
    initializeGame();
    refresh();
}
var currentKeypress = null;
function handleKeyPress(e){
    currentKeypress = e.key;
}
var layers = [
    []
];

//maintain a reference to every object that occupies each pixel
var objectPixelMap = [];
function initializeGame(){
    //put random thing on canvas
    
    layers[0].push(player);
    layers[0].push(enemy);


}
function processMove(data){
    var obj = data.obj,x = data.x,y = data.y, width = data.width, height = data.height,
    handleCollision = data.handleCollision,handleMove = data.handleMove;

    var startingPoint =y * canvasWidth + x;
    var i = 0;
    var l = width * height + startingPoint;
    var yCoord = 0;
    var xCoord = 0;
    for(i = startingPoint; i , i < l ; i++ ){
        var point = startingPoint + xCoord +(yCoord * canvasWidth);
        xCoord ++;
        if(xCoord > width){
            xCoord = 0;
            yCoord ++;
        }
        var target = objectPixelMap[point];
        if(target && target !== obj){
            handleCollision({
                target,
                point
            })
            return;
        }else{
            
        }
    }

    i = 0;l = width * height + startingPoint;yCoord = 0; xCoord = 0;
    for(i = startingPoint; i , i < l ; i++ ){
        point = startingPoint + xCoord +(yCoord * canvasWidth);
        xCoord ++;
        if(xCoord > width){
            xCoord = 0;
            yCoord ++;
        }
        objectPixelMap[point] = obj;
    }
    handleMove(data);
}
//what happens on animation frame
function refresh(){

    //cycle through the things and give the canvas to it
    var l = layers[0].length;
    while(l--){
        layers[0][l].refresh({
            move,
            processMove,
            currentKeypress,
            objectPixelMap,
            ctx,
            screenWidth:canvasWidth,
            screenHeight:canvasHeight
        });  
    }
    requestAnimationFrame(refresh); 
    currentKeypress = null;
}
 