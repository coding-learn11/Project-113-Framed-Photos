function preload() {

}

function setup() {
    canvas = createCanvas(660, 480);
    canvas.position(110, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 30, 30, 600, 400);
    circle(30, 30, 20);
    circle(30, 50, 20);
    circle(30, 70, 20);
    circle(30, 90, 20);
    circle(30, 110, 20);
    circle(30, 130, 20);
    circle(30, 150, 20);
    circle(30, 170, 20);
    circle(30, 190, 20);
    circle(30, 210, 20);
    circle(30, 230, 20);
    circle(30, 250, 20);
    circle(30, 270, 20);
    circle(30, 290, 20);
    circle(30, 310, 20);
    circle(30, 330, 20);
    circle(30, 350, 20);
    circle(30, 370, 20);
    circle(30, 390, 20);
    circle(30, 410, 20);
    circle(30, 430, 20);
    circle(30, 430, 20);
    circle(50, 430, 20);
    circle(70, 430, 20);
    circle(90, 430, 20);
    circle(110, 430, 20);
    circle(130, 430, 20);
    circle(150, 430, 20);
    circle(170, 430, 20);
    circle(190, 430, 20);
    circle(210, 430, 20);
    circle(230, 430, 20);
    circle(250, 430, 20);
    circle(270, 430, 20);
    circle(290, 430, 20);
    circle(310, 430, 20);
    circle(330, 430, 20);
    circle(350, 430, 20);
    circle(370, 430, 20);
    circle(390, 430, 20);
    circle(410, 430, 20);
    circle(430, 430, 20);
    circle(450, 430, 20);
    circle(470, 430, 20);
    circle(490, 430, 20);
    circle(510, 430, 20);
    circle(530, 430, 20);
    circle(550, 430, 20);
    circle(570, 430, 20);
    circle(590, 430, 20);
    circle(610, 430, 20);
    circle(630, 430, 20);
    circle(630, 410, 20);
    circle(630, 390, 20);
    circle(630, 370, 20);
    circle(630, 350, 20);
    circle(630, 330, 20);
    circle(630, 310, 20);
    circle(630, 290, 20);
    circle(630, 270, 20);
    circle(630, 250, 20);
    circle(630, 230, 20);
    circle(630, 210, 20);
    circle(630, 190, 20);
    circle(630, 170, 20);
    circle(630, 150, 20);
    circle(630, 130, 20);
    circle(630, 110, 20);
    circle(630, 90, 20);
    circle(630, 70, 20);
    circle(630, 50, 20);
    circle(630, 30, 20);
    circle(610, 30, 20);
    circle(590, 30, 20);
    circle(570, 30, 20);
    circle(550, 30, 20);
    circle(530, 30, 20);
    circle(510, 30, 20);
    circle(490, 30, 20);
    circle(470, 30, 20);
    circle(450, 30, 20);
    circle(430, 30, 20);
    circle(410, 30, 20);
    circle(390, 30, 20);
    circle(370, 30, 20);
    circle(350, 30, 20);
    circle(330, 30, 20);
    circle(310, 30, 20);
    circle(290, 30, 20);
    circle(270, 30, 20);
    circle(250, 30, 20);
    circle(230, 30, 20);
    circle(210, 30, 20);
    circle(190, 30, 20);
    circle(170, 30, 20);
    circle(150, 30, 20);
    circle(130, 30, 20);
    circle(110, 30, 20);
    circle(90, 30, 20);
    circle(70, 30, 20);
    circle(50, 30, 20);
   
    rect(0, 0, 5, 460);
    rect(0, 0, 660, 5);
    rect(655, 0, 5, 460);
    rect(0, 460, 660, 5)
}

function take_snapshot() {
    save('bordered_photo.png')
}