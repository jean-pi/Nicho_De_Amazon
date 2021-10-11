window.addEventListener("scroll" , function(){
    let header = this.document.querySelector("header")
    let nav = this.document.querySelector("nav")

    header.classList.toggle("headerAnimacion", window.scrollY > 0)
    nav.classList.toggle("navAnimacion", window.scrollY > 0)
})