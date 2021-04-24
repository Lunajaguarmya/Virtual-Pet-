var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

funtion preload(){
  dogImg = loadImage("Images/Dog.png");
  dogImg1 = loadImage("Image/happy dog.png");

}

//Function to set initial enviroment
function setup() {
database = firebase.database();
createCanvas(500,500);

dog = createSprite(250,300,150,150);
dog.addImage(dogImg);
dog.scale = 0.5

foodStock= database.ref('Food');
foodStock.on("value, readStack");
tectSize(20);

}

//function to display UI
function draw(){
  background(46,139,87);

  if(keywentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
    }

    drawSprite();
    fill(255,255,254);
    stroke("black");
    text("Food remaining: "+foodS,170,200);
    textSize(13);
    text("Note: Press UP_ARROW key to feed Drago Milk!", 130,10,300,20);


}

//function to read value from DB 
function readStock(data){
  foodS = data. val();

}

//function to write values in DB 
funciton writeStock(x){


  if (x<=0){
    x=0

}else{
    x=x-1; 

  }
  database.ref('/').update({
    Food:x
  })
}







