var song
var songIsplay=false
var amp

function preload(){
  song=loadSound("Forever Young - Otis McDonald.mp3");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(160,210,239,100)
  textSize(50)
  //text(mouseX,50,50)//在座標(50,50)顯示滑鼠X軸座標
   text("x:"+mouseX+",y:"+mouseY,50,50)
  stroke(0, 0, 0, 0)
  push()
  fill(255,192,203)
  ellipse(900,300,500)//臉
  fill(0,0,0)
  ellipse(850,220,55,140)//左黑眼球(外)
  ellipse(950,220,55,140)//右黑眼球(外)
  fill(48,87,164,200)
  ellipse(850,220,40, 90)//左眼藍
  ellipse(950,220,40, 90)//右眼藍
  fill(0,0,0)
  ellipse(850, 215, 45, 75)//左黑眼球(內)
  ellipse(950, 215, 45, 75)//右黑眼球(內)
  fill(255,255,255)
  ellipse(850+mouseX/100,190+mouseY/60,31,50)//左白眼球
  ellipse(950+mouseX/100,190+mouseY/60,31,50) //右白眼球
  fill(255,105,180,120)
  ellipse(775, 300, 70,40)//左腮紅
  ellipse(1025, 300, 70,40)//右腮紅
  stroke(0,0,0)

  fill(255,0,0)
  if(mouseIsPressed)
  {
    arc(900,315,100,50,0,180)
  }
  else
  {
    arc(900,315,100,90,0,180)
  }

  noFill()
  pop()
}

function mouseIsPressed()
{
  if(!songIsplay){
   song.play()
   songIsplay=true
   amp=new p5.Amplitude()
   }
 else{
   song.pause()
   songIsplay=false
   }

}