


const inputs = document.querySelectorAll('input')

const patterns = {
    telephone:/^\d{7,11}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/i
};

//validation function
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    }
    else {
        field.className = 'invalid';
    }
}

//for each loop for input fields
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target,patterns[e.target.attributes.name.value]);
    })
})