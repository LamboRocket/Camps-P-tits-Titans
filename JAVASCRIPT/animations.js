gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".camps-title", {
    scrollTrigger: {
        trigger: ".camps-title",
        toggleActions: "restart pause reverse pause",
        start: "bottom 40%",
        end: "top 15%",
        scrub: 1
    },
    opacity: 0,
    ease: "none",
    duration: 1
});

tl.to(".one", {
    scrollTrigger: {
        trigger: ".one",
        toggleActions: "restart pause reverse pause",
        start: "bottom 80%",
        end: "top 15%",
        scrub: 1
    },
    opacity: 1,
    ease: "none",
    duration: 1
}, "<");

tl.to(".two", {
    scrollTrigger: {
        trigger: ".two",
        toggleActions: "restart pause reverse pause",
        start: "bottom 80%",
        end: "top 15%",
        scrub: 1
    },
    opacity: 1,
    ease: "none",
    duration: 1
}, "<");

tl.to(".three", {
    scrollTrigger: {
        trigger: ".three",
        toggleActions: "restart pause reverse pause",
        start: "bottom 80%",
        end: "top 15%",
        scrub: 1
    },
    opacity: 1,
    ease: "none",
    duration: 1
}, "<");

tl.to(".slide-image img", {
    scrollTrigger: {
        trigger: ".slide-image img",
        toggleActions: "restart pause reverse pause",
        start: "top 70%",
        end: "top 15%",
        scrub: 1
    },
    x: "-20vw",
    opacity: 1,
    ease: "none",
    duration: 1
}, "<");

tl.to(".slide-image .square", {
    scrollTrigger: {
        trigger: ".slide-image .square",
        toggleActions: "restart pause reverse pause",
        start: "top 70%",
        end: "top 15%",
        scrub: 3
    },
    rotation: 180,
    ease: "none",
    duration: 1
}, "<");

tl.to(".slide-image-2 img", {
    scrollTrigger: {
        trigger: ".slide-image-2 img",
        toggleActions: "restart pause reverse pause",
        start: "top 70%",
        end: "top 15%",
        scrub: 1
    },
    x: "20vw",
    opacity: 1,
    ease: "none",
    duration: 1
}, "<");

tl.to(".slide-image-2 .circle", {
    scrollTrigger: {
        trigger: ".slide-image-2 .circle",
        toggleActions: "restart pause reverse pause",
        start: "top 70%",
        end: "top 15%",
        scrub: 3
    },
    y: "14vw",
    ease: "none",
    duration: 1
}, "<");

tl.to(".themes-title", {
    scrollTrigger: {
        trigger: ".themes-title",
        toggleActions: "restart pause reverse pause",
        start: "bottom 80%",
        end: "top 15%",
        scrub: 1
    },
    opacity: 1,
    ease: "none",
    duration: 1
}, "<");

const contents = gsap.utils.toArray("#horizontal-scrolling .theme-section");


tl.to(contents, {
    xPercent: -100 * (contents.length - 1),
    scrollTrigger: {
        trigger: "#horizontal-scrolling",
        pin: true,
        scrub: 1
    }
});