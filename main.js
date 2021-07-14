img = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(525, 150);
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    objectdetector.detect(img, gotResults)
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 400, 400);
    fill("magenta");
    text("Dog", 45, 75);
    noFill();
    stroke("springgreen");
    rect(30, 60, 250, 250);

    fill("magenta");
    text("Cat", 160, 100);
    noFill();
    stroke("springgreen");
    rect(150, 80, 270, 320);

    fill("darkorange");
    text("Bowl", 180, 320);
    noFill();
    stroke("greenyellow");
    rect(175, 300, 100, 125);
}