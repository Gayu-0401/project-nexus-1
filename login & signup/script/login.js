const form=  document.querySelector("form"),
   emailField =  form.querySelector(".email-field"),
   emailInput =  emailField.querySelector(".email"),
   passField =  form.querySelector(".create-password"),
   passInput =  passField.querySelector(".password");

   //email validation

   function checkEmail(){
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)){
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
   }

   //hide and show password

   const eyeIcons = document.querySelectorAll(".fa-eye-slash");

   eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        pInput.type = "password";
    });
   });

   //password validation

   function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
   }

   //calling function on form submit

   form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    createPass();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid")
    ){
        location.href = form.getAttribute("action");
    }
   });