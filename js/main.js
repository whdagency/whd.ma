gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal__banner").forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      // start: "top 120%",
      toggleActions: "restart none none reverse"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, {
    duration: 3,
    xPercent: -100,
    skewX: 0.1,
    ease: "expo"
  });
  tl.from(image, {
    duration: 3,
    xPercent: 100,
    skewX: 0.1,
    ease: "expo"
  }, 0);
});

gsap.utils.toArray(".banner__bg").forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      // start: "top 120%",
      toggleActions: "restart none none reverse"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, {
    duration: 3,
    yPercent: 100,
    skewX: 0.1,
    ease: "expo"
  });
  tl.from(image, {
    duration: 3,
    yPercent: -100,
    skewX: 0.1,
    ease: "expo"
  }, 0);
});



const tl = gsap.timeline();


  tl.from('.banner__text', {
    duration: 0.8,
    y: '10%',
    opacity: 0,
    ease: 'power2.out',
    skewX: 0.1,
  })
