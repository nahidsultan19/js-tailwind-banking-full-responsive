// handle deposit input 

const deposit = document.getElementById('deposit-button');

deposit.addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(newDepositAmount);
    if (newDepositAmount < 0) {
        alert('Please enter positive value only..')
    } else if (isNaN(newDepositAmount)) {
        alert('Please enter only integer value...')
    } else {
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
    }

    // clear input field
    depositInput.value = '';



});

// handle withdraw 

const withdraw = document.getElementById('withdraw-button');

withdraw.addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    // console.log(withdrawAmount);
    // for validation check
    const balance = parseFloat(document.getElementById('balance-total').innerText);
    console.log(withdrawAmount, balance)

    if (withdrawAmount < 0) {
        alert('Please enter positive value only...')
    } else if (isNaN(withdrawAmount)) {
        alert('Please enter integer value only..')
    } else if (withdrawAmount > balance) {
        alert('Can not withdraw..')
    } else {
        // Update withdraw amount
        const withdrawTotal = document.getElementById('withdraw-total');
        const prevWithdrawAmount = withdrawTotal.innerText;
        const newTotalWithdraw = parseFloat(prevWithdrawAmount) + withdrawAmount;
        withdrawTotal.innerText = newTotalWithdraw;

        // update balace after withdraw
        const balanceTotal = document.getElementById('balance-total');
        const prevBalanceAmount = parseFloat(balanceTotal.innerText);
        const newBalanceAmount = prevBalanceAmount - withdrawAmount;
        balanceTotal.innerText = newBalanceAmount;
    }




    // clear input field
    withdrawInput.value = '';
});