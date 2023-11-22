/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	// A Cloud
  fill(255)
  ellipse(215, 160, 100, 100);
  ellipse(175, 160, 70, 70);
  ellipse(255, 160, 70, 70);
  ellipse(150, 160, 50, 50);
  ellipse(280, 160, 50, 50);


	noStroke();
	fill(255);
	text("cloud", 200, 100);

	// A Mountain
  fill(139, 69, 19);
  triangle(500, 432, 700, 432, 600, 100);

  fill(160, 82, 45);
  triangle(600, 432, 800, 432, 700, 200);

  fill(205, 133, 63);
  triangle(550, 432, 700, 432, 620, 300);

  // Snow
  fill(255);
  triangle(568, 200, 600, 100, 632, 200);

  triangle(676, 250, 700, 200, 724, 250);

  triangle(608,320, 620, 300, 633, 320);

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	// A Tree

  fill(139, 69, 19);
  rect(840, 292, 50, 140);

  fill(0, 155, 0);
  ellipse(865, 280, 100, 100);
  ellipse(825, 250, 100, 100);
  ellipse(825, 210, 100, 100);
  ellipse(865, 180, 100, 100);
  ellipse(905, 210, 100, 100);
  ellipse(905, 250, 100, 100);

	noStroke();
	fill(255);
	text("tree", 800, 346);

  // A Canyon
  fill(0, 100, 255);
  rect(150, 432, 100, 144);

  fill(139, 69, 19);
  rect(150, 432, 20, 144);

  fill(139, 69, 19);
  rect(230, 432, 20, 144);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

  // Apple
  fill(170, 0, 0); // Red for the apple
  ellipse(360, 425, 28, 30); // Draw the apple shape
  ellipse(372, 425, 28, 30);

  fill(147, 81, 22); // Brown for the stem
  rect(364, 402, 3, 13); // Draw the stem

  fill(0, 100, 0); // Green for the leaf
  triangle(350, 400, 367, 410, 367, 405); // Draw the leaf

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
  
