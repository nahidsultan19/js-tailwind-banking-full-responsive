const login = document.getElementById('login-submit');
login.addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    console.log(userEmail, userPass)
    if (userEmail != 'email@gmail.com' || userPass != '12345') {
        alert('Please enter your email and password')
    } else {
        window.location.href = 'index.html'
    }



});