var myData;
var url;
var baseUrl
var city;
var apiKey;
var globalData;

function preload(){

}



function setup(){
	createCanvas(500,500);
	var baseUrl= "http://api.openweathermap.org/data/2.5/weather?q=";
	apiKey="5d1c340b7c63e01bc9acead4e36706bd";
	city = "New York";
	url = baseUrl +city + "&appid=" + apiKey;
	myData= loadJSON(url,gotData);
	
}

function draw(){
	

}

function gotData(myData){
	console.log(myData);
	globalData = myData;
	text('Temp:', 50,10);
	text(myData.main.temp,50,50);


};

function mouseClicked(){

	println(myData.main.humidity);
	text('Humidity:', 50,70)
	text(myData.main.humidity,50,100);
	text('Min Temp:', 100,10);
	text(myData.main.temp_min,100,50);
	text('Max Temp:', 170,10);
	text(myData.main.temp_max,170,50);



}

//I could not get this code to work.  Wanted to change the city with different mouse interactions and print the same information as above.
/*function mouseReleased(){

	
		city = "london";
		url = baseUrl +city + "&appid=" + apiKey;
		myData = loadJSON(url,gotData);
		text(myData.main.temp,50,200);
	}
*/
	



	

	
