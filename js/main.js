

// boneFall : A function to animate bones falling down the page
// init
var pos1 = 0;
var pos2 = 50;

function boneFall() {
    var bone1 = document.getElementById("bone1");
    var bone2 = document.getElementById("bone2");


    pos1 += 1;

    pos2 += 1;
    bone1.style.top = pos1 + "%";
    bone2.style.top = pos2 + "%";

    // edge detection
    if (pos1 > 100) {
      pos1 = 0;
    }
    if (pos2 > 100) {
      pos2 = 0;
    }

}

window.setInterval(boneFall, 100);
