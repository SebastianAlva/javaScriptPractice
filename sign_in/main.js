const myForm = document.querySelector("#my-form");
const username = document.querySelector("#nameBox");
const middleName = document.querySelector("#middleNameBox");
const LastNames = document.querySelector("#lastNamesBox");
const msg = document.querySelector("#msg");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
myForm.addEventListener("submit", onSubmit);
/*
    esta funcion se encarga de leer lo que este en la pagina, de esta manera validarlo, en caso de que alguna casilla no este llena se procedera a dar mensaje de error durante 3 segundos
*/
function onSubmit(e) {
    e.preventDefault();
    if (username.value === "" || middleName.value === "" || LastNames.value === "" || email.value === "" || password.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Pleasse enter all fields";
        setTimeout(() => msg.remove(), 3000);
    } else {
        let person = new Person(username.value, middleName.value, LastNames.value, email.value, password.value);
        console.log(person.getName());
        console.log(person.lenght(person.getName()));
        console.log(cipher(person.getName(), person.lenght(person.getName())));

    }
}