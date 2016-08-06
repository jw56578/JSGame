var player = {
    width:50,
    height:50,
    img:new Image(),
    x:50,
    y:50,
    moves:[],
    refresh:function(data){ // should this thing recieve the canvas?
        var ctx = data.ctx;
        var screenWidth = data.screenWidth;
        var screenHeight = data.screenHeight;
        var objectPixelmap  =data.objectPixelmap;
        var currentKeypress = data.currentKeypress;
        var pace = 5;
        //what logic is needed to make movement to another location smooth, not choppy
        //one press in any direction needs to move it a hard coded distance, but the thing must gradually move there
        //divide distance into 3 values and put in stack, pop off stack on each refresh

        if(!this.img.src){
            this.img.src = 'player.png';
            this.img.onload = function(){
                ctx.drawImage(this.img, this.x, this.y);
            }.bind(this)
        }

       data.move(this.x,this.y,screenWidth,screenHeight,this.width, this.height, this.moves,currentKeypress,pace,10);

        if(this.moves.length > 0){
            
            var move = this.moves.shift();
            data.processMove({
                obj:this,
                ctx:ctx,
                x:move.x,
                y:move.y,
                width:this.width,
                height:this.height,
                handleCollision:this.handleCollision.bind(this),
                handleMove:this.handleMove.bind(this)
            });
            
        }

    },
    handleMove:function(data){
        var ctx = data.ctx;
        ctx.clearRect(data.x,data.y, data.width, data.height);
        this.x = data.x;
        this.y = data.y;
        ctx.drawImage(this.img, data.x,data.y);
    },
    handleCollision:function(info){


    }
};

export {player};