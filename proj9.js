//Function to fetch cookie information and format it giving it a data field as the argument
function getCookie(name) {
    let value = document.cookie.split('; ').find(row => row.startsWith(name + '='));
    return value ? value.split('=')[1] : null;
}
  
//Function used to load preferences to the page and into the form
function loadPreferences() {
    //Using the getCookie() function to fetch the values for the data
    let bg = getCookie('bg');
    let text = getCookie('text');
    let size = getCookie('size');
  
    //Checks if the data for the cookie exists if it does it will apply it both to the page and the form
    if (bg) {
      document.getElementById('backgroundcolor').value = bg;
      document.body.style.backgroundColor = bg;
    }
  
    if (text) {
      document.getElementById('textcolor').value = text;
      document.body.style.color = text;
    }
  
    if (size) {
      document.getElementById('fontsize').value = size.replace('px', '');
      document.body.style.fontSize = size;
    }
}

//Function to write the url of the form and to apply changes
function writeurl(event) {
    event.preventDefault();
  
    //Fetches values from the form to do operations upon
    let backgroundColor = document.getElementById('backgroundcolor').value;
    let textColor = document.getElementById('textcolor').value;
    let fontSize = document.getElementById('fontsize').value;
  
    //Set cookies to have an expiration date to 1 day
    let now = new Date();
    now.setTime(now.getTime() + (1 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + now.toUTCString();
  
    //Saves the form preferences as a cookie
    document.cookie = `bg=${backgroundColor}; ${expires}; path=/`;
    document.cookie = `text=${textColor}; ${expires}; path=/`;
    document.cookie = `size=${fontSize}px; ${expires}; path=/`;
  
    //Applies the styles to the page
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    document.body.style.fontSize = fontSize + 'px';
}
  
//An event listener to listen for when the submit button is pressed and to load the preferences
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('custform').addEventListener('submit', writeurl);
  
    //Load preferences when the page is loaded
    loadPreferences();
});


function printhobbys(){
    //Defines the hobbies array, basic hobbyText to display, and selects all inputs on the document where the name is hobbies and that are checked
    let hobbyText = "Your hobbies are: ";
    let hobbies = [];
    let checkboxes = document.querySelectorAll('input[name="hobbies"]:checked');

    //Pushes the checkboxes to the hobbies array
    for (let i = 0; i < checkboxes.length; i++){
        hobbies.push(checkboxes[i].value);
    }

    //Checks to see if the hobbies array is empty and if not will loop through hobbies adding them to hobbyText
    //Will also add a comma to every item except the last
    //Lastly if no hobbies are found then it will change the hobbyText to reflect that the user has no hobbies
    if (hobbies.length > 0) {
        for (let i = 0; i < hobbies.length; i++) {
            hobbyText += hobbies[i];
            if (i < hobbies.length - 1) {
                hobbyText += ", ";
            }
        }
    } else {
        hobbyText = "You have no hobbies";
    }

    //Print the hobbyText to the screen
    document.getElementById("hobbytext").innerHTML = hobbyText;
}


function printfile(){
    //Function to print the contents of the file to the screen
    //Defines the userfile and if the userfile isn't found will print an error to the console
    let userfile = document.getElementById("fileupload").files[0];
    if (!userfile) {
        console.error("No file selected");
        return;
    }

    //Defines the filereader and tells the filereader to read the userfile
    let fr = new FileReader();
    fr.readAsText(userfile);

    //stores filecontent and changes the content to work with newlines
    fr.onload = function() {
        let fileContent = fr.result;
        document.getElementById("filetext").innerHTML = fileContent.replace(/\n/g, "<br>"); 
    };

    //Prints error to the console if there is an error reading the file
    fr.onerror = function() {
        console.error("Error reading file");
    };
}

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
