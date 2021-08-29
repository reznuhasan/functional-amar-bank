function newInputAmount(inputId){
    const inputAmount=document.getElementById(inputId);
    const newAmount=parseFloat(inputAmount.value);
    inputAmount.value=''
    return newAmount;
}
function amountCheck(amountInput){
   return parseFloat(document.getElementById(amountInput).innerText)
}
function updateAmount(fieldId,inputAmount){
    
    const previousAmount=amountCheck(fieldId)
    document.getElementById(fieldId).innerText=previousAmount+inputAmount;
}
function totalBalance(balaceId){
    const previousBalace=1240;
    const depositAmount=amountCheck('previous-deposit');
    console.log(depositAmount)
    const withdrawAmount=amountCheck('previous-withdraw');
    console.log(withdrawAmount)
    document.getElementById(balaceId).innerText=previousBalace+(depositAmount-withdrawAmount);
}
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount=newInputAmount('deposit-input')
    if(depositAmount>=0){
        updateAmount('previous-deposit',depositAmount);
        totalBalance('balance');
    }
});
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount=newInputAmount('withdraw-input')
    const currentBalance=amountCheck('balance');
    if(withdrawAmount>=0 && currentBalance>withdrawAmount){
        updateAmount('previous-withdraw',withdrawAmount);
        totalBalance('balance');
    }
});