document.querySelector('.btn-menu').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'block'
})

document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none'
})

let count = 1
document.querySelector("#slide1").checked = true
setInterval(nextImage, 5000)

function nextImage() {
    count++
    if(count > 4) count = 1
    document.querySelector("#slide" + count).checked = true
}