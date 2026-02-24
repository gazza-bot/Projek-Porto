
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.isIntersecting);
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

const toggleMenu = document.getElementById("toggleMenu");
const mobile_menu = document.getElementById("menuMobile");

toggleMenu.addEventListener("click", () => {
  mobile_menu.classList.toggle("menu-transition");
});

document.addEventListener("click", (e)=>{
  if(!mobile_menu.contains(e.target) && !toggleMenu.contains(e.target)) {
    mobile_menu.classList.remove("menu-transition")
  }
})

document.querySelectorAll("#menuMobile a").forEach((link) =>{
  link.addEventListener("click", ()=>{
    mobile_menu.classList.remove("menu-transition")
  })
})

const md_query = window.matchMedia("(min-width: 768px)");

md_query.addEventListener("change", (e) => {
  if (e.matches) {
    mobile_menu.classList.add("hidden");
    mobile_menu.classList.remove("menu-transition")
  } else {
    mobile_menu.classList.remove("hidden");
  }
});
