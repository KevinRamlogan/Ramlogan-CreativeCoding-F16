var d=100;
var off=10
function setup(){
  createCanvas(600,600);

}

function draw(){

  ellipse(width/2,height/2,d,d);
  for(var i = 0;i<100;i+=5){
    //ellipse(width/2+off,height/2+off,d,d);
    ellipse(i*off,i*off,d,d);
     off=off+.1



  }
//all the same
//i = i+1
//i+=1
//i++

}
