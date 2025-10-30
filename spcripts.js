// cotação de moedas do dia.
const USD = 4.87
const EUR = 4.87
const GBP = 4.87

//obtendo dados do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")


//manipulando o input amount para receber somente números
amount.addEventListener("input",  () => {
    const hasCharactersRegex = /\D+/g   
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
    converterCurrency(amount.value, USD, "US$")
    break
    case "EUR":
        converterCurrency(amount.value, EUR, "€")
    break
    case "GBP":
        converterCurrency(amount.value, GBP, "£")
    break
  }

}

//funçao para converter a moeda.
function converterCurrency(amount, price, symbol) {
    try {
        
        description.textContent = `${symbol} 1 = ${price}`
        footer.classList.add("show-result")

    } catch (error) {
        
        footer.classList.remove("show-result")
        
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }

}