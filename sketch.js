var pageIndex = 0;
let button;
let pin;
let img;
let bgImg;

let mapScale;
let mapX;
let mapY;

// FLORENCE
let florencePhotos = [];
let florenceIndex = 0;

// ROME
let romePhotos = [];
let romeIndex = 0;

// SORRENTO
let sorrentoPhotos = [];
let sorrentoIndex = 0;

// MALTA
let maltaPhotos = [];
let maltaIndex = 0;

// CROATIA
let croatiaPhotos = [];
let croatiaIndex = 0;

// DUBLIN
let dublinPhotos = [];
let dublinIndex = 0;

// PARIS
let parisPhotos = [];
let parisIndex = 0;

// BARCELONA
let barcelonaPhotos = [];
let barcelonaIndex = 0;

// MADRID
let madridPhotos = [];
let madridIndex = 0;

// ANDORRA
let andorraPhotos = [];
let andorraIndex = 0;

// MOROCCO
let moroccoPhotos = [];
let moroccoIndex = 0;

function preload() {
  pin = loadImage('pin.png');
  img = loadImage('newmap.png');
  bgImg = img;

  florencePhotos[0] = loadImage('florence1.png');
  florencePhotos[1] = loadImage('florence2.png');
  florencePhotos[2] = loadImage('florence3.png');
  florencePhotos[3] = loadImage('florence4.png');
  florencePhotos[4] = loadImage('florence5.png');

  romePhotos[0] = loadImage('rome1.png');
  romePhotos[1] = loadImage('rome2.png');
  romePhotos[2] = loadImage('rome3.png');
  romePhotos[3] = loadImage('rome4.png');
  romePhotos[4] = loadImage('rome5.png');

  sorrentoPhotos[0] = loadImage('sorrento1.png');
  sorrentoPhotos[1] = loadImage('sorrento2.png');
  sorrentoPhotos[2] = loadImage('sorrento3.png');
  sorrentoPhotos[3] = loadImage('sorrento4.png');
  sorrentoPhotos[4] = loadImage('sorrento5.png');

  maltaPhotos[0] = loadImage('malta1.png');
  maltaPhotos[1] = loadImage('malta2.png');
  maltaPhotos[2] = loadImage('malta3.png');
  maltaPhotos[3] = loadImage('malta4.png');
  maltaPhotos[4] = loadImage('malta5.png');

  croatiaPhotos[0] = loadImage('croatia1.png');
  croatiaPhotos[1] = loadImage('croatia2.png');
  croatiaPhotos[2] = loadImage('croatia3.png');
  croatiaPhotos[3] = loadImage('croatia4.png');
  croatiaPhotos[4] = loadImage('croatia5.png');

  dublinPhotos[0] = loadImage('dublin1.png');
  dublinPhotos[1] = loadImage('dublin2.png');
  dublinPhotos[2] = loadImage('dublin3.png');
  dublinPhotos[3] = loadImage('dublin4.png');
  dublinPhotos[4] = loadImage('dublin5.png');

  parisPhotos[0] = loadImage('paris1.png');
  parisPhotos[1] = loadImage('paris2.png');
  parisPhotos[2] = loadImage('paris3.png');
  parisPhotos[3] = loadImage('paris4.png');
  parisPhotos[4] = loadImage('paris5.png');

  barcelonaPhotos[0] = loadImage('barcelona1.png');
  barcelonaPhotos[1] = loadImage('barcelona2.png');
  barcelonaPhotos[2] = loadImage('barcelona3.png');
  barcelonaPhotos[3] = loadImage('barcelona4.png');
  barcelonaPhotos[4] = loadImage('barcelona5.png');

  madridPhotos[0] = loadImage('madrid1.png');
  madridPhotos[1] = loadImage('madrid2.png');
  madridPhotos[2] = loadImage('madrid3.png');
  madridPhotos[3] = loadImage('madrid4.png');
  madridPhotos[4] = loadImage('madrid5.png');

  andorraPhotos[0] = loadImage('andorra1.png');
  andorraPhotos[1] = loadImage('andorra2.png');
  andorraPhotos[2] = loadImage('andorra3.png');
  andorraPhotos[3] = loadImage('andorra4.png');
  andorraPhotos[4] = loadImage('andorra5.png');

  moroccoPhotos[0] = loadImage('morocco1.png');
  moroccoPhotos[1] = loadImage('morocco2.png');
  moroccoPhotos[2] = loadImage('morocco3.png');
  moroccoPhotos[3] = loadImage('morocco4.png');
  moroccoPhotos[4] = loadImage('morocco5.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton("Back to Map!");
  button.position(10, 10);
  button.mousePressed(goToPageOne);
  button.hide();

  styleButton();
}

function styleButton() {
  button.style("font-family", "Trebuchet MS, Verdana, sans-serif");
  button.style("font-size", "18px");
  button.style("font-weight", "bold");
  button.style("text-transform", "uppercase");
  button.style("letter-spacing", "1px");

  button.style("color", "white");
  button.style("background-color", "rgb(79,124,130)");

  button.style("border", "none");
  button.style("border-radius", "14px");
  button.style("padding", "12px 20px");

  button.style("box-shadow", "0 4px 10px rgba(0,0,0,0.2)");
  button.style("cursor", "pointer");
}

function draw() {
  background(255);

  if (pageIndex == 0) pageOne();
  else if (pageIndex == 1) pageTwo();
  else if (pageIndex == 2) pageThree();
  else if (pageIndex == 3) pageFour();
  else if (pageIndex == 4) pageFive();
  else if (pageIndex == 5) pageSix();
  else if (pageIndex == 6) pageSeven();
  else if (pageIndex == 7) pageEight();
  else if (pageIndex == 8) pageNine();
  else if (pageIndex == 9) pageTen();
  else if (pageIndex == 10) pageEleven();
  else if (pageIndex == 11) pageTwelve();
}

function pageOne() {
  button.hide();

  let design_w = 600;
  let design_h = 400;

  mapScale = min(width / design_w, height / design_h);

  let drawW = design_w * mapScale;
  let drawH = design_h * mapScale;

  mapX = (width - drawW) / 2;
  mapY = (height - drawH) / 2;

  image(bgImg, mapX, mapY, drawW, drawH);

  drawPin(290, 235, "Florence, Italy");
  drawPin(320, 275, "Rome, Italy");
  drawPin(350, 305, "Sorrento, Italy");
  drawPin(340, 380, "Malta");
  drawPin(373, 245, "Dubrovnik, Croatia");
  drawPin(115, 40, "Dublin, Ireland");
  drawPin(215, 140, "Paris, France");
  drawPin(180, 263, "Barcelona, Spain");
  drawPin(90, 260, "Madrid, Spain");
  drawPin(163, 248, "Andorra");
  drawPin(30, 345, "Marrakech, Morocco");
}

function drawPin(x, y, label) {
  let pinX = mapX + x * mapScale;
  let pinY = mapY + y * mapScale;
  let size = 12 * mapScale;

  let hovering =
    mouseX > pinX - size / 2 &&
    mouseX < pinX + size / 2 &&
    mouseY > pinY - size &&
    mouseY < pinY;

  imageMode(CENTER);

  if (hovering) {
    image(pin, pinX, pinY, size + 3, size + 3);

    textAlign(CENTER, CENTER);
    textSize(10 * mapScale);
    textStyle(BOLD);
    textFont("Trebuchet MS");

    label = label.toUpperCase();

    let boxWidth = textWidth(label) + 40 * mapScale;

    fill(79, 124, 130);
    noStroke();
    rectMode(CENTER);
    rect(pinX, pinY - 34 * mapScale, boxWidth, 38 * mapScale, 14 * mapScale);

    fill(255);
    text(label, pinX, pinY - 34 * mapScale);
  } else {
    image(pin, pinX, pinY, size, size);
  }

  imageMode(CORNER);
}

function pinClicked(x, y) {
  let pinX = mapX + x * mapScale;
  let pinY = mapY + y * mapScale;
  let size = 35 * mapScale;

  return (
    mouseX > pinX - size / 2 &&
    mouseX < pinX + size / 2 &&
    mouseY > pinY - size / 2 &&
    mouseY < pinY + size / 2
  );
}

function mousePressed() {
  if (pageIndex == 0) {
    if (pinClicked(290, 235)) {
      pageIndex = 1;
      florenceIndex = 0;
    }

    if (pinClicked(320, 275)) {
      pageIndex = 2;
      romeIndex = 0;
    }

    if (pinClicked(350, 305)) {
      pageIndex = 3;
      sorrentoIndex = 0;
    }

    if (pinClicked(340, 380)) {
      pageIndex = 4;
      maltaIndex = 0;
    }

    if (pinClicked(373, 245)) {
      pageIndex = 5;
      croatiaIndex = 0;
    }

    if (pinClicked(115, 40)) {
      pageIndex = 6;
      dublinIndex = 0;
    }

    if (pinClicked(215, 140)) {
      pageIndex = 7;
      parisIndex = 0;
    }

    if (pinClicked(180, 263)) {
      pageIndex = 8;
      barcelonaIndex = 0;
    }

    if (pinClicked(90, 260)) {
      pageIndex = 9;
      madridIndex = 0;
    }

    if (pinClicked(163, 248)) {
      pageIndex = 10;
      andorraIndex = 0;
    }

    if (pinClicked(30, 345)) {
      pageIndex = 11;
      moroccoIndex = 0;
    }
  } else {
    cyclePhotos();
  }
}

function cyclePhotos() {
  if (pageIndex == 1)
    florenceIndex = (florenceIndex + 1) % florencePhotos.length;

  else if (pageIndex == 2)
    romeIndex = (romeIndex + 1) % romePhotos.length;

  else if (pageIndex == 3)
    sorrentoIndex = (sorrentoIndex + 1) % sorrentoPhotos.length;

  else if (pageIndex == 4)
    maltaIndex = (maltaIndex + 1) % maltaPhotos.length;

  else if (pageIndex == 5)
    croatiaIndex = (croatiaIndex + 1) % croatiaPhotos.length;

  else if (pageIndex == 6)
    dublinIndex = (dublinIndex + 1) % dublinPhotos.length;

  else if (pageIndex == 7)
    parisIndex = (parisIndex + 1) % parisPhotos.length;

  else if (pageIndex == 8)
    barcelonaIndex = (barcelonaIndex + 1) % barcelonaPhotos.length;

  else if (pageIndex == 9)
    madridIndex = (madridIndex + 1) % madridPhotos.length;

  else if (pageIndex == 10)
    andorraIndex = (andorraIndex + 1) % andorraPhotos.length;

  else if (pageIndex == 11)
    moroccoIndex = (moroccoIndex + 1) % moroccoPhotos.length;
}

function fitImage(photo) {
  let imgRatio = photo.width / photo.height;
  let canvasRatio = width / height;

  let drawW;
  let drawH;

  if (canvasRatio > imgRatio) {
    drawH = height;
    drawW = height * imgRatio;
  } else {
    drawW = width;
    drawH = width / imgRatio;
  }

  let drawX = (width - drawW) / 2;
  let drawY = (height - drawH) / 2;

  image(photo, drawX, drawY, drawW, drawH);
}

function fitImageLeft(photo) {
  let imgRatio = photo.width / photo.height;
  let canvasRatio = width / height;

  let drawW;
  let drawH;

  if (canvasRatio > imgRatio) {
    drawH = height;
    drawW = height * imgRatio;
  } else {
    drawW = width;
    drawH = width / imgRatio;
  }

  let drawX = 0;
  let drawY = (height - drawH) / 2;

  image(photo, drawX, drawY, drawW, drawH);
}

function fitImageRight(photo) {
  let imgRatio = photo.width / photo.height;
  let canvasRatio = width / height;

  let drawW;
  let drawH;

  if (canvasRatio > imgRatio) {
    drawH = height;
    drawW = height * imgRatio;
  } else {
    drawW = width;
    drawH = width / imgRatio;
  }

  let drawX = width - drawW;
  let drawY = (height - drawH) / 2;

  image(photo, drawX, drawY, drawW, drawH);
}

function pageTwo() {
  fitImage(florencePhotos[florenceIndex]);
  button.show();
}

function pageThree() {
  fitImage(romePhotos[romeIndex]);
  button.show();
}

function pageFour() {
  fitImage(sorrentoPhotos[sorrentoIndex]);
  button.show();
}

function pageFive() {
  fitImage(maltaPhotos[maltaIndex]);
  button.show();
}

function pageSix() {
  fitImage(croatiaPhotos[croatiaIndex]);
  button.show();
}

function pageSeven() {
  fitImageLeft(dublinPhotos[dublinIndex]);
  button.show();
}

function pageEight() {
  fitImageLeft(parisPhotos[parisIndex]);
  button.show();
}

function pageNine() {
  fitImageRight(barcelonaPhotos[barcelonaIndex]);
  button.show();
}

function pageTen() {
  fitImage(madridPhotos[madridIndex]);
  button.show();
}

function pageEleven() {
  fitImage(andorraPhotos[andorraIndex]);
  button.show();
}

function pageTwelve() {
  fitImage(moroccoPhotos[moroccoIndex]);
  button.show();
}

function goToPageOne() {
  pageIndex = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}