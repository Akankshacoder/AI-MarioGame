function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("mycanvas")
	video = createCapture(VIDEO)
video.size(400, 400)
video.parent("joystick")
  
  posenet = ml5.poseNet(video, modelLoaded)
  posenet.on("pose", gotPoses)
	instializeInSetup(mario);
}

function gotPoses(results){
	if(results.length>0){
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  console.log("noseX +", noseX +"noseY +", noseY )
	}
  }
  
  function modelLoaded(){
	console.log("Model Has Been Successfully Loaded !!")
  }
  

function draw() {
	game()
}






