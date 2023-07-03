// modal trigger btn
let isModalAlreadyOpen = false;
const body = document.querySelector("body"),
  modalBtn = document.querySelectorAll(".modal-btn"),
  modalCloseBtn = document.querySelector(".hide-modal"),
  modalBtnNav = document.querySelector(".btn-nav.modal-btn");

let hideModal = () => {
  if (isModalAlreadyOpen === true) {
    modalCloseBtn.click();
    isModalAlreadyOpen = false;
    body.classList.remove("menu-open");
    resetModal();
  }
};

let resetModal = () => {
  document.getElementById("inquiry-error").style.display = "none";
  document.querySelector(".first-pop").classList.add("active");
  document.querySelector(".second-pop").classList.remove("active");
  document.querySelector(".third-pop").classList.remove("active");
};

modalBtn.forEach((el) => {
  el.addEventListener("click", () => {
    if (isModalAlreadyOpen) {
      body.classList.remove("menu-open");
      isModalAlreadyOpen = false;
      if (document.querySelector("#fullpage") !== null) {
        if (window.innerWidth > 767) {
          fullpage_api.setAllowScrolling(true);
        }
      }
    } else {
      body.classList.add("menu-open");
      isModalAlreadyOpen = true;
      if (document.querySelector("#fullpage") !== null) {
        if (window.innerWidth > 767) {
          fullpage_api.setAllowScrolling(false);
        }
      }
    }
  });
});

// document.querySelector(".form-wrapper").addEventListener("click", (e) => {
//   if (!document.getElementById("contactForm").contains(e.target)) {
//     hideModal();
//   }
// });

// document.querySelector(".hide-modal").addEventListener("click", (e) => {
//   resetModal();
// });

// document.querySelector("#inquiry-close").addEventListener("click", (e) => {
//   hideModal();
// });

// modalCloseBtn.addEventListener("click", (e) => {
//   isModalAlreadyOpen = false;
//   body.classList.remove("menu-open");
//   if (document.querySelector("#fullpage") !== null) {
//     if (window.innerWidth > 767) {
//       fullpage_api.setAllowScrolling(true);
//     }
//   }
// });

// modalBtnNav.addEventListener("click", (e) => {
//   document.querySelector(".nav-hamburger").click();
//   body.classList.add("menu-open");
//   isModalAlreadyOpen = true;
//   if (document.querySelector("#fullpage") !== null) {
//     if (window.innerWidth > 767) {
//       fullpage_api.setAllowScrolling(false);
//     }
//   }
// });