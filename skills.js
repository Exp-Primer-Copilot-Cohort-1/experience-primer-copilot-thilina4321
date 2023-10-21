// validate phone number
function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}

console.log(validatePhone('1234567890')); // true