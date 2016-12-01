var canvas; 
var pos;
var slider; 
var input;
var city; 
var globalData;
var myData;


function setup(){
	createCanvas(400,300);
	var baseUrl= "http://api.openweathermap.org/data/2.5/weather?q=";
	apiKey="5d1c340b7c63e01bc9acead4e36706bd";
	//city = "New York";


	
inputButton = createButton(' Get City Weather');
inputButton.position(100,100);
inputButton.mousePressed(readValue);
input= createInput('City Name');
input.position(100,200);
//city = input.value();
	url = baseUrl +city + "&appid=" + apiKey;
	myData= loadJSON(url,gotData);
}

function draw(){
	background(200);

}


function readValue(){
	city = input.value();
	//console.log(input);
	
	gotData(myData);

}

function gotData(myData){
	console.log(myData);
	globalData = myData;
	text('Temp:', 50,10);
	text(myData.main.temp,100,150);

}