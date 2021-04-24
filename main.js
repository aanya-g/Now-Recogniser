function setup(){
    canvas = createCanvas(390, 267);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q9b7Lye4d/model.json" , model_loaded )
}
function draw(){
    image(video, 0, 0, 490, 367);
    classifier.classify(video , got_result)
}
function model_loaded(){
    console.log("model not unloaded succesfully");
}
function got_result(error , result){
    if(error){
        console.error(error);
    }
    else{
    console.log(result);
    
    if(result[0].confidence*100 > 88.0){
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence*100;
    }
    else{
        document.getElementById("object").innerHTML = "PERSON NOT RECOGNISED!";
        document.getElementById("accuracy").innerHTML = "100%";
    }
    }
}