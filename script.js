document.getElementById("scroll-button").addEventListener("click", function() {
    document.getElementById("target-heading").scrollIntoView({ behavior: 'smooth' });
});

// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function() { div.style.display = "none"; }, 600);
  }
}
