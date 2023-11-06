status1= ""
objects=[]
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    Object_Detector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: detecting objects";
}

function modelLoaded(){
    console.log(" Model Loaded");
    status1= true;
    Object_Detector.detect(img, gotResults);

}

function gotResults(error,results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        objects=results;``
    }
}
function preload(){
    img= loadImage("dog_cat.jpg");

}

function draw(){
    image(img,0,0,640,420);
    if(status1!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects detected";
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}