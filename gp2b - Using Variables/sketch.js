/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;

  canyon = {
    x_pos: 100,
    width: 100,
  };

  collectable = {
    x_pos: 100,
    y_pos: 100,
    size: 50,
  };

  cloud = {
    x_pos: 300,
    y_pos: 100,
    size: 100,
  };

  mountain = {
    x_pos: 350,
    y_pos: 432,
    size: 250,
  };
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

  // Canyon
  fill(0, 100, 255);
  rect(canyon.x_pos, 432, canyon.width, 144);
  fill(139, 69, 19);
  rect(canyon.x_pos, 432, canyon.width / 5, 144);
  fill(139, 69, 19);
  rect(canyon.width + canyon.x_pos, 432, canyon.width / 5, 144);

  // Mountain
  triangle(
    mountain.x_pos - mountain.size / 2, mountain.y_pos,
    mountain.x_pos + mountain.size / 2, mountain.y_pos,
    mountain.x_pos, mountain.y_pos - mountain.size
  );
  fill(160, 82, 45);
  triangle(
    mountain.x_pos, mountain.y_pos,
    mountain.x_pos + mountain.size, mountain.y_pos,
    mountain.x_pos + mountain.size / 2, mountain.y_pos - mountain.size / 2
  );
  fill(205, 133, 63);
  triangle(
    mountain.x_pos - mountain.size / 4, mountain.y_pos,
    mountain.x_pos + mountain.size / 2, mountain.y_pos,
    mountain.x_pos + mountain.size / 4, mountain.y_pos - mountain.size / 3
  );

  // Cloud
  let ellipseSize1 = cloud.size;
  let ellipseSize2 = cloud.size / 1.2;
  let distance2 = cloud.size / 3;

  fill(255);
  ellipse(cloud.x_pos, cloud.y_pos, ellipseSize1, ellipseSize1);
  ellipse(cloud.x_pos - distance2, cloud.y_pos, ellipseSize2, ellipseSize2);
  ellipse(cloud.x_pos + distance2, cloud.y_pos, ellipseSize2, ellipseSize2);

  // A Tree
  fill(139, 69, 19);
  rect(treePos_x, treePos_y, 50, 145);

  fill(0, 155, 0);
  ellipse(treePos_x + 25, treePos_y - 12, 100, 100);
  ellipse(treePos_x - 15, treePos_y - 42, 100, 100);
  ellipse(treePos_x - 15, treePos_y - 82, 100, 100);
  ellipse(treePos_x + 25, treePos_y - 112, 100, 100);
  ellipse(treePos_x + 65, treePos_y - 82 , 100, 100);
  ellipse(treePos_x + 65, treePos_y - 42, 100, 100);

  // Apple
  fill(170, 0, 0); // Red for the apple
  ellipse(collectable.x_pos - 6, collectable.y_pos, collectable.size - 22, collectable.size - 20);
  ellipse(
    collectable.x_pos + 6, collectable.y_pos, collectable.size - 22, collectable.size - 20);
  fill(147, 81, 22); // Brown for the stem
  rect(collectable.x_pos - 1, collectable.y_pos - 23, collectable.size - 47, collectable.size - 37);
  fill(0, 100, 0); // Green for the leaf
  triangle(
    collectable.x_pos - 16, collectable.y_pos - 25,
    collectable.x_pos, collectable.y_pos - 15,
    collectable.x_pos, collectable.y_pos - 20);

  // Character
  // character's hair
  fill(0);
  rect(gameChar_x - 12, gameChar_y - 63, 24, 30);

  // character's legs
  push();
  stroke(222, 184, 135);
  strokeWeight(4);
  line(
    gameChar_x - 5, gameChar_y - 20,
    gameChar_x - 5, gameChar_y - 2
  );
  line(
    gameChar_x + 5, gameChar_y - 20,
    gameChar_x + 5, gameChar_y - 2
  );

  // character's arms
  line(
    gameChar_x - 15, gameChar_y - 25,
    gameChar_x - 4, gameChar_y - 35
  );
  line(
    gameChar_x + 15, gameChar_y - 25,
    gameChar_x + 4, gameChar_y - 35
  );
  pop();

  // character's body
  fill(139, 0, 0);
  triangle(
    gameChar_x, gameChar_y - 45,
    gameChar_x + 15, gameChar_y - 15,
    gameChar_x - 15, gameChar_y - 15
  );

  // character's head
  fill(222, 184, 135);
  ellipse(gameChar_x, gameChar_y - 50, 22, 22);

}

function mousePressed()
{
  gameChar_x = mouseX;
  gameChar_y = mouseY;
}
