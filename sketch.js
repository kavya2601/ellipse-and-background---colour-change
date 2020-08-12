
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

var a, b;
function setup(){
createCanvas(540,400);

}


function draw(){
   a = map(mouseX , 0 , width , 0 , 150);
   b = map(mouseX , 0 , width , 40 , 300);
   background(133 , b , a);
  fill(200 , b ,a);
  ellipse(mouseX , mouseY, b , b);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}