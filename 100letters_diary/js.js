let senTence = document.querySelectorAll('.sentence');

window.addEventListener('load', ranDom)

function ranDom () {
    i = Math.floor(Math.random() * 7);
    senTence[i].style.display ="block";
}