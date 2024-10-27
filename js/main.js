const main = document.querySelector(".info__data")
const HistoryTemplate = document.querySelector(".history")
const BalanceTemplate = document.querySelector(".balance__info")

const BalanceButton = document.querySelector(".choose__balance")
const HistoryButton = document.querySelector(".choose__history-of-findings")

BalanceButton.addEventListener("click", function(){
    func1(BalanceTemplate);
})
HistoryButton.addEventListener("click", function(){
    func1(HistoryTemplate);
})

function func1(item) {
    if (item.style.display !== 'none'){
        item.style.display="none";
    }else{
        item.style.display="flex";
    } 
};
