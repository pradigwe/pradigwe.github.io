function setup() {
    // Creates a canvas 600 pixels wide
    // and 400 pixels high.
    createCanvas(600, 400);
}

let cloudOneX = 60;

function draw() {
    //blue background
    background(135, 206, 235);

    // sun in top right corner
    fill("yellow"); //yellow  
    stroke("orange"); //orange outline 
    strokeWeight(5); //large outline    
    circle(550,50,100);

    // clouds in sky
    fill(255);
    stroke('grey');
    strokeWeight(1);
    ellipse(cloudOneX,50,80,40);
    ellipse(cloudOneX - 60, 100, 60, 20);
    ellipse(cloudOneX + 150, 80, 150, 30);

    //sets the x coordinate to the frame count
    //resets at left edge
    cloudOneX = frameCount % width;

    //grass on bottom half
    stroke(0);
    strokeWeight(1);
    fill("green");
    rect(0,250,600,150);

    // emojis
    textSize(75);
    text("🌱", 100, 250);
    text('🦋', mouseX, mouseY);
}
