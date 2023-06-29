const form1 = document.querySelector('#form1');
const emailInput = document.querySelector('#email');

const checkValid = (inputElement) => {
    if (inputElement.checkValidity()) {
        console.log('Valid true');
    } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity('Wrong format, please type email');
    }
};

emailInput.addEventListener('input', () => {
    checkValid(emailInput);
});

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submitted');
    // checkValid(emailInput);
})

