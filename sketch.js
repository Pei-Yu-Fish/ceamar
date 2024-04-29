var radioElement
var captureGraphics
var capture_w=640
var capture_h=480
var span=5

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(capture_w,capture_h);//設定顯示畫面大小
  captureGraphics= createGraphics(capture_w,capture_h)
  captureGraphics.translate(capture_w,0)
  captureGraphics.scale(-1,1)
  capture.hide()
//----------------------
  var radioElement=createRadio();
  radioElement.position(width/2-300,2)
  radioElement.option("方塊")
  radioElement.option("圓圈")
  radioElement.option("亮度")
  radioElement.option("紅底")
  radioElement.style("color","#ffff")
//---------------------------
   
}

function draw() {
  background(0);
  noStroke()
  push()
    translate(width/2-capture_w/2,height/2-capture_h/2)
    captureGraphics.image(capture,0,0) //在(mouseX, mouseY)顯示圖片
    for(var x=0;x<captureGraphics.width;x=x+span){
      for(var y=0;y<captureGraphics.height;y=y+span){
        var pixel=captureGraphics.get(x,y)
        fill(pixel)
        if(removeElement.value()=="方塊"||radioElement.value()==""){
            rect(x,y,span)
        }
        if(removeElement.value()=="圓圈"){
            ellipse(x,y,span)
        }
        if(radioElement.value()=="亮度"){
          bk=(pixel[0]+pixel[1]+pixel[2]/3)
          fill(bk)
          ellipse(x,y,span*map(bk,0,255,0,1))
        }
        if(radioElement.value()=="紅底"){
          colorMode(HSB)
          fill(pixel[0],80,80)
          rectMode(CENTER)
          rect(x,y,span)
          fill(0)
          ellipse(x,y,5)
        }
      }
    }
  pop()
  
}
