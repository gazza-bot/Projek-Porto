const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
        }
    })
},{
    threshold: 0.5
})

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el)
})

const toggleMenu = document.getElementById("toggleMenu")
const mobile_menu = document.getElementById("menuMobile")

toggleMenu.addEventListener('click',()=>{
    mobile_menu.classList.toggle('hidden')
})
