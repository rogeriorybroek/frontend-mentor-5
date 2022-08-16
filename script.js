const form = document.querySelector('.form')
const btnConfirm = document.querySelector('#btn-confirm')
const inputName = document.querySelector('#input-name')
const inputCard = document.querySelector('#input-card-num')
const inputMonth = document.querySelector('#input-month')
const inputYear = document.querySelector('#input-year')
const inputCvc = document.querySelector('#input-cvc')
const cardNum = document.querySelector('.card-num')
const cardName = document.querySelector('.card-name')
const cardDate = document.querySelector('.card-date')
const spanError = document.querySelectorAll('.span-error')


inputName.onkeyup = (e) => {
    const value = e.target.value
    cardName.innerHTML = value
    const span = e.target.nextSibling.nextSibling

    if (!value) {
        inputName.style.border = '2px solid red'
        span.style.display = 'block'
    } else {
        span.style.display = 'none'
        inputName.style.border = '1px solid var(--light-grayish-violet)'
    }
}

inputCard.onkeyup = (e) => {
    const value = e.target.value
    cardNum.innerHTML = value
    const span1 = e.target.nextSibling.nextSibling
    const span2 = e.target.nextSibling.nextSibling.nextSibling.nextSibling
    
    if (!value) {
        inputCard.style.border = '2px solid red'
        span1.style.display = 'block'
    } else {
        inputCard.style.border = '1px solid var(--light-grayish-violet)'
        span1.style.display = 'none'
    }

    if (value.length > 16) {
        inputCard.style.border = '2px solid red'
        span2.style.display = 'block'
    } else {
        inputCard.style.border = '1px solid var(--light-grayish-violet)'
        span2.style.display = 'none'
    }

}

inputMonth.onblur = (e) => {
    const value = e.target.value
    cardDate.innerHTML = value
    const span = e.target.parentElement.nextElementSibling
    
    if (!value) {
        span.style.display = 'block'
    } else {
        span.style.display = 'none'
    }
}

inputYear.onblur = (e) => {
    const value = e.target.value
    cardDate.innerHTML += `  / ${value}`
    const span = e.target.parentElement.nextElementSibling

    if (!value) {
        span.style.display = 'block'
    } else {
        span.style.display = 'none'
    }
}


btnConfirm.onsubmit = (e) => {
    console.log('oi')
}