if (window.innerWidth > 1000) {
  document.querySelector(".desno").style.transform = "translateY(0px)";
  document.querySelectorAll("nav ul li a").forEach((e) => {
    e.style.display = "block";
  });
} else if (window.innerWidth) {
  document.querySelector(".desno").style.transform = "translateY(-50px)";
  document.querySelectorAll("nav ul li a").forEach((e) => {
    e.style.display = "none";
  });
}
window.onresize = function resize() {
  if (window.innerWidth > 1000) {
    document.querySelector(".desno").style.transform = "translateY(0px)";
    document.querySelectorAll("nav ul li a").forEach((e) => {
      e.style.display = "block";
    });
  } else if (window.innerWidth) {
    document.querySelector(".desno").style.transform = "translateY(-50px)";
    document.querySelectorAll("nav ul li a").forEach((e) => {
      e.style.display = "none";
    });
  }
};
const navbar = () => {
  if (document.querySelector("nav ul li a").style.display == "none") {
    document.querySelector(".desno").style.transform = "translateY(0px)";
    document.querySelector(".desno").style.transition = "all 1.5s";
    document.querySelectorAll("nav ul li a").forEach((e) => {
      e.style.display = "block";
      e.style.transition = "all 0.3s 0.05s";
    });
  } else {
    document.querySelector(".desno").style.transform = "translateY(-50px)";

    document.querySelectorAll("nav ul li a").forEach((e) => {
      e.style.display = "none";
      e.style.transition = "all 0.3s 0.05s";
    });
  }
};
