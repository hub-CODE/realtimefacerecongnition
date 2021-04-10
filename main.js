function setup(){
    canvas = createCanvas(300, 170);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R_Cwavxqa//model.json',modelLoaded);
   }
   
   function modelLoaded(){
       console.log('Model Loaded!');
   }
   
   function draw(){
      image(video, 0, 0, 250,200);
      classifier.classify(video, gotResult); 
   }
   
   function gotResult(error, results){
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    document.getElementbyId("result_object_name").innerHTML = results[0].label;
     document.getElementbyId("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
   }