
// Open full-size image
document.querySelectorAll(".btn-view").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const imgSrc = btn.getAttribute("data-img");
    const modal = document.getElementById("imageModal");
    const fullImg = document.getElementById("fullImage");
    fullImg.src = imgSrc;
    modal.style.display = "flex";
  });
});

// Close modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("imageModal").style.display = "none";
});

// Close when clicking outside image
document.getElementById("imageModal").addEventListener("click", e => {
  if (e.target.id === "imageModal") {
    e.currentTarget.style.display = "none";
  }
});

const toggler = document.getElementById("toggler-btn");
const menu = document.getElementById("dropdown-menu");
const wrapper = document.querySelector(".wrapper");
const navbar = document.querySelector("header nav");

function adjustWrapperMargin() {
  // navbar ki total height nikaal lo
  const navbarHeight = navbar.offsetHeight;

  // agar menu open hai to uski total height add karo
  const dropdownHeight = menu.classList.contains("show") ? menu.scrollHeight : 0;

  // dono heights ko mila ke wrapper ki margin set karo
  wrapper.style.marginTop = navbarHeight + dropdownHeight + "px";
}

toggler.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("show");
  adjustWrapperMargin();
});

// dropdown band hone par bhi wrapper reset
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggler.contains(e.target)) {
    menu.classList.remove("show");
    adjustWrapperMargin();
  }
});

// resize aur load dono par calculation sahi rahe
window.addEventListener("resize", adjustWrapperMargin);
window.addEventListener("load", adjustWrapperMargin);
