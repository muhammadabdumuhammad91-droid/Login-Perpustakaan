// Animate the character in SVG
var design = anime({
  targets: "svg #XMLID5",
  keyframes: [
    { translateX: -500 },
    { rotateY: 180 },
    { translateX: 920 },
    { rotateY: 0 },
    { translateX: -500 },
    { rotateY: 180 },
    { translateX: -500 }
  ],
  easing: "easeInOutSine",
  duration: 60000,
  loop: true
});

// Animate dust particles
anime({
  targets: "#dust-paarticle path",
  translateY: [10, -150],
  direction: "alternate",
  loop: true,
  delay: function (el, i, l) {
    return i * 100;
  },
  endDelay: function (el, i, l) {
    return (l - i) * 100;
  },
  duration: 2000,
  easing: "easeInOutQuad"
});

// Eye animation
anime({
  targets: "#eye1",
  rotation: [0, 10, -10, 0],
  duration: 3000,
  loop: true,
  easing: "easeInOutSine"
});

anime({
  targets: "#eye2",
  rotation: [0, -10, 10, 0],
  duration: 3000,
  loop: true,
  easing: "easeInOutSine"
});