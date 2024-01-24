img = "";
status = "";



function setup() {


    canvas = createCanvas(640,420);
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}



function preload(){
img = loadImage('dog_cat.jpg');
}

function draw () {
    image(img,0,0,640,420);
    fill("red");
    text("dog",45,75);
    noFill();
    stroke("red");
    rect (30,60,450,350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("red");
    rect(300,90,270,320);
}

function gotResult(error,results)
{
    if (error) {

        console.log(error);
    }
    console.log(results);
}

function modelLoaded() {

    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}