//Assignment 9.29 Kevin Ramlogan

var d=30
var off=30
var padding = 1
var c = 1
var pos =0
function setup(){
  createCanvas(600,600);
  stroke(255);

 
}


function draw(){
for(var r=0;r<13;r+=1){
	
  //red
  for(var c = 0;c<5;c++){
    fill(255,0,0);
   
    rect((c*off) +padding,(r*off)+padding,d,d);
    fill(255);
    rect(90,360,60,30);

}
 //yellow
for(var c =5;c<10;c++){
	fill(255,255,0);
 	rect((c*off)+padding, (r*off)+padding,d,d);
 	
 	fill(255);
    rect(240,360,60,30);

  }
//blue
for(var c =10;c<15;c++){
	fill(0,0,255);
 	rect((c*off)+padding, (r*off)+padding,d,d);
 
 	 	fill(255);
    rect(390,360,60,30);
 }


 	  
}
}





