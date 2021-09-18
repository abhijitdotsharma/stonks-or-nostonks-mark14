const initialPrice = document.querySelector("#initial-price")
const stockQuantity = document.querySelector("#stock-quantity")
const currentPrice = document.querySelector("#current-price")
const submitBtn = document.querySelector("#submit-btn")
const outputEl = document.querySelector("#output-el")

function stonksCalculator(){
    const initialP = Number(initialPrice.value)
    const stockQty = Number(stockQuantity.value)
    const currentP = Number(currentPrice.value)

    calculateProfitLoss(initialP, stockQty, currentP)
}

function displayOutput(message){
    outputEl.innerText = message
}

function calculateProfitLoss(initial, quantity, current){
    if(initial > current){
        //loss

        let loss = (initial * quantity) - (final * quantity)
        let lossPercentage = (loss/(initial*quantity)) * 100;
        displayOutput(`The loss is ${loss} and the percentage loss is ${lossPercentage}%`);

    }else if(initial < current){
        //profit

        let profit = (current * quantity) - (initial * quantity)
        let profitPercentage = (profit / (initial * quantity)) * 100;
        displayOutput(`The profit is ${profit} and the percentage profit is ${profitPercentage}%`);

    }else{
        
        //no profit no loss
        displayOutput("No Profit No loss, Better luck next time.");
    }
}

submitBtn.addEventListener('click', stonksCalculator)