document.getElementById('deposite').addEventListener('submit', (event) => {
    event.preventDefault();
    const fieldBalance = getValueFromSection('currentDepositeAmount');
    const inputFieldBalance = getValueFromInput('deposite-amount');
    setValueToDepositeField(fieldBalance, inputFieldBalance, 'total-amount', 'currentDepositeAmount')
})