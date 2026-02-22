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
  mobile_menu.classList.toggle("hidden");
});

const md_query = window.matchMedia('(min-width: 768px)')

md_query.addEventListener('change',(e) => {
    if(e.matches){
      console.log(e.matches)
        mobile_menu.classList.add("hidden")
    }
})
