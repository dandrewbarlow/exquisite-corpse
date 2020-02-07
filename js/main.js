

// boneFall : A function to animate bones falling down the page
// init
var pos1 = 0;
var pos2 = 50;
var ticker = 0;

var height = Math.max( document.body.scrollHeight, document.body.offsetHeight);

function boneFall() {
    var bone1 = document.getElementById("bone1");
    var bone2 = document.getElementById("bone2");


    pos1 += 5;

    pos2 += 5;
    bone1.style.top = pos1 + "px";
    bone2.style.top = pos2 + "px";

    // edge detection
    if (pos1 > height - 40) {
      pos1 = 0;
    }
    if (pos2 > height - 40) {
      pos2 = 0;
    }

}

window.setInterval(boneFall, 50);
