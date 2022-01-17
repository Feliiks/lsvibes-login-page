const loginBtn = document.querySelector('.btn-login')
const registerBtn = document.querySelector('.btn-register')

const underline = document.querySelector('.switch')
const charts = document.querySelectorAll('.chart')
const inputs = document.querySelectorAll('input')

const loginSection = document.querySelector('.section-login')
const registerSection = document.querySelector('.section-register')

Array.from(charts).forEach(chart => {
    chart.lastElementChild.addEventListener('focusin', () => {
        chart.classList.add('focused')
    })
    chart.lastElementChild.addEventListener('focusout', () => {
        if (!chart.lastElementChild.value) {
            chart.classList.remove('focused')
        }
    })
})

loginBtn.onclick = () => {
    registerBtn.style.color = "grey"
    loginBtn.style.color = "white"
    underline.style.transform = "translate(0, 0)"
    registerSection.classList.remove('section-active')
    loginSection.classList.add('section-active')
}

registerBtn.onclick = () => {
    loginBtn.style.color = "grey"
    registerBtn.style.color = "white"
    underline.style.transform = "translate(100%, 0)"
    loginSection.classList.remove('section-active')
    registerSection.classList.add('section-active')
}