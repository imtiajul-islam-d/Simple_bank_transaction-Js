document.getElementById('withdraw-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const currentWithdrawBalance = getValueFromSection('current-withdraw');
    const inputWithdrawBalance = getValueFromInput('withdraw-field');
    setValueToWithdrawField(currentWithdrawBalance, inputWithdrawBalance, 'total-amount', 'current-withdraw' );
})
