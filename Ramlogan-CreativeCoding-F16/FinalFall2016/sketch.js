// Kevin Ramlogan Creative Coding Final Project.
//Code Citation:
//https://www.openprocessing.org/sketch/193646
//https://www.openprocessing.org/sketch/391551



var _value;
var myObject; 
var myObjectTwo;
var theValue=[];
var words="";


function setup(){
	createCanvas(1000,700);
	background(200);
	console.log("Final Project");
	textSize(100);
	
	textStyle(BOLD);
	
}

function draw(){
	push();
	flicker(50);
	text(words, 0, height/2);
	pop();
	push();
	balls(random(0,100));
	pop();
	push();
	fill(random(0,255),random(0,255),random(0,255));
	lines();
	pop();
	}
	
	
	
function mouseClicked(){
	
	noLoop();
	splat();

}


function keyTyped() {

	words += String(key);
  	text(words, 0, height/2);
  	stroke(255);
  	ball(_value);

  	myObjectTwo = new Shape(_value,theValue);
	myObjectTwo.display();
	myObjectTwo.color();
  
	
	if(key==='a'){

	
		
		console.log("a");
		_value=random(1,100);
		//ball(_value);
		console.log(_value);
		append(theValue,_value);

	}
	  if(key==='b'){
	 	console.log("b");
		_value=random(1,100);
		console.log(_value);
		append(theValue,_value);}
		//ball(_value);
	if (key ==='c'){
		_value=random(1,100);
		console.log('c');
		console.log(_value);
		append(theValue,_value);
	}
	if (key==='d'){
		console.log('d');
		_value=random(1,100);
		console.log(_value);
		append(theValue,_value);}
	
	if (key==='e'){
			console.log('e');
		_value=random(1,100);
		console.log(_value);
		append(theValue,_value);}
	if(key==='f'){
				console.log('f');
		_value=random(1,100);
		console.log(_value);
		append(theValue,_value);}
	
	if(key==='g'){
				console.log('g');
				_value=random(1,100);
				console.log(_value);
				append(theValue,_value);}
	
	if(key==='h'){
				console.log('h');
		_value=random(1,100);
		console.log(_value);
		append(theValue,_value);}
	
	if(key==='i'){
				console.log('i');
		_value=random(1,100);
		console.log(_value);
		append(theValue,_value);}
	
	if(key==='j'){
				console.log('j');
		_value=random(1,100);
		console.log(_value);
		append(theValue,_value);}
	
	if(key==='k'){
				console.log('k');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);}
	if(key==='l'){
		console.log('l');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}
	if(key==='m'){
		console.log('m');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}if(key==='n'){
		console.log('n');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);}

	if(key==='o'){
		console.log('o');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}if(key==='p'){
		console.log('p');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}if(key==='q'){
		console.log('q');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);	}
	if(key==='r'){
		console.log('r');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}if(key==='s'){
		console.log('s');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}if(key==='t'){
		console.log('t');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}if(key==='u'){
		console.log('u');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}if(key==='v'){
		console.log('v');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);	}
	if(key==='w'){
		console.log('w');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}
	if(key==='x'){
		console.log('x');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}if(key==='y'){
		console.log('y');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);	}
		if(key==='z'){
		console.log('z');
		_value=random(1,100);
			console.log(_value);
		append(theValue,_value);
	}

}

function Shape(_value,theValue){

	this.value=_value;
	this.theValue=theValue;
	this.display = function(){
		
		
		rect(random(0, width),random(0, height),this.value,this.value);
		ellipse(random(0, width),random(0, height),this.value,this.value);
	}
	this.color= function(){
		flicker();
		
	}
	

};

function ball(_value) {
  var color = random(0,255);
  fill(_value + random(0, 50), color + random(0, 50), color + random(0, 50));
  var x = random(0, width);
  var y = random(0, height);


  ellipse(x, y, _value, _value);

};
function flicker(){

	var color = random(0,255);
  fill(_value + random(0, 50), color + random(0, 50), color + random(0, 50));
}

function balls(_value){

	ellipse(random(0,width),random(0,height),random(0,_value),random(0,_value));
	
}

function lines(){
	line(random(0,width),random(0,width),random(0,height),random(0,height));


}

function splat(){

	for (i=0;i<theValue.length;i++){
			var color = random(200,255);
  		fill(color + random(0, 50), color + random(0, 50), color + random(0, 50));
		
		ellipse(random(theValue[i],width),random(theValue[i],height),theValue[i]/4,theValue[i]/4);
		ellipse(random(theValue[i],width),random(theValue[i],height),theValue[i]/3,theValue[i]/3);
		ellipse(random(theValue[i],width),random(theValue[i],height),theValue[i]/2,theValue[i]/2);
		ellipse(random(theValue[i],width),random(theValue[i],height),theValue[i]/10,theValue[i]/10);
		rect(random(theValue[i],width),random(theValue[i],height),theValue[i]/2,theValue[i]/2);
		curve(random(0,width),random(0,width),random(0,height),random(0,width),random(0,width),random(0,height),width/2,height/2);
	}
}

