var dataRec;
var globalData;
var posX;
var posY;
var api; 
var q;
var vals; 
function setup(){
createCanvas(600,600);
	vals=0;

baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
api = 'a6c9e00d46864cfb9f60aeccb2445ab7';
q= 'apples';	
url = baseUrl + '?api-key=' + api + '&q='+ q; 

	setInterval(loadNewData,2000);


}

function draw(){
	

	
}
function loadNewData(){
	
	loadJSON(url,dataRec);
}



//callback function- called when a data object is loaded and complete
function dataRec(incomingData){

	globalData=incomingData;
	console.log(globalData);
	text(globalData.response.docs[vals].abstract,50,50);
	vals+=1;

	if(vals >= globalData.response.docs.length){
		vals=0;
	}

}
//loadJSON(url,dataRec);

//function mouseClicked(){
//	loadJSON(url,dataRec);

//}
	



	

	
