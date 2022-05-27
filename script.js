var pauseIcon = document.querySelector(".playpause");
var pauseIconstop = document.querySelector(".playpausestop")
var video = document.querySelector(".videoBanner");

function pause() {
    video.style.display = "none";
    pauseIconstop.style.display = "block";
        pauseIcon.style.display = "none";
}

function play() {
    video.style.display = "block";
    pauseIconstop.style.display = "none";
    pauseIcon.style.display = "block";
}


var checkboxs = document.getElementsByName("userContact");

function validar() {

    if (checkboxs[0].checked == true ||
        checkboxs[1].checked == true ||
        checkboxs[2].checked == true) {
    } else {
        alert("Complete the user checkbox thing pls 🤘");
    }

};
