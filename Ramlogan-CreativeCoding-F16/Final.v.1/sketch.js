var _value;
var myObject; 
var myObjectTwo;
var theValue=[];
//var input;

function setup(){
	createCanvas(700,700);
	//myObject = new Shape(100);
	//myObjectTwo = new Shape(_value);
	}

/*
inputButton = createButt	on('Type Something');
inputButton.position(100,100);
inputButton.mousePressed(wordStuff);
input= createInput('Cool');
input.position(100,200);
}
*/

function draw(){
	//background(200);

	
	myObjectTwo = new Shape(theValue,theValue);
	myObjectTwo.display();
	myObjectTwo.color();
	//text(_value,100,100);
}
//function wordStuff(){}
function keyTyped(){
	if (key==='a'){
		_value = 10;
		theValue.push(_value);}
	 if (key ==='b'){
		_value = 20	
	theValue.push(_value);}
	if (key ==='c'){
		_value=30;
	theValue.push(_value);}
	if (key==='d'){
		_value=40;
	theValue.push(_value);}
	if (key==='e'){
		_value =50;}
	if(key==='f'){
		_value=60;
	}
	if(key==='g'){
		_value=70;
	}
	if(key==='h'){
		_value=80;
	}
	if(key==='i'){
		_value=90;
	}
	if(key==='j'){
		_value=100;
	}
	if(key==='k'){
		_value=10;
	}if(key==='l'){
		_value=20;
	}if(key==='m'){
		_value=30;
	}if(key==='n'){
		_value=40;
	}if(key==='o'){
		_value=50;
	}if(key==='p'){
		_value=60;
	}if(key==='q'){
		_value=70;
	}if(key==='r'){
		_value=80;
	}if(key==='s'){
		_value=90;
	}if(key==='t'){
		_value=100;
	}if(key==='u'){
		_value=10;
	}if(key==='v'){
		_value=20;
	}if(key==='w'){
		_value=30;
	}if(key==='x'){
		_value=40;
	}if(key==='y'){
		_value=50;
	}if(key==='z'){
		_value=60;
	}	










	}
	


	


function Shape(_value,theValue){

	this.value=_value;
	this.theValue=theValue;
	this.display = function(){
	//background(this.value,100,100);
	for (i=1;i<this.theValue.length;i++){
	rect(this.value,this.value,this.value+random(0,10),this.value+random(0,10));
	ellipse(this.value+random(0,100),this.value+random(0,100),this.value,this.value);
}
	this.color= function(){
		fill(this.value+random(0,100),this.value,this.value);
	}
	
}
};