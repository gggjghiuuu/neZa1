const main = document.querySelector(".info__data")
const HistoryTemplate = document.querySelector(".history")
const BalanceTemplate = document.querySelector(".balance__info")

const BalanceButton = document.querySelector(".choose__balance")
const HistoryButton = document.querySelector(".choose__history-of-findings")

BalanceButton.addEventListener("click", function(){
    functionActiveOrDisable(BalanceTemplate, HistoryTemplate);
})
HistoryButton.addEventListener("click", function(){
    functionActiveOrDisable(HistoryTemplate, BalanceTemplate);
})

// function func1(item) {
//     if (item.style.display !== 'none'){
//         item.style.display="none";
//     }else{
//         item.style.display="flex";
//     } 
// };
function functionActiveOrDisable(activeItem, disableItem, buttonActive, buttonDisable){
    if (activeItem.style.display !== 'none'){
        activeItem.style.display="none";
        disableItem.style.display = "flex";
        buttonActive.style.display = "none";
        buttonDisable.style.display = "flex"
    }else{
        activeItem.style.display="flex";
        disableItem.style.display="none";
        buttonActive.style.display = "flex";
        buttonDisable.style.display = "none"
    } 
}