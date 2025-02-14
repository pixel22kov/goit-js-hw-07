const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const emailField = form.elements.email;
    const passwordField = form.elements.password;

    const emailValue = emailField.value.trim();
    const passwordValue = passwordField.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("All form fields must be filled in");
        return;
    }
    
    const formData = {
        email: emailValue,
        password: passwordValue
    };
        
    console.log(formData);
    form.reset();
}

