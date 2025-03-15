//learn more arrow
document.getElementById("scroll-button").addEventListener("click", function () {
  document.getElementById("target-heading").scrollIntoView({ behavior: 'smooth' });
});

//alert
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () { div.style.display = "none"; }, 600);
  }
}
