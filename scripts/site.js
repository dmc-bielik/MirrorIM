/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */

(function () {
  "use strict";

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll("img[data-src]");
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], { load: true });
    }
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener("DOMContentLoaded", loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener("resize", loadAllImages);

  /* GSAP */

  window.gsap.registerPlugin(window.ScrollTrigger);

  const appearOnScroll = [
    window.gsap.utils.toArray(".appear-on-scroll-1"),
    window.gsap.utils.toArray(".appear-on-scroll-2"),
    window.gsap.utils.toArray(".appear-on-scroll-3"),
    window.gsap.utils.toArray(".appear-on-scroll-4"),
    window.gsap.utils.toArray(".appear-on-scroll-5"),
    window.gsap.utils.toArray(".appear-on-scroll-6"),
    window.gsap.utils.toArray(".appear-on-scroll-7"),
  ];

  appearOnScroll.forEach((group) => {
    group.forEach((trigger, index) => {
      window.gsap.from(trigger, {
        delay: 0.1 * index,
        duration: 2,
        opacity: 0,
        y: 60,
        ease: "power2.out",
        scrollTrigger: {
          trigger,
          start: "top bottom",
        },
      });
    });
  });

  window.gsap.from(".home-hero .container, .home-hero img", {
    duration: 2,
    opacity: 0,
    y: 10,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".home-hero img",
      start: "top bottom",
    },
  });

  window.gsap.fromTo(
    ".home-hero img",
    { x: 50 },
    {
      scrollTrigger: {
        trigger: ".home-hero",
        start: "-76px top",
        end: "bottom top",
        scrub: true,
      },
      x: 0,
    }
  );
})();
