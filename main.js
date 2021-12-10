noseX=0;
noseY=0;
function preload(){
clownnose=loadImage('https://i.postimg.cc/cC723gDR/Clown-Nose.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);
    }
}
function draw(){
image(video,0,0,300,300);
image(clownnose, noseX, noseY, 30, 30);
}
function takesnapshot(){
    save('myFilterImage.png');
}
