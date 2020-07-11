var imageDiv = document.querySelector(".imagediv");
var imgDiv = document.querySelectorAll(".imagediv img");

var leftButton = document.querySelector("#leftbutton");
var rightButton = document.querySelector("#rightbutton");

var temp = 1;
var size = imgDiv[0].clientWidth;
imageDiv.style.transform = 'translateX(' + (-size*temp) + 'px)';

rightButton.addEventListener("click", function() {
    if (temp >= imgDiv.length - 1) return;
    imageDiv.classList.add("slide");
    temp++;
    imageDiv.style.transform = 'translateX(' + (-size*temp) + 'px)';
});

leftButton.addEventListener("click", function() {
    if (temp <= 0) return;
    imageDiv.classList.add("slide");
    temp--;
    imageDiv.style.transform = 'translateX(' + (-size*temp) + 'px)';
});

imageDiv.addEventListener("transitionend", function() {
    var num = temp;
    if (imgDiv[num].id === "lastimage") {
        imageDiv.classList.remove("slide");
        temp = imgDiv.length - 2;
        imageDiv.style.transform = 'translateX(' + (-size*temp) + 'px)';
    }
});

imageDiv.addEventListener("transitionend", function() {
    var num = temp;
    if (imgDiv[num].id === "firstimage") {
        imageDiv.classList.remove("slide");
        temp = imgDiv.length - temp;
        imageDiv.style.transform = 'translateX(' + (-size*temp) + 'px)';
    }
})