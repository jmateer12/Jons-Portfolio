//Function to make nav buttons change color slightly upon hovering over them
function changenavcolor(id){
    document.getElementById(id).style.color = '#98fbcb';
    document.getElementById(id).style.fontSize = '260%';
}

function orignavcolor(id){
    document.getElementById(id).style.color = '#b2b2b2';
    document.getElementById(id).style.fontSize = '250%';
}

function changebuttoncolor(id){
    document.getElementById(id).style.border = '2px solid #ffaed7';
}

function origbuttoncolor(id){
    document.getElementById(id).style.border = '2px solid #333333';
}

//Function to assign grades to students based on studentgrades array 
function assigngrades(){
    let studentgrades = [95, 85, 40];
    let currentmessage = "";
        //For loop to iterate through the student grades
        for(let i = 0; i < studentgrades.length; i++) {
            //Use of if and else statements on this line to determine whether got a grade lower than a C
            if(studentgrades[i] >= 70){
                //If statement for getting a grade of A
                if(studentgrades[i] >= 90){
                    currentmessage += "Your grade is an A excellent job!!!!<br>"
                    console.log("Your grade is an A excellent job!!!");
                //Else if statement for getting a grade of B
                }else if(studentgrades[i] >=80){
                    currentmessage += "Your grade is a B Good Job!<br>"
                    console.log("Your grade is a B Good Job!");
                }
            }else{
                currentmessage += "Your grade is lower than a C you need improvement.<br>"
                console.log("Your grade is lower than a C you need improvement.")
            }
        }
    //returns the current message to add to during the getweather function
    /*this might be better as a global variable but I don't know which is conventionally better to use 
    and this works so I just settled on this solution for this assignment*/
    return currentmessage;
}

function getweather(){
    let weather = 1;

    /*switches the given line to print for the current weather depending on the weather passed into the switch statement*/
    switch(weather){
        case 0:
            document.getElementById('secretmessage').innerHTML = assigngrades() + "Today is sunny out!!";
            break;
        case 1:
            document.getElementById('secretmessage').innerHTML = assigngrades() + "Today it is snowing!!!";
            break;
        default:
            document.getElementById('secretmessage').innerHTML = assigngrades() + "Today is rainy out.";
            break;
    }
}

