// handle deposit input 

const deposit = document.getElementById('deposit-button');

deposit.addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(newDepositAmount);

    // Update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const prevDepositAmount = depositTotal.innerText;
    const newTotalDeposit = parseFloat(prevDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newTotalDeposit;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanaceAmount = balanceTotal.innerText;
    const newTotalBalance = parseFloat(prevBalanaceAmount) + parseFloat(newDepositAmount);

    balanceTotal.innerText = newTotalBalance;

    // clear input field
    depositInput.value = '';
});

// handle withdraw 

const withdraw = document.getElementById('withdraw-button');

withdraw.addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    console.log(withdrawAmount);

    // Update withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithdrawAmount = withdrawTotal.innerText;
    const newTotalWithdraw = parseFloat(prevWithdrawAmount) + parseFloat(withdrawAmount)
    withdrawTotal.innerText = newTotalWithdraw;

    // update balace after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const prevBalanceAmount = balanceTotal.innerText;
    const newBalanceAmount = parseFloat(prevBalanceAmount) - parseFloat(withdrawAmount);

    balanceTotal.innerText = newBalanceAmount;


    // clear input field
    withdrawInput.value = '';
});