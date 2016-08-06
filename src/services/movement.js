       
function move(x,y,screenWidth,screenHeight,width, height, moves,currentKeypress,pace,inertia){  
    
        var xToUse = x;
        var yToUse = y;
        var movesLength = moves.length;
        //need to keep track of last key pressed and if its different then empty moves
        var  moveTo = function(fnc){
            if(movesLength <inertia){ //inertia
                if(movesLength >0){
                    //do stuff based on last value in moves, not current location
                    xToUse= moves[movesLength -1].x;
                    yToUse = moves[movesLength -1].y;
                }
                var limit = height / pace; //this is dumb
                for(var i = 0; i < limit; i ++){
                    moves.push(fnc(xToUse,yToUse,i));
                }
            }

        };

        if(currentKeypress ==='ArrowDown'){
            //x stays the same and y increase by the height
            //divide height by ?? some magic number 5
            moveTo(function (x,y,i){
                if((i * pace + (y)) + height  < screenHeight)y = i * pace + y;
                return {x:x,y:y};
            });

        }
        if(currentKeypress ==='ArrowUp'){
            moveTo(function (x,y,i){
                if(y-i * pace > 0)y = y-i * pace;
                return {x:x,y:y};
            });
        }
        if(currentKeypress ==='ArrowLeft'){
            moveTo(function (x,y,i){
                if(x - i * pace > 0 )x = x - i * pace ;
                return {x:x,y:y};
            });

        }
        if(currentKeypress ==='ArrowRight'){
            moveTo(function (x,y,i){
                if(x + i * pace + width < screenWidth)x =x + i * pace;
                return {x:x,y:y};
            });
        }
}

export {move};