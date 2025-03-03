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
    document.getElementById(id).style.fontSize = '260%';
}

function orignavcolor(id){
    document.getElementById(id).style.color = '#b2b2b2';
    document.getElementById(id).style.fontSize = '250%';
}

function facewink(id){
    document.getElementById(id).innerHTML = "Made by Jon Mateer ;&#41;";
}
