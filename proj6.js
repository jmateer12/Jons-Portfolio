function validateform(){
    //local variables to use to perform operations upon such as regex and different form elements to use
    let form = document.forms["userform"];
    let fullnameregex = /^[a-zA-Z ]+$/;
    let usernameregex = /^[a-zA-Z][a-zA-Z0-9]{5,14}$/;
    let emailregex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    let passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$/;
    let phoneregex = /^(\d{3})[-]?(\d{3})[-]?(\d{4})$/;
    let birthYear = new Date(form.elements["dob"].value).getFullYear();
    let currentYear = new Date().getFullYear();
    document.querySelectorAll(".error").forEach(el => el.remove());
    let valid = false;

    //Sub function to set an error message on a given field
    function setError(field, message) {
        let errorSpan = document.createElement("span");
        errorSpan.className = "error";
        errorSpan.textContent = message;
        field.parentNode.appendChild(errorSpan);
        valid = true;
    }

    //try and catch statements to do error checking on form fields
    //the try statements try for errors and if they find an error they will both print an error to the screen and the console
    try{
        if (!fullnameregex.test(form.elements["fullname"].value)) {
            setError(form.elements["fullname"], "Invalid full name.");
            throw new Error("Fullname field is invalid");
        }
    }catch(error) {
        console.error(error.message);
    }
    try{
        if (!usernameregex.test(form.elements["username"].value)) {
            setError(form.elements["username"], "Username must start with a letter and be 6-15 characters long.");
            throw new Error("Username field is invalid");
        }
    }catch(error) {
        console.error(error.message);
    }
    try{
        if (!emailregex.test(form.elements["email"].value)) {
            setError(form.elements["email"], "Invalid email format.");
            throw new Error("Email field is invalid");
        }
    }catch(error) {
        console.error(error.message);
    }
    try{
        if (!passwordregex.test(form.elements["password"].value)) {
            setError(form.elements["password"], "Password must be 8-20 characters with at least one uppercase, lowercase, digit, and special character.");
            throw new Error("Password field is invalid");
        }
    }catch(error) {
        console.error(error.message);
    }
    try{
        if (form.elements["password"].value != form.elements["confirpassword"].value) {
            setError(form.elements["confirpassword"], "Passwords do not match.");
            throw new Error("Confirm password doesn't match main password");
        }
    }catch(error) {
        console.error(error.message);
    }
    try{
        if (!phoneregex.test(form.elements["phonenum"].value)) {
            setError(form.elements["phonenum"], "Invalid phone number format.");
            throw new Error("Phone number is invalid");
        }
    }catch(error) {
        console.error(error.message);
    }
    try{
        if (currentYear - birthYear < 18) {
            setError(form.elements["dob"], "You must be at least 18 years old.");
            throw new Error("User is not 18 years or older");
        }
    }catch(error) {
        console.error(error.message);
    }
    try{
        if (form.elements["terms"].checked != true) {
            setError(form.elements["terms"], "You must agree to the terms.");
            throw new Error("User has not agreed to terms of conditions");
        }
    }catch(error) {
        console.error(error.message);
    }
}   

function imageoverlay(img){
    let origbody = document.body.innerHTML;
    document.body.innerHTML = '';

    //Create the image and button elements using createElement
    let image = document.createElement("img");
    let btn = document.createElement("button");

    image.src = img;
    image.style.height = "40%";
    image.style.width = "30%";
    image.style.display = "block";
    image.style.margin = "20px auto"; // Centering the image

    btn.innerHTML = "Click to return";
    btn.style.display = "block";
    btn.style.margin = "20px auto";
    btn.style.padding = "10px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "20px";

    //appending the image and button elements using appendChild
    document.body.appendChild(image);
    document.body.appendChild(btn);

    btn.addEventListener("click", function (){
        document.body.innerHTML = origbody;
    })
}

//Function to make nav buttons change color slightly upon hovering over them
function changenavcolor(id){
    document.getElementById(id).style.color = '#98fbcb';
    document.getElementById(id).style.fontSize = '230%';
}

function orignavcolor(id){
    document.getElementById(id).style.color = '#b2b2b2';
    document.getElementById(id).style.fontSize = '220%';
}

function facewink(id){
    document.getElementById(id).innerHTML = "Made by Jon Mateer ;&#41;";
}
