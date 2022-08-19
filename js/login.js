// Step one: Add submit handler
const form = document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();
        // Step two: get the value from email input
        const emailField = document.getElementById('email').value;
        // Step three: get the value from password field
        const passWordField = document.getElementById('pass').value;
        // Step four: Compare the validity
        if(emailField == 'imtiajul37@gmail.com' && passWordField == '1234'){
            // setting the page what will be visiable if valid user
            location = 'html/transaction.html'
        }else{
            alert('Please enter the correct information..')
        }
    })