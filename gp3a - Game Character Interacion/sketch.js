/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;

  collectable = {x_pos: 100, y_pos: floorPos_y, size: 50, isFound: false};
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

  // collectable
  if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20) {
    collectable.isFound = true;
  }
  if (collectable.isFound == false) {
    fill(170, 0, 0); // Red for the apple
    ellipse(collectable.x_pos - 6, collectable.y_pos, collectable.size - 22, collectable.size - 20);
    ellipse(collectable.x_pos + 6, collectable.y_pos, collectable.size - 22, collectable.size - 20);
    fill(147, 81, 22); // Brown for the stem
    rect(collectable.x_pos - 1, collectable.y_pos - 23, collectable.size - 47, collectable.size - 37);
    fill(0, 100, 0); // Green for the leaf
    triangle(
      collectable.x_pos - 16, collectable.y_pos - 25,
      collectable.x_pos, collectable.y_pos - 15,
      collectable.x_pos, collectable.y_pos - 20);
  }

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
    // character's hair
    fill(0);
    rect(gameChar_x - 12, gameChar_y - 73, 24, 30);

    // character's legs
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x - 5, gameChar_y - 30, gameChar_x - 9, gameChar_y - 12);
    line(gameChar_x + 5, gameChar_y - 30, gameChar_x + 1, gameChar_y - 12);

    // character's right arm
    line(gameChar_x - 15, gameChar_y - 35, gameChar_x - 4, gameChar_y - 45);
    pop();

    // character's body
    fill(139, 0, 0);
    triangle(
      gameChar_x, gameChar_y - 55,
      gameChar_x + 15, gameChar_y - 25,
      gameChar_x - 15, gameChar_y - 25);

    // character's left arm
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x - 4, gameChar_y - 35, gameChar_x + 4, gameChar_y - 45);
    pop();

    // character's head
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 60, 22, 22);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
    // character's hair
    fill(0);
    rect(gameChar_x - 12, gameChar_y - 73, 24, 30);

    // character's legs
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x - 5, gameChar_y - 30, gameChar_x - 1, gameChar_y - 12);
    line(gameChar_x + 5, gameChar_y - 30, gameChar_x + 9, gameChar_y - 12);

    // character's right arm
    line(gameChar_x + 15, gameChar_y - 35, gameChar_x + 4, gameChar_y - 45);
    pop();

    // character's body
    fill(139, 0, 0);
    triangle(
      gameChar_x, gameChar_y - 55,
      gameChar_x + 15, gameChar_y - 25,
      gameChar_x - 15, gameChar_y - 25);

    // character's left arm
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x + 4, gameChar_y - 35, gameChar_x - 4, gameChar_y - 45);
    pop();

    // character's head
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 60, 22, 22);
	}
	else if(isLeft)
	{
		// add your walking left code
    // character's hair
    fill(0);
    rect(gameChar_x - 12, gameChar_y - 63, 24, 30);

    // character's legs
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 9, gameChar_y - 2);
    line(gameChar_x + 5, gameChar_y - 20, gameChar_x + 1, gameChar_y - 2);

    // character's right arm
    line(gameChar_x - 15, gameChar_y - 25, gameChar_x - 4, gameChar_y - 35);
    pop();

    // character's body
    fill(139, 0, 0);
    triangle(
      gameChar_x, gameChar_y - 45,
      gameChar_x + 15, gameChar_y - 15,
      gameChar_x - 15, gameChar_y - 15);

    // character's left arm
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x - 4, gameChar_y - 25, gameChar_x + 4, gameChar_y - 35);
    pop();

    // character's head
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 50, 22, 22);

	}
	else if(isRight)
	{
		// add your walking right code
    // character's hair
    fill(0);
    rect(gameChar_x - 12, gameChar_y - 63, 24, 30);

    // character's legs
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 1, gameChar_y - 2);
    line(gameChar_x + 5, gameChar_y - 20, gameChar_x + 9, gameChar_y - 2);

    // character's right arm
    line(gameChar_x + 15, gameChar_y - 25, gameChar_x + 4, gameChar_y - 35);
    pop();

    // character's body
    fill(139, 0, 0);
    triangle(
      gameChar_x, gameChar_y - 45,
      gameChar_x + 15, gameChar_y - 15,
      gameChar_x - 15, gameChar_y - 15);

    // character's left arm
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x + 4, gameChar_y - 25, gameChar_x - 4, gameChar_y - 35);
    pop();

    // character's head
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 50, 22, 22);
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
    // character's hair
    fill(0);
    rect(gameChar_x - 12, gameChar_y - 73, 24, 30);

    // character's legs
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x - 5, gameChar_y - 30, gameChar_x - 5, gameChar_y - 12);
    line(gameChar_x + 5, gameChar_y - 30, gameChar_x + 5, gameChar_y - 12);

    // character's arms
    line(gameChar_x - 15, gameChar_y - 50, gameChar_x - 4, gameChar_y - 45);
    line(gameChar_x + 15, gameChar_y - 50, gameChar_x + 4, gameChar_y - 45);
    pop();

    // character's body
    fill(139, 0, 0);
    triangle(
      gameChar_x, gameChar_y - 55,
      gameChar_x + 15, gameChar_y - 25,
      gameChar_x - 15, gameChar_y - 25);

    // character's head
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 60, 22, 22);
	}
	else
	{
		// add your standing front facing code

    // character's hair
    fill(0);
    rect(gameChar_x - 12, gameChar_y - 63, 24, 30);

    // character's legs
    push();
    stroke(222, 184, 135);
    strokeWeight(4);
    line(gameChar_x - 5, gameChar_y - 20, gameChar_x - 5, gameChar_y - 2);
    line(gameChar_x + 5, gameChar_y - 20, gameChar_x + 5, gameChar_y - 2);

    // character's arms
    line(gameChar_x - 15, gameChar_y - 25, gameChar_x - 4, gameChar_y - 35);
    line(gameChar_x + 15, gameChar_y - 25, gameChar_x + 4, gameChar_y - 35);
    pop();

    // character's body
    fill(139, 0, 0);
    triangle(
      gameChar_x, gameChar_y - 45,
      gameChar_x + 15, gameChar_y - 15,
      gameChar_x - 15, gameChar_y - 15);

    // character's head
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 50, 22, 22);
	}

  // - Add an if statement within the draw function to detect when the character is  jumping above the ground.
  // - HINT: gameChar_y is less than floorPos_y when this is happening.

  if (gameChar_y < floorPos_y) {
    gameChar_y += 5;
    isFalling = true;
  }
  else {
    isFalling = false;
  }

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

  if (isLeft) {
    gameChar_x -= 5;
  }
  else if (isRight) {
    gameChar_x += 5;
  }
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

  if (keyCode == 65) {
    isLeft = true;
  }
  else if (keyCode == 68) {
    isRight = true;
  }
  else if (keyCode == 87) {
    if (!isFalling) {
      gameChar_y -= 100;
    }
  }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

  if (keyCode == 65) {
    isLeft = false;
  }
  else if (keyCode == 68) {
    isRight = false;
  }
}
