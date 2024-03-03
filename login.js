const check = localStorage.getItem("accounts")
const loginBtn = document.getElementById("login-btn")
const mailInput = document.getElementById("mail");
const passwordInput = document.getElementById("pass");
const errorAlert = document.getElementById("errorAlert");

let users = localStorage.getItem("accounts") 

loginBtn.addEventListener("click", () => {
    const mail = mailInput.value.trim();
    const password = passwordInput.value.trim();

    for (i = 0; i < users.length; i++){
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
        if (mail != users[i].mail){
            errorAlert.textContent = "The email doesn't exist";
            errorAlert.style.display = "block";
            return;
        }
        if (password != users[i].password){
            errorAlert.textContent = "Wrong password";
            errorAlert.style.display = "block";
            return;
        }
        else{
            errorAlert.textContent = "Login successful";
            errorAlert.style.display = "block";
            mailInput.value = "";
            passwordInput.value = "";
            setTimeout(()=>{
                window.location.href = "home.htm;"
            }, 1000);
        }
    }
   
}
)

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(email);
}
