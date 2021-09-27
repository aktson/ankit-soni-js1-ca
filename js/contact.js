const msgContainer = document.querySelector(".msg-container");
const form = document.querySelector("form");


//input containers
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const button = document.querySelector("button");


// span error container
const nameSpan = document.querySelector(".name-span");
const subjectSpan = document.querySelector(".subject-span");
const emailSpan = document.querySelector(".email-span");
const addressSpan = document.querySelector(".address-span");

//form eventlistener
form.addEventListener("submit", checkInputData);

function checkInputData(e) {
        e.preventDefault();

        if (!name.value) {
            nameSpan.innerHTML = showMessage(`Name missing`,"error");
        }
        else {
            nameSpan.innerHTML = "";
        }
        if (!checkLength(subject.value, 10)) {
            subjectSpan.innerHTML = showMessage(`Subject missing`,"error");   
        }
        else {
            subjectSpan.innerHTML = "";
        }
        if (!checkEmail(email.value)) {
                emailSpan.innerHTML = showMessage(`not a valid email`,"error");
        }
        else {
            emailSpan.innerHTML = "";
        }
        if (!checkLength(address.value, 25)) {
            addressSpan.innerHTML = showMessage(`address must be 25 characters`,"error");   
        }
        else {
            addressSpan.innerHTML = "";
        }
        
        if (name.value && checkLength(subject.value, 10) && checkEmail(email.value) && checkLength(address.value, 25))  {
            msgContainer.innerHTML = showMessage("Success! Form has passed validation","success")
            form.reset(); 
        }
}

//checklength function
function checkLength(name, len) {

    if (name.trim().length >= len) {
        return true
    } else {
    showMessage(`${name} cannot be less than ${len}`, "error");
    }
};


//display error
function showMessage(msg, className) {
    return `<p class= "${className}">${msg}</p>`
};

//is valid email
function checkEmail (email) {
    const re = /\S+@\S+\.\S+/;
    const checkedEmail = re.test(email);
    return checkedEmail
}

