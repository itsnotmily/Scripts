javascript:(function(){
for (let i = 0; i < document.querySelectorAll("#overlays").length; i++) {
    if (document.querySelectorAll("#overlays")[i].firstChild == null) {
        console.log("skip");
    } else if (document.querySelectorAll("#overlays")[i].firstChild.overlayStyle == "SHORTS") {
        document.querySelectorAll("#overlays")[i].parentNode.parentNode.parentNode.parentNode.style.display = "none";
    }
}
})();
