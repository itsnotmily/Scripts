const videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
const playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];
const player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);
function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
	if (m<10){m="0"+m;}
	if (s<10){s="0"+s;}
    return h + ':' + m + ':' + s;}
convertMS(player.getCurrentTime());
document.querySelector("button.touchable.PlayerControls--control-element.nfp-button-control.default-control-button.button-nfplayerReportAProblem").innerHTML = convertMS(player.getCurrentTime());
setInterval(function(){ 
document.querySelector("button.touchable.PlayerControls--control-element.nfp-button-control.default-control-button.button-nfplayerReportAProblem").innerHTML = convertMS(player.getCurrentTime());
}, 1000);
