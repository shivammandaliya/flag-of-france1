function setup() {
  createCanvas(450, 400);

  //create sprite for flag stripes using function by passing parameters of x position and color
  function createStripes(x, blockColor) {
    var Stripe = createSprite(x , 200 , 75 , 150);
    Stripe.shapeColor = blockColor;
  }
  //Stripe 1 : x-position : 140, color : "blue"
  createStripes(140 , "blue");
  //Stripe 1 : x-position : 215, color : "white"
  createStripes(215 , "white");
  //Stripe 1 : x-position : 290, color : "red"
  createStripes(290 , "red");
}

function draw() {
  background("skyblue");
  drawSprites();
}
