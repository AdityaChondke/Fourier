let time = 0;
let wave =[];

let slider;
let func = 'sin';

function setup() {
    createCanvas(600, 400);
    slider = createSlider(1, 100, 1);
    
    createButton('sin').mousePressed(() => {
        func = 'sin';
    });
    createButton('cos').mousePressed(() => {
        func = 'cos';
    });
    createButton('noise').mousePressed(() => {
        func = 'noise';
    });
    createButton('tan').mousePressed(() => {    
        func = 'tan';
    });
}

function draw() {
    background(0);
    translate(200, 200);
   
    let x= 0;
    let y= 0;
    for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    let radius = 75 * (4 / (n * PI) );
    if ( func === 'cos') {
        x += radius * sin(n * time);
        y += radius * cos(n * time);
    }
    if ( func ==='sin') {
        x += radius * cos(n * time);
        y += radius * sin(n * time);
    }
    if ( func === 'tan') {
        x += radius * tan(n * time);
        y += radius * tan(n * time);
    }
    if ( func === 'noise') {
        x += radius * noise(n * time);
        y += radius * noise(n * time);
    }


    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
   
    stroke(255);
    line(prevx, prevy, x, y); 

}
wave.unshift(y);
translate(200, 0);
line(x - 200, y, 0, wave[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();
    translate(0, 150);
    textSize(28);
    text(slider.value(), 10, 30);
    if (wave.length > 500) {
        wave.pop();
    }
    time += 0.05;
}