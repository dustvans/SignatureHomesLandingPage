document.addEventListener('DOMContentLoaded', function() {
    var mobileCta = document.getElementById('mobile-cta');
    var mobileExit = document.getElementById('mobile-exit');
    var nav = document.querySelector('.navbar nav');

    mobileCta.addEventListener('click', function() {
        nav.classList.add('active');
        mobileCta.style.display = 'none';
        mobileExit.style.display = 'block';
    });

    mobileExit.addEventListener('click', function() {
        nav.classList.remove('active');
        mobileCta.style.display = 'block';
        mobileExit.style.display = 'none';
    });
});



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