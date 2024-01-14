const form=  document.querySelector("form"),
   nameField =  form.querySelector(".text-field"),
   nameInput =  nameField.querySelector(".name"),
   emailField =  form.querySelector(".email-field"),
   emailInput =  emailField.querySelector(".email"),
   passField =  form.querySelector(".create-password"),
   passInput =  passField.querySelector(".password"),
   cPassField =  form.querySelector(".confirm-password"),
   cPassInput =  cPassField.querySelector(".cpassword");

   //name validation

   function checkname(){
    const namePattern = /^[a-zA-Z ]{2,30}$/;
    if (!nameInput.value.match(namePattern)){
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
   }

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

   //confirm password validation

   function confirmPass() {
     if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
   }

   //calling function on form submit

   form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkname();
    checkEmail();
    createPass();
    confirmPass();

    //calling function on key up
    nameInput.addEventListener("keyup", checkname);
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if (
        !nameField.classList.contains("invalid") &&
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ){
        location.href = form.getAttribute("action");
    }
   });