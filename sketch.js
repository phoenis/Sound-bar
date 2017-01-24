function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    
    mic = new p5.AudioIn();
    mic.start();    
    
    frameRate(20);
}

function draw() {
    var volume = mic.getLevel();
    var newMax = 1;
    
    background(29,9.3,88.6);
    translate(0,height/2);
    
    var x = map(volume,0,1,0,height/2);
        
    noStroke();
    fill(199,x,67.5);
    
    for(var a=width/8; a<width-width/8; a+=20) {
        rect (a,0,10,random(-x,x));
    }     
    
    fill(199,100,67.5);
    textFont("Amatic SC");
    if (width<500){
        textSize(width/10);
    } else {
        textSize(50);
    }
    textAlign(CENTER);
    text("Sing to see the movement!",width/2,height/2.5);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}
