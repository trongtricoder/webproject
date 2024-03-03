const errorAlert = document.getElementById("errorAlert");
const signupBtn = document.getElementById("signup-btn");
const mailInput = document.getElementById("mail");
const passwordInput = document.getElementById("pass");
const signupform = document.getElementById("signup-form")

let accounts = [];

if (localStorage.getItem("accounts")) {
  accounts = JSON.parse(localStorage.getItem("accounts"));
}

signupBtn.addEventListener("click", () => {
    const mail = mailInput.value.trim();
    const password = passwordInput.value.trim();

    errorAlert.style.display = "none"; 

    if (mail.length === 0) {
        errorAlert.textContent = "Please enter your email";
        errorAlert.style.display = "block";
        return;
    }

    if (!validateEmail(mail)) {
        errorAlert.textContent = "Please enter a valid email address";
        errorAlert.style.display = "block";
        return;
    }

    if (password.length < 8) {
        errorAlert.textContent = "Password must be at least 8 characters long";
        errorAlert.style.display = "block";
        return;   
    }

    if (accounts.some((account) => account.mail === mail)){
        errorAlert.textContent = "Email already exists";
        errorAlert.style.display = "block";
    } 
    else{
        accounts.push({ mail, password });
        localStorage.setItem("accounts", JSON.stringify(accounts));
        errorAlert.textContent = "Account created successfully!";
        errorAlert.style.display = "block";
        mailInput.value = "";
        passwordInput.value = "";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
    }
});

signupBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(email);
}
