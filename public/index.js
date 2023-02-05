import anime from 'animejs/lib/anime.es.js';

new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    anchors:['firstPage', 'secondPage', 'thirdPage']
});

var animation = anime.timeline({});

document.querySelector("#edbutton").onclick = function () {
    location.href = "#page2";
}

document.querySelector("#artbutton").onclick = function () {
    location.href = "#page3";
}
