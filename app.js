var color = document.querySelector("div#color");
var main = document.querySelector("div.main");


function reverse() {
    color.removeAttribute("class", "color");
    color.setAttribute("class", "mamad");

}

function forward() {
    color.setAttribute("class","color");
}


main.addEventListener("mouseout", reverse);
main.addEventListener("mouseover" , forward);