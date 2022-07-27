
const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    

    event.currentTarget.reset();
}