function myFunction() {
console.log(event);
window.open(event.srcElement.previousSibling.firstChild.srcset.split(",")[2].split(" ")[0]);
}
document.body.addEventListener("click", myFunction);