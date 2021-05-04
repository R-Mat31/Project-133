var status = "";
function preload(){
 img = loadImage("Toys.jpg");
}
function setup(){
 canvas = createCanvas(400, 300);
 canvas.position(435, 200);
 objectDetector = ml5.objectDetector("cocossd", model_loaded);
 document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
 image(img, 0, 0, 400, 300);
 if(status != ""){
  for(i = 0; i < objects.length; i++){
   document.getElementById("status").innerHTML = "Status: Objects Detected";
   percentage = floor(objects[i].confidence * 100);
   fill("#ff0000");
   text(objects[i].label + ": " + percentage + "%", objects[i].x, objects[i].y - 5);
   stroke("#ff0000");
   noFill();
   rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  }
 }
}
function back(){
 window.location.href = "index.html";
}
function model_loaded(){
 console.log("Model Loaded");
 status = true;
 objectDetector.detect(img, got_results)
}
var objects = [];
function got_results(error, results){
 if(error){
  console.error(error);
 }
 else{
  console.log(results);
  objects = results;
 }
}