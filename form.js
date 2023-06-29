const form1 = document.querySelector('#form1');
const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const zipInput = document.querySelector('#zip');
const passwordInput = document.querySelector('#pswd');
const passError = document.querySelector('#pswd + .pswd-error');

const checkValid = (inputElement) => {
    if (inputElement.checkValidity()) {
        inputElement.setCustomValidity('');
    } else if (inputElement.validity.typeMismatch) {
        inputElement.setCustomValidity('Wrong format, please type email');
    }
};

const checkCountryPattern = (inputElement) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity('Invalid country format (Only letters)');
    } else {
        inputElement.setCustomValidity('');
    }
};

const checkZipValidity = (zipInput) => {
    if (zipInput.validity.patternMismatch) {
        inputElement.setCustomValidity('Invalid zip code');
    } else {
        inputElement.setCustomValidity('');
    }
};
console.log(passError);

passwordInput.addEventListener('input', () => {
    if (!passwordInput.checkValidity()) {
        if (passwordInput.validity.tooShort) {
            passError.textContent = 'Too Short';
        } else if (passwordInput.validity.tooLong) {
            passError.textContent = 'Too Long';
        }

    } else {
        passwordInput.setCustomValidity('');
    }
});


const checkPasswordValidation = (passwordInput) => {
    if (!passwordInput.checkValidity()) {
        if (passwordInput.validity.tooShort) {
            passError.textContent = 'Too Short';
        } else if (passwordInput.validity.tooLong) {
            passError.textContent = 'Too Long';
        }
    } else {
        passwordInput.setCustomValidity('');
    }
};

emailInput.addEventListener('input', () => {
    checkValid(emailInput);
});

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submitted');
    checkValid(emailInput);
    checkCountryPattern(countryInput);
    checkPasswordValidation(passwordInput);
})

