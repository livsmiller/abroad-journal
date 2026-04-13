var pageIndex = 0;
let button;
let img;  
let img2;  
let img3;   
let img4;   
let img5;  
let img6;   
let img7;   

function preload() {
  img  = loadImage('newmap.png');
  img2 = loadImage('florence1.png');
  img3 = loadImage('rome1.png');
  img4 = loadImage('rome2.png');
  img5 = loadImage('rome3.png');
  img6 = loadImage('rome4.png');
  img7 = loadImage('rome5.png');
}

function setup() {
  createCanvas(600, 400);

  button = createButton("Back to Map!");
  button.position(10, 10);
  button.mousePressed(goToPageOne);
  button.hide();
}

function draw() {
  background(255);

  if (pageIndex == 0) {
    pageOne();
  } else if (pageIndex == 1) {
    pageTwo();
  } else if (pageIndex == 2) {
    pageThree();
  } else if (pageIndex == 3) {
    pageFour();
  } else if (pageIndex == 4) {
    pageFive();
  } else if (pageIndex == 5) {
    pageSix();
  } else if (pageIndex == 6) {
    pageSeven();
  } else if (pageIndex == 7) {
    pageEight();
  } else if (pageIndex == 8) {
    pageNine();
  } else if (pageIndex == 9) {
    pageTen();
  } else if (pageIndex == 10) {
    pageEleven();
  } else if (pageIndex == 11) {
    pageTwelve();
  }
}

function mousePressed() {
  if (pageIndex == 0) {

    //FLORENCE
    if (mouseX > 290 && mouseX < 310 &&
        mouseY > 235 && mouseY < 255) {
      pageIndex = 1;
    }

    //ROME
    if (mouseX > 303 && mouseX < 313 &&
        mouseY > 275 && mouseY < 285) {
      pageIndex = 2;
    }

    //SORRENTO
    if (mouseX > 330 && mouseX < 340 &&
        mouseY > 298 && mouseY < 308) {
      pageIndex = 3;
    }

    //MALTA
    if (mouseX > 330 && mouseX < 340 &&
        mouseY > 375 && mouseY < 385) {
      pageIndex = 4;
    }

    //CROATIA
    if (mouseX > 373 && mouseX < 383 &&
        mouseY > 255 && mouseY < 265) {
      pageIndex = 5;
    }

    //MADRID
    if (mouseX > 140 && mouseX < 150 &&
        mouseY > 40 && mouseY < 50) {
      pageIndex = 6;
    }

    //PARIS
    if (mouseX > 215 && mouseX < 225 &&
        mouseY > 140 && mouseY < 150) {
      pageIndex = 7;
    }

    //BARCELONA
    if (mouseX > 180 && mouseX < 190 &&
        mouseY > 263 && mouseY < 273) {
      pageIndex = 8;
    }

    //MADRID
    if (mouseX > 110 && mouseX < 120 &&
        mouseY > 260 && mouseY < 270) {
      pageIndex = 9;
    }

    //ANDORRA
    if (mouseX > 160 && mouseX < 170 &&
        mouseY > 245 && mouseY < 255) {
      pageIndex = 10;
    }

    //MOROCCO
    if (mouseX > 60 && mouseX < 70 &&
        mouseY > 345 && mouseY < 355) {
      pageIndex = 11;
    }
  }
}

//MAP HOMEPAGE
function pageOne() {
  image(img, 0, 0, width, height);
  button.hide();

  //FLORENCE
  fill('red');
  rect(290, 235, 10, 10);

  //ROME
  fill('orange');
  rect(303, 275, 10, 10);

  //SORRENTO
  fill('yellow');
  rect(330, 298, 10, 10);

  //MALTA
  fill('green');
  rect(330, 375, 10, 10);

  //CROATIA
  fill('blue');
  rect(373, 255, 10, 10);

  //MADRID
  fill('indigo');
  rect(140, 40, 10, 10);

  //PARIS
  fill('purple');
  rect(215, 140, 10, 10);

  //BARCELONA
  fill('pink');
  rect(180, 263, 10, 10);

  //MADRID
  fill('brown');
  rect(110, 260, 10, 10);

  //ANDORRA
  fill('black');
  rect(160, 245, 10, 10);

  //MOROCCO
  fill('white');
  rect(60, 345, 10, 10);
}

//FLORENCE
function pageTwo() {
  image(florenceImages[florenceIndex], 0, 0, width, height);
  button.show();
}

//ROME
function pageThree() {
  image(img3, 0, 0, width, height);
  button.show();
}

//SORRENTO
function pageFour() {
  image(img4, 0, 0, width, height);
  button.show();
}

//MALTA
function pageFive() {
  image(img5, 0, 0, width, height);
  button.show();
}

//CROATIA
function pageSix() {
  image(img6, 0, 0, width, height);
  button.show();
}

//MADRID
function pageSeven() {
  image(img7, 0, 0, width, height);
  button.show();
}

//PARIS
function pageEight() {
  image(img2, 0, 0, width, height);
  button.show();
}

//BARCELONA
function pageNine() {
  image(img3, 0, 0, width, height);
  button.show();
}

//MADRID
function pageTen() {
  image(img4, 0, 0, width, height);
  button.show();
}

//ANDORRA
function pageEleven() {
  image(img5, 0, 0, width, height);
  button.show();
}

//MOROCCO
function pageTwelve() {
  image(img6, 0, 0, width, height);
  button.show();
}

function goToPageOne() {
  pageIndex = 0;
}