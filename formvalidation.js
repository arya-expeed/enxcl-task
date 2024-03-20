
function validateForm() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var address = document.getElementById('address').value;
    var phno = document.getElementById('phno').value;
    var qualification = document.getElementById('qualification').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validation rules
    
    var fnameRegex = /^[a-zA-Z]{4,}$/; 
    var lnameRegex = /^[a-zA-Z]{1,}$/; 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    var phnoRegex =/^[0-9]{10,}$/;

   
    document.getElementById('fnameError').innerHTML = '';
    document.getElementById('lnameError').innerHTML = '';
    document.getElementById('addressError').innerHTML = '';
    document.getElementById('phnoError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    
    if (!fname.match(fnameRegex)) {
        document.getElementById('fnameError').innerHTML = 'First Name must be at least 4 characters long and contain only letters.';
        return false;
    }

    if (!lname.match(lnameRegex)) {
        document.getElementById('lnameError').innerHTML = 'Last Name must be at least 1 character and contain only letters.';
        return false;
    }

    if (!address) {
        document.getElementById('addressError').innerHTML = 'Address is required.';
        return false;
    }
   
    if (!phno.match(phnoRegex)) {
        document.getElementById('phnoError').innerHTML = 'Phone Number must be at least 10 characters long and contain only Numbers.';
        return false;
    }

    if (!qualification) {
        document.getElementById('qualificationError').innerHTML = 'Please select your qualification.';
        return false;
    }
    if (!email.match(emailRegex)) {
        document.getElementById('emailError').innerHTML = 'Invalid email address.';
        return false;
    }

    
    if (!password.match(passwordRegex)) {
        document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.';
        return false;
    }

    // Form is valid
    return true;
}
