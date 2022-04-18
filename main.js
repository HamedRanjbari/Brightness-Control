let $ = document
let body = $.body
let range = $.querySelector(".range")
let image = $.querySelector(".image")
let text = $.querySelector(".text")
let control = $.querySelector(".control")
let changeBtn = $.querySelector(".changeBtn")

range.addEventListener("change", (event) => {
    image.style.filter = "brightness(" + event.target.value+"%)"
    text.innerHTML = event.target.value + "%"
})
changeBtn.addEventListener("click", () => {
    let timer = setInterval(() => {
        control.style.transform = "translateY(0)"
        clearInterval(timer)
    }, 100);
    setTimeout(() => {
        control.style.transform = "translateY(-800%)"
    }, 5000);
})