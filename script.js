const btnElement = document.querySelector(".btn");
const inputElement = document.getElementById("input");
const copyIconElement = document.querySelector(".fa-copy");
const alertContainerElement = document.querySelector(".alert-container");
const lenElement = document.getElementById("len");

btnElement.addEventListener("click", () => {
    if (lenElement.value >= 5 && lenElement.value <= 16) {
        createPassword();
        // console.log(lenElement.min);
        // console.log(lenElement.max);
        // above two lines prints the min and max as given in index.html
    }
    else {
        inputElement.value = "";
        alertContainerElement.innerHTML = "Password length must be between 5 and 16";
        showAlert();
    }
});

copyIconElement.addEventListener("click", () => {
    if (inputElement.value) {
        copyPassword();
        showAlert();
    }
    else {
        alertContainerElement.innerHTML = "No password to copy!";
        showAlert();
    }
});

function createPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?:{}[]";

    // password length entered by user
    const passwordLength = lenElement.value;
    let password = "";

    // generating password
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }

    inputElement.value = password;
    alertContainerElement.innerHTML = password + " copied!";
}

function copyPassword() {
    // inputElement.select();
    // inputElement.setSelectionRange(0, 9999);
    // selectionRange is for mobile
    navigator.clipboard.writeText(input.value);
}

function showAlert() {
    alertContainerElement.classList.remove("active");
    setTimeout(() => {
        alertContainerElement.classList.add("active");
    }, 3000);
}