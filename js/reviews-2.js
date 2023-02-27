function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
const response = httpGet("https://script.google.com/macros/s/AKfycbwV4bIt0OCCZRDQtnPXrb6NyGXY8VHjAttps50HxNAgkBcsmZkdhjNdMea0gHnTIWS4/exec");
var reviewLength = 12;
var reviewInit = 0;
const jData = JSON.parse(response);
const data = jData.data;

let topReviewsContainer = document.getElementById("topReviewsContainer");

topReviewsContainer.innerHTML+=`<div id="reviewCards" class="grid-container">
                                </div>
                                `;



showReviews();
function showReviews() {
    let reviewCards = document.getElementById("reviewCards");
    let limit = data.length<reviewLength?data.length:reviewLength;
    let init =  data.length<reviewInit?data.length:reviewInit;
    console.log("review length: ",init,":",data.length)
    for (let index = init; index < limit; index++) {
        const element = data[index];
        if(element[0] != ''&& element.length > 3){
            const userName = element[0];
            const comment = element[1];
            const star = element[2];
            const profile = element[3];
            const date = new Date(element[4]);
            const dateStr =date.getDate()? date.getDate()+"/"+(Number(date.getMonth())+1)+"/"+date.getFullYear():element[4];
            const link = element[4];
            const cLength = comment.length;
            const displayStyle = cLength > 230?"block":"none";
            let starReview = "";
            for (let index2 = 0; index2 < 5; index2++) {
                if(index2 < star){
                    starReview +='<i class="fa fa-star" aria-hidden="true"></i>';
                }else{
                    starReview+='<i class="fa fa-star-o" aria-hidden="true"></i>';
                }
            }
            reviewCards.innerHTML +=
                `
                <div class="grid-item" id=`+"figure"+index+`>
                    <figure class="snip1390">
                        <div id="topProfile">
                            <div id="firstRow">
                                <img src="`+profile+`" alt="profile-sample`+index+`" class="profile" />
                                <div id="nameDate">
                                    <h3>`+userName+`</h3>
                                    <h4>`+dateStr+`</h4>
                                </div>
                            </div>
                            <span class="hint-star star">
                                `+starReview+` <span class="gIcon"><i class="fa fa-google" aria-hidden="true" color="red"></i> </span>
                            </span>
                        </div>
                        <div class="blockquote" id=`+"blockquotee"+index+`>
                        <p class="line-clamp-4" id=`+"blockquote"+index+`>`+comment+`</p>
                        <a href="javascript:showMore(`+index+','+cLength+`)" id=`+"link"+index+`>Read More</a>
                        </div>
                    </figure>
                </div>
                `   
                document.getElementById("link"+index).style.display = displayStyle;
        }
    }
} 
function showMore(index,cLength){
    const lineHieght = Math.floor(((Number(cLength)/25)));
    const addedPixel = 100*Number(lineHieght);
    document.getElementById("blockquote"+index).setAttribute("style", "-webkit-line-clamp: 200;"); 
    document.getElementById("link"+index).setAttribute("style", "display:none;");
    document.getElementById("blockquotee"+index).setAttribute("style", "overflow-y: scroll;");
}
