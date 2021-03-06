const totalAmount = document.querySelector('.oklad_input')
const partialAmount = document.querySelector('.pertial_amount')
const descriptionOklad = document.querySelector('.discription-oklad')
const descriptionNaruki = document.querySelector('.discription-naruki')
const pdfo = document.querySelector('.pdfo')
const militaryTax = document.querySelector('.vz')

const vsPercent = 0.015
const ndflPercent = 0.18

function replacePoint () {
    partialAmount.value = partialAmount.value.toString().replace(',', '.'); 
    totalAmount.value = totalAmount.value.toString().replace(',', '.'); 
    
}


function numberWithSpaces() {
    const valuePartialWithoutSpases = partialAmount.value.toString().replace(" ", "");
    const valueTotalWithoutSpases = totalAmount.value.toString().replace(" ", "");
    partialAmount.value = valuePartialWithoutSpases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    totalAmount.value = valueTotalWithoutSpases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
}

function descriptionVisbility () {

    if (totalAmount.value.length >= 0) {
        pdfo.classList.add('visible')
        militaryTax.classList.add('visible')
        descriptionOklad.classList.add('visible')
        descriptionNaruki.classList.add('visible')
    }
    if (totalAmount.value <= 0) {
        pdfo.classList.remove('visible')
        militaryTax.classList.remove('visible')
        descriptionOklad.classList.remove('visible')
        descriptionNaruki.classList.remove('visible')
    }
}

function pdfoCount () {
    pdfo.textContent = "ПДФО 18%: " + (totalAmount.value * ndflPercent).toFixed(2) + ' грн.'
}
function militaryTaxCount () {
    militaryTax.textContent = "Військовий збір 1,5%: " + (totalAmount.value * vsPercent).toFixed(2) + ' грн.'
}

function totalAmountHeandler () {
    totalAmount.value = totalAmount.value.toString().replace(/\s+/g, '')
    partialAmount.value = (totalAmount.value - totalAmount.value * vsPercent - totalAmount.value * ndflPercent).toFixed(2)
}

function partialAmountHeandler () {
    partialAmount.value = partialAmount.value.toString().replace(/\s+/g, '')
    totalAmount.value = (partialAmount.value / 0.805).toFixed(2)
}

totalAmount.addEventListener("keyup", () => {
    replacePoint ()
    totalAmountHeandler()
    descriptionVisbility()
    pdfoCount()
    militaryTaxCount()
    numberWithSpaces()
})
partialAmount.addEventListener("keyup", () => {
    replacePoint ()
    partialAmountHeandler()
    descriptionVisbility()
    pdfoCount()
    militaryTaxCount()
    numberWithSpaces(partialAmount.value)
})


