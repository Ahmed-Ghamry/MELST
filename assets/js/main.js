
var d1_li = MorphSVGPlugin.convertToPath("#d1_li"),
    d2_li = MorphSVGPlugin.convertToPath("#d2_li"),
    d3_li = MorphSVGPlugin.convertToPath("#d3_li"),
    d4_li = MorphSVGPlugin.convertToPath("#d4_li"),
    d5_li = MorphSVGPlugin.convertToPath("#d5_li"),
    d6_li = MorphSVGPlugin.convertToPath("#d6_li"),
    d7_li = MorphSVGPlugin.convertToPath("#d7_li"),
    d8_li = MorphSVGPlugin.convertToPath("#d8_li"),
    d9_li = MorphSVGPlugin.convertToPath("#d9_li");


TweenMax.set(".container", {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50,
    width: "80%",
    height: "80%"
})

TweenMax.set('svg', {
    visibility: 'visible'
})

TweenMax.set(["#device2", "#device3", "#device4", "#device5",
    "#device6", "#device7", "#device8", "#device9"], {
    visibility: 'hidden'
})

var tl = new TimelineMax();

tl.delay(2)
    // Device 2
    .to("#d1_ms", 2, { morphSVG: "#d2_ms", ease: Elastic.easeOut.config(1, 0.5) }, "dvice2")
    .to(d1_li, 2, { morphSVG: d2_li, ease: Elastic.easeOut.config(1, 0.5) }, "dvice2")
    .to("#d1_cv", 2, { morphSVG: "#d2_cv", ease: Elastic.easeOut.config(1, 0.5) }, "dvice2")
    .to("#d1_shd", 2, { morphSVG: "#d2_shd", ease: Elastic.easeOut.config(1, 0.5) }, "dvice2")
    .to(["#__d1_1", "#__d1_2", "#__d1_3", "#__d1_4", "#__d1_5"], 2, { autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5) }, "dvice2")
    .to(["#__d2_1", "#__d2_2", "#__d2_3"], 2, { visibility: 'visible', autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.5) }, "dvice2")
    // Device 3
    .to("#d1_ms", 2, { morphSVG: "#d3_ms", ease: Elastic.easeOut.config(1, 0.5) }, "dvice3")
    .to(d1_li, 2, { morphSVG: d3_li, ease: Elastic.easeOut.config(1, 0.5) }, "dvice3")
    .to("#d1_cv", 2, { morphSVG: "#d3_cv", ease: Elastic.easeOut.config(1, 0.5) }, "dvice3")
    .to("#d1_shd", 2, { morphSVG: "#d3_shd", ease: Elastic.easeOut.config(1, 0.5) }, "dvice3")
    .to(["#__d2_1", "#__d2_2", "#__d2_3"], 2, { autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5) }, "dvice3")
    .to(["#__d3_1", "#__d3_2"], 2, { visibility: 'visible', autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.5) }, "dvice3")
    // Device 4
    .to("#d1_ms", 2, { morphSVG: "#d4_ms", ease: Elastic.easeOut.config(1, 0.5) }, "dvice4")
    .to(d1_li, 2, { morphSVG: d4_li, ease: Elastic.easeOut.config(1, 0.5) }, "dvice4")
    .to("#d1_cv", 2, { morphSVG: "#d4_cv", ease: Elastic.easeOut.config(1, 0.5) }, "dvice4")
    .to("#d1_shd", 2, { morphSVG: "#d4_shd", ease: Elastic.easeOut.config(1, 0.5) }, "dvice4")
    .to(["#__d3_1", "#__d3_2"], 2, { autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5) }, "dvice4")
    .to(["#__d4_1", "#__d4_2", "#__d4_2"], 2, { visibility: 'visible', autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.5) }, "dvice4")
    // Device 5
    .to("#d1_ms", 2, { morphSVG: "#d5_ms", ease: Elastic.easeOut.config(1, 0.5) }, "dvice5")
    .to(d1_li, 2, { morphSVG: d5_li, ease: Elastic.easeOut.config(1, 0.5) }, "dvice5")
    .to("#d1_cv", 2, { morphSVG: "#d5_cv", ease: Elastic.easeOut.config(1, 0.5) }, "dvice5")
    .to("#d1_shd", 2, { morphSVG: "#d5_shd", ease: Elastic.easeOut.config(1, 0.5) }, "dvice5")
    .to(["#__d4_1", "#__d4_2", "#__d4_2"], 2, { autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5) }, "dvice5")
    .to(["#__d5_1", "#__d5_2", "#__d5_3", "#__d5_4"], 2, { visibility: 'visible', autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.5) }, "dvice5")
    // Device 6
    .to("#d1_ms", 2, { morphSVG: "#d6_ms", ease: Elastic.easeOut.config(1, 0.5) }, "dvice6")
    .to(d1_li, 2, { morphSVG: d6_li, ease: Elastic.easeOut.config(1, 0.5) }, "dvice6")
    .to("#d1_cv", 2, { morphSVG: "#d6_cv", ease: Elastic.easeOut.config(1, 0.5) }, "dvice6")
    .to("#d1_shd", 2, { morphSVG: "#d6_shd", ease: Elastic.easeOut.config(1, 0.5) }, "dvice6")
    .to(["#__d5_1", "#__d5_2", "#__d5_3", "#__d5_4"], 2, { autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5) }, "dvice6")
    .to(["#__d6_1", "#__d6_2", "#__d6_3", "#__d6_4", "#__d6_5", "#__d6_6", "#__d6_7", "#__d6_8"], 2, { visibility: 'visible', autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.5) }, "dvice6")
    // Device 7
    .to("#d1_ms", 2, { morphSVG: "#d7_ms", ease: Elastic.easeOut.config(1, 0.5) }, "dvice7")
    .to(d1_li, 2, { morphSVG: d7_li, ease: Elastic.easeOut.config(1, 0.5) }, "dvice7")
    .to("#d1_cv", 2, { morphSVG: "#d7_cv", ease: Elastic.easeOut.config(1, 0.5) }, "dvice7")
    .to("#d1_shd", 2, { morphSVG: "#d7_shd", ease: Elastic.easeOut.config(1, 0.5) }, "dvice7")
    .to(["#__d6_1", "#__d6_2", "#__d6_3", "#__d6_4", "#__d6_5", "#__d6_6", "#__d6_7", "#__d6_8"], 2, { autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5) }, "dvice7")
    .to(["#__d7_1", "#__d7_2", "#__d7_3", "#__d7_4", "#__d7_5"], 2, { visibility: 'visible', autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.5) }, "dvice7")
    // Device 8
    .to("#d1_ms", 2, { morphSVG: "#d8_ms", ease: Elastic.easeOut.config(1, 0.5) }, "dvice8")
    .to(d1_li, 2, { morphSVG: d8_li, ease: Elastic.easeOut.config(1, 0.5) }, "dvice8")
    .to("#d1_cv", 2, { morphSVG: "#d8_cv", ease: Elastic.easeOut.config(1, 0.5) }, "dvice8")
    .to("#d1_shd", 2, { morphSVG: "#d8_shd", ease: Elastic.easeOut.config(1, 0.5) }, "dvice8")
    .to(["#__d7_1", "#__d7_2", "#__d7_3", "#__d7_4", "#__d7_5"], 2, { autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5) }, "dvice8")
    .to(["#__d8_1", "#__d8_2", "#__d8_3", "#__d8_4", "#__d8_5"], 2, { visibility: 'visible', autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.5) }, "dvice8")
    // Device 9
    .to("#d1_ms", 2, { morphSVG: "#d9_ms", ease: Elastic.easeOut.config(1, 0.5) }, "dvice9")
    .to(d1_li, 2, { morphSVG: d9_li, ease: Elastic.easeOut.config(1, 0.5) }, "dvice9")
    .to("#d1_cv", 2, { morphSVG: "#d9_cv", ease: Elastic.easeOut.config(1, 0.5) }, "dvice9")
    .to("#d1_shd", 2, { morphSVG: "#d9_shd", ease: Elastic.easeOut.config(1, 0.5) }, "dvice9")
    .to(["#__d8_1", "#__d8_2", "#__d8_3", "#__d8_4", "#__d8_5"], 2, { autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5) }, "dvice9")
    .to(["#__d9_1", "#__d9_2", "#__d9_3", "#__d9_4", "#__d9_5"], 2, { visibility: 'visible', autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.5) }, "dvice9");

// **
tl.timeScale(1.5);
tl.repeat(-1);
tl.yoyo(1);
tl.repeatDelay(2);
