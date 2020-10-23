var ball,position,database;

function setup(){

    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

var ballposition=database.ref('ball/position')
ballposition.on("value",readPosition,showError)   


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
    position=data.val()
    ball.y=position.y
    ball.x=position.x
    //ballposition.x=position.x
   // ballposition.y=position.y
} 

function showError(){
    console.log("there is a error")
}
function writePosition(x,y){
  database.ref('ball/position').set({
      x:position.x+x,
      y:position.y+y
  })

    
}
