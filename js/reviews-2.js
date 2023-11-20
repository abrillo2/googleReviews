function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = () => {
        const jData = JSON.parse(xmlHttp.responseText);
        const data = jData.data;
        showReviews(data);
    };
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    //return xmlHttp.responseText;
}
httpGet("https://script.google.com/macros/s/AKfycbwV4bIt0OCCZRDQtnPXrb6NyGXY8VHjAttps50HxNAgkBcsmZkdhjNdMea0gHnTIWS4/exec");
var reviewLength = 9;
var reviewInit = 0;


let topReviewsContainer = document.getElementById("topReviewsContainer");

topReviewsContainer.innerHTML+=`<div id="reviewCards" class="grid-container">
                                </div>
                                `;




function showReviews(data) {
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
                            <div class="googleLogo">
                                <a href="https://www.google.com/maps/place/B.I.G.+Charity+Law+Group/@43.7316872,-79.4360465,12z/data=!3m1!5s0x882b34d2a0333477:0xdef2b13832eada8!4m12!1m2!2m1!1sbig+charity+law+group!3m8!1s0x882b358e449eeae7:0x8d01f850817fc9f7!8m2!3d43.6491287!4d-79.3816683!9m1!1b1!15sChViaWcgY2hhcml0eSBsYXcgZ3JvdXBaFyIVYmlnIGNoYXJpdHkgbGF3IGdyb3VwkgEGbGF3eWVy4AEA!16s%2Fg%2F11h6dhxs_s?entry=ttu"><img src="https://uploads-ssl.webflow.com/64dd2e39c72583e99b7fae9e/655bd1b92642b4887a92fd29_gicon.png" alt="profile-sample0" class="googleIcon"></a>
                            </div>
                            <p style="margin-top: -15px;" class="reviewText">Reviews</p>
                            <span class="hint-star star">
                            <span class="starCount">`+star+`</span>`+starReview+` </span>
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
