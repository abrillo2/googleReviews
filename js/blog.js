function httpGet(theUrl){
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
                    xmlHttp.send( null );
                    return xmlHttp.responseText;
}
const response = httpGet("https://script.google.com/macros/s/AKfycbztfObrkDrGDgZeVxxcmCzmb-k-3mjYzxqT4UxLSNQOOK7osIEN0jM58h5sKSxAkIkQnQ/exec");
console.log(JSON.stringify(response));