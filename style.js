new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  navigationTooltips: ["home", "skills", "projects", "contact"],
  verticalCentered: true,
  fixedElements: "#toggle",
});

let fullscreen = document.querySelector("#fullpage");
function openNav() {
  var x = document.getElementById("myLinks");
  var y = document.querySelector(".topnav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "flex";
  }
}

class TypeIt {
  constructor(text, container, speed) {
    this.text = text;
    this.container = container;
    this.speed = speed;
    this.current = 0;
  }

  run() {
    const cont = document.querySelector(this.container);
    cont.append(this.text[this.current]);
    this.current++;
    if (this.current < this.text.length) {
      window.setTimeout(() => {
        this.run();
      }, this.speed);
    }
  }
}

// the code below is just for the demo

const demoText = new TypeIt(
  "Hi, I am Quddus. Welcome to my profile.",
  ".text .content",
  50
);
demoText.run();

function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
  }
  resize();
  window.addEventListener("resize", resize);
}

var sphereAnimation = (function () {
  var sphereEl = document.querySelector(".sphere-animation");
  var spherePathEls = sphereEl.querySelectorAll(".sphere path");
  var pathLength = spherePathEls.length;
  var hasStarted = false;
  var aimations = [];

  fitElementToParent(sphereEl);

  var breathAnimation = anime({
    begin: function () {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(
          anime({
            targets: spherePathEls[i],
            stroke: {
              value: ["rgba(255,75,75,1)", "rgba(80,80,80,.35)"],
              duration: 500,
            },
            translateX: [2, -4],
            translateY: [2, -4],
            easing: "easeOutQuad",
            autoplay: false,
          })
        );
      }
    },
    update: function (ins) {
      aimations.forEach(function (animation, i) {
        var percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false,
  });

  var introAnimation = anime
    .timeline({
      autoplay: true,
    })
    .add(
      {
        targets: spherePathEls,
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 500,
          easing: "easeInOutCirc",
          delay: anime.stagger(190, { direction: "reverse" }),
        },
        duration: 2000,
        delay: anime.stagger(60, { direction: "reverse" }),
        easing: "linear",
      },
      0
    );

  var shadowAnimation = anime(
    {
      targets: "#sphereGradient",
      x1: "25%",
      x2: "25%",
      y1: "0%",
      y2: "75%",
      duration: 30000,
      easing: "easeOutQuint",
      autoplay: false,
    },
    0
  );

  function init() {
    introAnimation.play();
    breathAnimation.play();
    shadowAnimation.play();
  }

  init();
})();

//page2

anime({
  targets: '.psd path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1300,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.ai path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.ppr path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 200 },
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.html path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1100,
  delay: function(el, i) { return i * 200 },
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.css path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1400,
  delay: function(el, i) { return i * 200 },
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.js path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1200,
  delay: function(el, i) { return i * 200 },
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.blackhat path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1200,
  delay: function(el, i) { return i * 200 },
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.linux path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 100 },
  direction: 'alternate',
  loop: true
});