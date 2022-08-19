// get value from input field
const getValueFromInput = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
        inputField.value = '';
    return inputValue;
}
// get value from dedicated field
const getValueFromSection = (id) => {
    const sectionFieldValue = document.getElementById(id).innerText;
    return parseFloat(sectionFieldValue);
}
// set the value to deposite field
const setValueToDepositeField = (fieldBalance, inputFieldBalance, totalBalance , dedicatedField) => {
    if(inputFieldBalance){
        const calculatedDeposite = fieldBalance + inputFieldBalance;
        document.getElementById(dedicatedField).innerText = calculatedDeposite;
        document.getElementById(totalBalance).innerText = getValueFromSection(totalBalance) + inputFieldBalance;
    }else{
        alert('Please enter the amount in number.')
    }
}
// set the value to withdraw field
const setValueToWithdrawField = (fieldBalance, inputFieldBalance, totalBalance, dedicatedField) => {
    if(inputFieldBalance){
        const calculatedWithdraw = fieldBalance + inputFieldBalance;
        if(getValueFromSection(totalBalance) >= inputFieldBalance){
            document.getElementById(totalBalance).innerText = getValueFromSection(totalBalance) - inputFieldBalance;
            document.getElementById(dedicatedField).innerText = calculatedWithdraw;
        }else{
            alert('Sorry you do not have enough balance on yout account.')
        }
        
    }else{
        alert('Please enter the amount in number')
    }
}
