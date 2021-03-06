let x = document.getElementsByClassName("links");
let ham = document.getElementById("hamburger-nav");
let sb = document.querySelector(".sidebar");
let xIcon = document.querySelector(".x-icon");
let sidebarLink = document.getElementsByClassName("sidebar-links");
let modalBtn = document.querySelector(".btn-modal");
let modalContainer = document.querySelector(".modal-container");
let modalClostBtn = document.querySelector(".modal-close-btn");
let toastCloseBtn = document.querySelector(".x-toast");
let toastContainer = document.querySelector(".toast-container-hide");
let showToast = document.querySelector(".showToast");

showToast.addEventListener("click", () => {
  toastContainer.classList.toggle("toast-container");
  setTimeout(() => {
    toastContainer.classList.toggle("toast-container");
  }, 5000);
});
modalBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("modal-container-active");
});
modalClostBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("modal-container-active");
});

ham.addEventListener("click", () => {
  sb.classList.toggle("sidebar-active");
  xIcon.classList.toggle("x-icon-active");
});
xIcon.addEventListener("click", () => {
  sb.classList.toggle("sidebar-active");
  xIcon.classList.toggle("x-icon-active");
  console.log(sb, xIcon);
});
let link = Object.values(sidebarLink);
link.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (sb.classList.contains("sidebar-active") === true) {
      sb.classList.remove("sidebar-active");
      xIcon.classList.remove("x-icon-active");
      console.log("in");
    }
  });
});
