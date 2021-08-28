function newAmountCalculation(inputAmountId) {
  const amount = document.getElementById(inputAmountId);
  const newAmount = parseFloat(amount.value);
  amount.value='';
  return newAmount;
}
function previousAmount(previousAmountId, newAmount) {
  const amount = document.getElementById(previousAmountId);
  let previousAmount = parseFloat(amount.innerText);
  if (newAmount > 500) {
      previousAmount = previousAmount + newAmount;
  }
  amount.innerText = previousAmount;
  return previousAmount;
}
function totalBalance(newAmount,isAdd){
  const balance=document.getElementById('balance');
  let previousBalance=parseFloat(balance.innerText);
  if(isAdd==true){
      previousBalance=newAmount+previousBalance;
  }
  else if(previousBalance>newAmount && isAdd==false){
      previousBalance=previousBalance-newAmount;
  }
  balance.innerText=previousBalance;
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
      const depositAmount = newAmountCalculation("deposit-input");

      const totalDepositNo = previousAmount(
          "previous-deposit",
          depositAmount
      );  
   totalBalance(totalDepositNo,true) 
});
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
      const withdrawAmount = newAmountCalculation("withdraw-input");
      const totalWithdrawNo = previousAmount(
          "previous-withdraw",
          withdrawAmount
      );
      totalBalance(totalWithdrawNo,false)
  });