const main = document.querySelector(".info__data")
const HistoryTemplate = document.querySelector(".history")
const BalanceTemplate = document.querySelector(".balance")

const BalanceButton = document.querySelector(".choose__balance")
const HistoryButton = document.querySelector(".choose__history-of-findings")

const item2 = HistoryTemplate.cloneNode(true);
const item1 = BalanceTemplate.cloneNode(true);

BalanceButton.addEventListener("click", function(){
    main.append(item1);
    func1(item1);
    console.log(item1);
})
HistoryButton.addEventListener("click", function(){
    main.append(item2);
    func1(item2);
    console.log(item2);
})

function func1(item) {
    if (item.style.display !== 'none'){
        item.style.display="none";
    }else{
        item.style.display="block";
    } 
};
