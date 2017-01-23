function setup() {
    createCanvas(windowWidth, windowHeight);
    
    mic = new p5.AudioIn();
    mic.start();    
    
    frameRate(20);
}

function draw() {
    var volume = mic.getLevel();
    var newMax = 1;
    
    background("#D7CEBB");
    translate(0,height/2);
    
    noStroke();
    fill("#6D98AC");
    
    var x = map(volume,0,1,0,height/2);
        
    for(var a=100; a<width-100; a+=20) {
				push();
                rect (a,0,10,random(-x,x));
				pop();
			}
}
