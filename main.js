function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas);
    synth =window.speechSynthesis;    
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
}
function draw(){
    strokeWeight(7);
    stroke("#0c0e4a");
     if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
     }

}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    console.log(results);
    document.getElementById("yoursketch").innerHTML='Your Sketch: '+results[0].label;
    document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence*100) +"%";
    utterThis=new SpeechSynthesisUtterance(results[0].yoursketch);
    synth.speak(utterThis);
}yoursketch
function clearCanvas(){
    background("white")
}