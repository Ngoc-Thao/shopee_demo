var regBtn = document.querySelector('.js__btn-reg');
var logInBtn = document.querySelector('.js__btn-logIn');
var openAuthFrom = document.querySelector('.auth-from')
var openAuthFrom = document.querySelector('.auth-from')

function showBuyTicket() {
    modal.classList.add('open')
}

function shutDownTicket() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}
for (const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', shutDownTicket)
}