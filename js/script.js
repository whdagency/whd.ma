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




function startAni(event) {
    // console.log('scroll');
    if ($(".slider-wrapper").hasClass("pinned")) {
      if(window.innerWidth > 425)
      {
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
      if(window.innerWidth <= 425){
        if (event.deltaY < 0) {
          if (slideTarget.attr("trans") == 3) {
            slideTarget.css({
              transform: "translateY(-40%)",
            });
            setTimeout(() => {
              slideTarget.attr("trans", 2);
            }, 1500);
          } 
        else if (slideTarget.attr("trans") == 2) {
            slideTarget.css({
              transform: "translateY(-20%)",
            });
            setTimeout(() => {
              slideTarget.attr("trans", 1);
            }, 1500);
          } 
          
          else if (slideTarget.attr("trans") == 1) {
            slideTarget.css({
              transform: "translateY(0%)",
            });
            setTimeout(() => {
              slideTarget.attr("trans", 0);
            }, 500);
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
            
            }, 1500);
          } else if (slideTarget.attr("trans") == 1) {
            slideTarget.css({
              transform: "translateY(-40%)",
            });
            setTimeout(() => {
              slideTarget.attr("trans", 2);
            
            }, 1500);
          } else if (slideTarget.attr("trans") == 2) {
            slideTarget.css({
              transform: "translateY(-65%)",
            });
            setTimeout(() => {
              slideTarget.attr("trans", 3);
            
            }, 1500);
          }

          else if(slideTarget.attr("trans") == 3){
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
  
  let slideTarget = $('.slider-wrapper-inner')
  let footerTarget = $('.contact__text')
  let footerTargetLeft = $('.contact__text.left')
  let footerLink = $('.contact__link')
  // window.addEventListener("wheel", (e) => aniInit(e));
  window.addEventListener("wheel", (e) => startAni(e));
  window.addEventListener("wheel", (e) => startFooter(e));

 // Blog hover section
 let text = document.querySelectorAll(".text-wrapper.ani-hover"),
 parentSection = document.querySelector(".mouse-ani-sect");
let mouse = {
 x: Math.abs(document.documentElement.clientWidth * 0.5),
 y: Math.abs(document.documentElement.clientHeight * 0.15),
};

if (parentSection !== null && window.innerWidth > 991) {

 const updateCoordinates = (e) => {
   mouse.x = e.clientX;
   mouse.y = e.clientY;
 };

 document.addEventListener("mousemove", function(event) {
  const x = event.pageX - 10;
  const y = event.pageY - 10;
  const cursor = document.querySelector("#cursor");
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

 text.forEach((el) => {
   el.addEventListener("mouseover", () => {
     
     $('#cursor').css('transform', 'scale(2)')
   });

   el.addEventListener("mouseout", () => {
    $('#cursor').css('transform', 'scale(1)')
   });
 });
 parentSection.addEventListener("mousemove", (e) => {
   updateCoordinates(e);
 });

 function loop() {
   requestAnimationFrame(loop);
 }
 requestAnimationFrame(loop);
}
})


