var enemy = {
    width:50,
    height:50,
    img:new Image(),
    x:150,
    y:150,
    moves:[],
    directions:['ArrowDown','ArrowLeft','ArrowRight','ArrowUp'],
    steps:0,
    direction:'',
    refresh:function(data){ 
        var ctx = data.ctx;
        var screenWidth = data.screenWidth;
        var screenHeight = data.screenHeight;
        var pace = 2;
        
        if(!this.img.src){
            this.img.src = 'enemy.png';
            this.img.onload = function(){
                ctx.drawImage(this.img, this.x, this.y);
            }.bind(this)
        }
     
        if(this.steps === 0){
            this.steps = 100;
            var randomIndex = Math.floor(Math.random() * (4));
            this.direction = this.directions[randomIndex];
        }
        data.move(this.x,this.y,screenWidth,screenHeight,this.width, this.height, this.moves,this.direction,pace,100);

        this.steps --;
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


            //swith the image to another for walking
            ctx.clearRect(this.x,this.y, this.width, this.height);
            var move = this.moves.shift();
            this.x = move.x;
            this.y = move.y;
            ctx.drawImage(this.img, move.x,move.y);
        }else{
            //switch to image of not walking
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

export {enemy};
