document.addEventListener("DOMContentLoaded", function (event) {
    const btnFloat = document.querySelectorAll(".btn-hero");

  // floating btn
  // auto contact btn mobile
  const buttonFixed = document.getElementsByClassName(".btn-hero.fixed-ver"),
    hideSect = document.querySelectorAll(".hide-btn");
  const areIntersecting = (bounds1, bounds2) =>
    bounds1.top < bounds2.bottom && bounds1.bottom > bounds2.top;
  const btnFloatMobileWrapper = document.querySelector(".btn-float");
  window.addEventListener("scroll", function () {
    if (buttonFixed > 0) {
      let buttonRect = buttonFixed.getBoundingClientRect();
      if (window.innerWidth < 992) {
        if (btnFloatMobileWrapper !== null) {
          if (
            window.scrollY >
            btnFloatMobileWrapper.offsetTop + btnFloatMobileWrapper.offsetHeight
          ) {
            buttonFixed.classList.add("float");
          } else {
            buttonFixed.classList.remove("float");
          }
        }
        for (let item of hideSect) {
          const itemRect = item.getBoundingClientRect();
          if (areIntersecting(itemRect, buttonRect)) {
            buttonFixed.style.visibility = "hidden";
            return;
          }
          buttonFixed.style.visibility = "visible";
        }
      }
    }
  });


 // preloader
  let counter = 0,
    count = 0;
  const preloadCounter = document.querySelector(".preload-counter");
  if (preloadCounter !== null) {
    if (typeof fullpage_api !== "undefined") {
      fullpage_api.setAllowScrolling(false);
    }
    let progress = setInterval(() => {
      preloadCounter.innerHTML = count;
      document.querySelector(".preload-bar").style.width = count + "%";

      counter++;
      count++;

      counter++;
      count++;
      if (counter > 100) {
        clearInterval(progress);
        setTimeout(() => {
          // document.querySelector(".preloader").classList.add("hide");
          document.querySelector(".preload-content").style.maxWidth = "100%";
          document.querySelector("body").classList.remove("menu-open");
          if (typeof fullpage_api !== "undefined") {
            fullpage_api.setAllowScrolling(true);
          }
        }, 300);
      }
    }, 35);
    setTimeout(() => {
      document.querySelector(".preload-bar").style.width = "0%";
      document.querySelector(".preload-content").style.maxWidth = "auto";
      preloadCounter.innerHTML = 0;
    }, 4500);
  }


function startAni(event) {
    // console.log('scroll');
    if ($(".slider-wrapper").hasClass("pinned")) {
      if(window.innerWidth > 425)
      {
        if(window.innerWidth <= 1440){
          if (event.deltaY < 0) {
            if (slideTarget.attr("trans") == 2) {
               slideTarget.css({
                 transform: "translateY(-30%)",
               });
               setTimeout(() => {
                 slideTarget.attr("trans", 1);
               }, 1250);
             } 
             
             else if (slideTarget.attr("trans") == 1) {
               slideTarget.css({
                 transform: "translateY(0%)",
               });
               setTimeout(() => {
                 slideTarget.attr("trans", 0);
               }, 1250);
             } else if (slideTarget.attr("trans") == 0) {
               $(".slider-wrapper").removeClass("pinned");
               if (typeof fullpage_api !== "undefined") {
                 fullpage_api.setAllowScrolling(true);
               }
               fullpage_api.moveSectionUp();
             }
           } 
           else if (event.deltaY > 0) {
             // console.log("scrolling down");
             if (slideTarget.attr("trans") == 0) {
               slideTarget.css({
                 transform: "translateY(-30%)",
               });
               setTimeout(() => {
                 slideTarget.attr("trans", 1);
               
               }, 1250);
             } else if (slideTarget.attr("trans") == 1) {
               slideTarget.css({
                 transform: "translateY(-50%)",
               });
               setTimeout(() => {
                 slideTarget.attr("trans", 2);
               
               }, 1250);
             } else if (slideTarget.attr("trans") == 2) {
               $(".slider-wrapper").removeClass("pinned");
               if (typeof fullpage_api !== "undefined") {
                 fullpage_api.setAllowScrolling(true);
               }
               fullpage_api.moveSectionDown();
             }
               
           }
        }
        else if(window.innerWidth > 1440) {
          if (event.deltaY < 0) {
           if (slideTarget.attr("trans") == 2) {
              slideTarget.css({
                transform: "translateY(-20%)",
              });
              setTimeout(() => {
                slideTarget.attr("trans", 1);
              }, 1250);
            } 
            
            else if (slideTarget.attr("trans") == 1) {
              slideTarget.css({
                transform: "translateY(0%)",
              });
              setTimeout(() => {
                slideTarget.attr("trans", 0);
              }, 1250);
            } else if (slideTarget.attr("trans") == 0) {
              $(".slider-wrapper").removeClass("pinned");
              if (typeof fullpage_api !== "undefined") {
                fullpage_api.setAllowScrolling(true);
              }
              fullpage_api.moveSectionUp();
            }
          } 
          else if (event.deltaY > 0) {
            // console.log("scrolling down");
            if (slideTarget.attr("trans") == 0) {
              slideTarget.css({
                transform: "translateY(-20%)",
              });
              setTimeout(() => {
                slideTarget.attr("trans", 1);
              
              }, 1250);
            } else if (slideTarget.attr("trans") == 1) {
              slideTarget.css({
                transform: "translateY(-40%)",
              });
              setTimeout(() => {
                slideTarget.attr("trans", 2);
              
              }, 1250);
            } else if (slideTarget.attr("trans") == 2) {
              $(".slider-wrapper").removeClass("pinned");
              if (typeof fullpage_api !== "undefined") {
                fullpage_api.setAllowScrolling(true);
              }
              fullpage_api.moveSectionDown();
            }
              
          }
        }
        
      }
    }
  }



  function startFooter(event) {
    if($(".footer__contact").hasClass("pinned")){
         if(event.deltaY < 0) {

          if(footerLink.attr("trans") == 2){
            footerTarget.css({
              transform: "translateX(-60%)",
            });
            footerTargetLeft.css({
              transform: "translateX(60%)",
            });
            setTimeout(() => {
              footerLink.attr("trans", 1);
            }, 250);
          }
          else if(footerLink.attr("trans") == 1){
            footerTarget.css({
              transform: "translateX(-30%)",
            });
            footerTargetLeft.css({
              transform: "translateX(30%)",
            });
            setTimeout(() => {
              footerLink.attr("trans", 0);
            }, 250);
          }
          else if(footerLink.attr("trans") == 0){
            footerTarget.css({
              transform: "translateX(0%)",
            });
            footerTargetLeft.css({
              transform: "translateX(0%)",
            });
            $(".footer__contact").removeClass("pinned");
            if (typeof fullpage_api !== "undefined") {
              fullpage_api.setAllowScrolling(true);
            }
            fullpage_api.moveSectionUp();
          }
         }
         else if(event.deltaY > 0) {
          if(footerLink.attr("trans") == 0){
            footerTarget.css({
              transform: "translateX(-20%)",
            });
            footerTargetLeft.css({
              transform: "translateX(20%)",
            });
            setTimeout(() => {
              footerLink.attr("trans", 1);
            }, 250);
          }
         else if(footerLink.attr("trans") == 1){
            footerTarget.css({
              transform: "translateX(-60%)",
            });
            footerTargetLeft.css({
              transform: "translateX(60%)",
            });
            setTimeout(() => {
              footerLink.attr("trans", 2);
            }, 250);
          }
          else if(footerLink.attr("trans") == 2){
             footerTarget.css({
               transform: "translateX(-85%)",
             });
             footerTargetLeft.css({
               transform: "translateX(85%)",
             });
             $(".footer__contact").removeClass("pinned");
             if (typeof fullpage_api !== "undefined") {
               fullpage_api.setAllowScrolling(true);
             }
             fullpage_api.moveSectionDown();
           }
          }

    }
  }

 /**
  * Sticky Cursor with Delay
  */
  function initStickyCursorWithDelay() {
      
    // Sticky Cursor with delay
    // https://greensock.com/forums/topic/21161-animated-mouse-cursor/
    var cursorBtn = $(".mouse-pos-list-btn");
    var cursorSpan = $(".mouse-pos-list-span");
  
  
    var posXBtn = 0
    var posYBtn = 0
    var posXSpan = 0
    var posYSpan = 0
    var mouseX = 0
    var mouseY = 0
  
    if(document.querySelector(".mouse-pos-list-btn, .mouse-post-list-span")) {
    gsap.to({}, 0.0083333333, {
      repeat: -1,
      onRepeat: function() {
  
  
        if(document.querySelector(".mouse-pos-list-btn")) {
          posXBtn += (mouseX - posXBtn) / 7;
          posYBtn += (mouseY - posYBtn) / 7;
          gsap.set(cursorBtn, {
            css: {
            left: posXBtn,
            top: posYBtn
            }
          });
        }
        if(document.querySelector(".mouse-pos-list-span")) {
          posXSpan += (mouseX - posXSpan) / 6;
          posYSpan += (mouseY - posYSpan) / 6;   
          gsap.set(cursorSpan, {
            css: {
            left: posXSpan,
            top: posYSpan
            }
          });
        }
      }
    });
    }
  
    $(document).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    // Animated Section Assortiment Single Floating Image
    // Source: http://jsfiddle.net/639Jj/1/ 
  
    $('.blog__item').on('mouseenter', function() {
      $('.mouse-pos-list-btn, .mouse-pos-list-span').addClass('active-big');
      $('.custom-cursor-wrapper').addClass("d-none");
    });
    $('.blog__item').on('mouseleave', function() {
      $('.mouse-pos-list-btn, .mouse-pos-list-span').removeClass('active-big');
      $('.custom-cursor-wrapper').removeClass("d-none");

    });
   
  }

  /**
* Magnetic Buttons
*/
function initMagneticButtons() {
    
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  var magnets = document.querySelectorAll('.magnetic');
  var strength = 100;
  
  // START : If screen is bigger as 540 px do magnetic
  if(window.innerWidth > 540){
  // Mouse Reset
  magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    $(this.parentNode).removeClass('not-active');
    magnet.addEventListener('mouseleave', function(event) {
        gsap.to( event.currentTarget, 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
        gsap.to( $(this).find(".btn-text"), 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
    });
  });

  // Mouse move
  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var magnetsStrength = magnetButton.getAttribute("data-strength");
    var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
      
    gsap.to( magnetButton, 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
    gsap.to( $(this).find(".float-img"), 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
  }

  }; // END : If screen is bigger as 540 px do magnetic

  // Mouse Enter
  $('.floating-img-wrapper.magnetic').on('mouseenter', function() {
    if($(this).find(".float-img").length) {
    gsap.to($(this).find(".float-img"), .6, {
        startAt: {y: "36%"},
        y: "0%",
        ease: Power2.easeInOut
    });
    }
    if($(this).find(".btn-text-inner.change").length) {
    gsap.to($(this).find(".btn-text-inner.change"), .3, {
        startAt: {color: "#1C1D20"},
        color: "#FFFFFF",
        ease: Power3.easeIn,
    });
    }
    $(this.parentNode).removeClass('not-active');
  });

  // Mouse Leave
  $('.floating-img-wrapper.magnetic').on('mouseleave', function() {
    if($(this).find(".float-img").length) {
    gsap.to($(this).find(".float-img"), .6, {
        y: "-36%",
        ease: Power2.easeInOut
    });
    }
    if($(this).find(".btn-text-inner.change").length) {
    gsap.to($(this).find(".btn-text-inner.change"), .3, {
        color: "#1C1D20",
        ease: Power3.easeOut,
        delay: .3
    });
    }
    $(this.parentNode).removeClass('not-active');
  });
}


initMagneticButtons();
  initStickyCursorWithDelay();

  document.addEventListener("mousemove", parallax);
  function parallax(e){
     this.querySelectorAll('.float-img').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
     })
  }
  
  let slideTarget = $('.slider-wrapper-inner')
  let footerTarget = $('.contact__text')
  let footerTargetLeft = $('.contact__text.left')
  let footerLink = $('.contact__link')
  // window.addEventListener("wheel", (e) => aniInit(e));
  window.addEventListener("wheel", (e) => startAni(e));
  window.addEventListener("wheel", (e) => startFooter(e));

})


