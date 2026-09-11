function page1animation() {
  let t1 = gsap.timeline();

  t1.from(".navbar h2", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
  });

  t1.from(
    "nav h3, nav button",
    {
      y: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
    },
    "-=0.4",
  );

  t1.from(
    ".half1 h2",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
    },
    "-=1",
  );

  t1.from(
    ".half1 p",
    {
      x: -50,
      opacity: 0,
      duration: 0.3,
    },
    "-=0.8",
  );

  t1.from(
    ".half1 button",
    {
      scaleX: 0,
      transformOrigin: "center center",
      duration: 0.9,
      ease: "back.out(1.7)",
      color: "rgba(255,255,255,0)",
    },
    "-=0.6",
  );

  t1.from(
    ".half2 img",
    {
      x: 50,
      opacity: 0,
      duration: 0.4,
    },
    "-=1",
  );

  t1.from(
    ".companies img",
    {
      y: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.2,
    },
    "-=1.5",
  );
}
page1animation();

function page2animation() {
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      start: "top 80%",
      end: "bottom 10%",
      scroller: "body",
      
    },
  });

  t2.from(".line h3", {
    y: 200,
    duration: 0.2,
    ease: "sine.out",
  });

  t2.from(
    ".line p",
    {
      y: 100,
      duration: 0.4,
      ease: "sine.out",
    },
    "-=0.2",
  );

  t2.from(
    "#b1",
    {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
    },
    "anim1",
  );

  t2.from(
    "#b2",
    {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
    },
    "anim1",
  );

  t2.from(
    "#b3",
    {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
    },
    "anim2",
  );

  t2.from(
    "#b4",
    {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
    },
    "anim2",
  );

  t2.from(
    "#b5",
    {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
    },
    "anim3",
  );

  t2.from(
    "#b6",
    {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
    },
    "anim3",
  );

  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      start: "top 10%",
    },
  });

  t3.from(".inner2 button", {
    scaleX: 0,
    transformOrigin: "center center",
    duration: 0.9,
    ease: "back.out(1.7)",
    color: "rgba(255,255,255,0)",
  });
}
page2animation();

function page4animation() {
  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      start: "top 90%",
      end: "top 40%",
    },
  });

  t4.from(".line2 h3", {
    y: 100,
    duration: 0.5,
    ease: "sine.out",
  });

  t4.from(
    ".line2 p",
    {
      y: 100,
      duration: 0.4,
      ease: "sine.out",
    },
    "-=0.35",
  );

  let t5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".graybox2",
      start: "top 80%",
      end: "top 5%",
    },
  });

  t5.from(
    ".text1 h2, .text2 h2, .text3 h2",
    {
      y: 200,
      ease: "sine.out",
      duration: 0.4,
      stagger: 0.2,
    },
    "-=0.1",
  );

  t5.from(
    ".text1 p, .text2 p, .text3 p",
    {
      y: 200,
      ease: "sine.out",
      duration: 0.4,
      stagger: 0.2,
    },
    "-=1.2",
  );

  let t6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".line3",
      start: "top 80%",
      end: "top 50%",
    },
  });
  t6.from(".line3 h3", {
    y: 100,
    duration: 0.6,
    ease: "sine.out",
  });

  t6.from(
    ".line3 p",
    {
      y: 100,
      duration: 0.6,
      ease: "sine.out",
    },
    "-=0.35",
  );
}

page4animation();

function page5animation() {
  let t7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      start: "top 70%",
      end: "top 50%",
    },
  });

  t7.from(".A1 h1", {
    x: -300,
    duration: 0.8,
    ease: "sine.out",
    stagger: 0.1,
  });

  t7.from(
    ".A1 p",
    {
      x: -800,
      duration: 0.4,
      ease: "sine.out",
      stagger: 0.1,
    },
    "<",
  );

  t7.from(
    ".A1 p i",
    {
      x: 100,
      opacity: 0,
      rotate: 360,
      duration: 1.2,
      ease: "bounce.out",
      stagger: 0.1,
    },
    "-=0.8",
  );

  let t8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".line4",
      start: "top 78%",
      end: "top 40%",
    },
  });

  t8.from(".line4 h3", {
    y: 100,
    duration: 0.5,
    ease: "sine.out",
  });

  t8.from(
    ".line4 p",
    {
      y: 100,
      duration: 0.4,
      ease: "sine.out",
    },
    "-=0.35",
  );
}

page5animation();

function page6animation() {
  let t9 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page6",
      start: "top 80%",
      end: "top 5%",
    },
  });

  t9.from(
    ".text4 h2, .text5 h2, .text6 h2",
    {
      y: 200,
      ease: "sine.out",
      duration: 0.4,
      stagger: 0.2,
    },
    "-=0.1",
  );

  t9.from(
    ".text4 p, .text5 p, .text6 p",
    {
      y: 200,
      ease: "sine.out",
      duration: 0.4,
      stagger: 0.2,
    },
    "-=1.2",
  );

  let t10 = gsap.timeline({
    scrollTrigger: {
      trigger: ".line5",
      start: "top 100%",
      end: "top 60%",
    },
  });

  t10.from(".line5 h3", {
    y: 200,
    duration: 0.5,
    ease: "sine.out",
  });

  t10.from(
    ".line5 p",
    {
      y: 200,
      duration: 0.4,
      ease: "sine.out",
    },
    "-=0.35",
  );

  let t11 = gsap.timeline({
    scrollTrigger: {
      trigger: ".proposal",
      start: "top 60%",
      end: "top 30%",
    },
  });

  t11.from(
    ".proposal",
    {
      scaleX: 0,
      transformOrigin: "center center",
      duration: 1,
      ease: "back.out(1.7)",
      color: "rgba(255,255,255,0)",
    },
    ">",
  );

  t11.from(
    ".proposal h2,.proposal p ",
    {
      opacity: 0,
    },
    "-=0.6",
  );

  t11.from(
    ".proposal button",
    {
      scaleX: 0,
      transformOrigin: "center center",
      duration: 1,
      ease: "back.out(1.7)",
      color: "rgba(255,255,255,0)",
    },
    "-=0.4",
  );
}

page6animation();

function page7animation() {
  let t10 = gsap.timeline({
    scrollTrigger: {
      trigger: ".line6",
      start: "top 90%",
      end: "top 60%",
    },
  });

  t10.from(".line6 h3", {
    y: 200,
    duration: 0.4,
    ease: "sine.out",
  });

  t10.from(
    ".line6 p",
    {
      y: 200,
      duration: 0.3,
      ease: "sine.out",
    },
    "-=0.25",
  );
}

page7animation();
