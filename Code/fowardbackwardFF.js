document.onkeydown = function(e) {
    if(e.code=="MediaTrackNext"){document.querySelector(".ytp-next-button").click();}
    else if(e.code=="MediaTrackPrevious"){document.querySelector(".ytp-prev-button").click();}
}