function httpGet(theUrl){
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
                    xmlHttp.send( null );
                    return xmlHttp.responseText;
}
const response = httpGet("https://script.google.com/macros/s/AKfycbwV4bIt0OCCZRDQtnPXrb6NyGXY8VHjAttps50HxNAgkBcsmZkdhjNdMea0gHnTIWS4/exec");
console.log(JSON.stringify(response));
