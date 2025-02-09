//Event listener to trigger runbutton() function if submit button is clicked
document.getElementById('submitform').addEventListener("click", runbutton);

//Function that runs when the submit button on the form is pressed
function runbutton() {

    //Set up initial variables from form to operate upon
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;

    //Log values of variables to the console
    console.log(firstname);
    console.log(lastname);
    console.log(age);
    console.log(email);

    
    //Define greetuser function to greet the user and display their age in months
    function greetuser() {
        let name = firstname + " " + lastname;
        document.getElementById('secretmessage').innerHTML = "Hello " + name + " welcome to the page<br>" + "You are " + (age * 12) + " months old<br>" + "Your email address is " + email;
    }

    //Perform basic error checking upon form including empty fields
    if(email.includes("@") == false){
        alert("Error: Email inputted incorrectly")
        console.log("Error: Email inputted incorrectly");
    }
    if(firstname == '' || lastname == '' || age == '' || email == '') {
        alert("Error: Empty values in form please fill form");
        console.log("Error: Empty values in form please fill form");
    }
    //If error checking passes successfully run greetuser function
    else{
        greetuser();
    }  
}

