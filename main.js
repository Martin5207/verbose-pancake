song="";
function preload(){
    song=loadSound("music.e.mp3");
   
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
    poseNet=ml5.poseNet(video,loaded)
    poseNet.on("pose",gotposes)
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play()
}

song="";
LWY=0;
LWX=0;
RWY=0;
RWX=0;
function preload(){
    song=loadSound("music.e.mp3");

}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,loaded)
    poseNet.on("pose",gotposes)
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}

function loaded(){
    console.log("this is ready")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        LWX=results[0].pose.leftWrist.x;
        LWY=results[0].pose.leftWrist.y;
        
        RWX=results[0].pose.rightWrist.x;
        RWY=results[0].pose.rightWrist.y;
        
        console.log("leftwristX="+LWX+"leftWristY="+LWY)
        console.log("righttwristX="+RWX+"rightWristY="+RWY)

    
    
    }
}