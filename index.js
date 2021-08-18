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
        let loss = (initial - current) * quantity
        let lossPercentage = (loss/initial) * 100;
        displayOutput(`The loss is ${loss} and the percentage loss is ${lossPercentage}%`);
    }else if(initial < current){
        //profit
        let profit = (current - initial) * quantity
        let profitPercentage = (profit / initial) * 100;
        displayOutput(`The profit is ${profit} and the percentage profit is ${profitPercentage}%`);
    }else{
        //no profit no loss
        displayOutput("HOHOHO");
    }
}

submitBtn.addEventListener('click', stonksCalculator)