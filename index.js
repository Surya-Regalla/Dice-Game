var yourName =  prompt("Enter your name pl: ");

var rand1 = Math.floor(Math.random() * 6 + 1);

var rand2 = Math.floor(Math.random() * 6 + 1);

document.querySelector("#player-name").innerHTML = yourName;

var img1 = "dice" + rand1 +".png";

var img2 = "dice" + rand2 +".png";

document.querySelectorAll("img")[0].setAttribute("src", img1);

document.querySelectorAll("img")[1].setAttribute("src", img2);

if(rand1 > rand2)
{
    var winMsg = "Yay, you Won! ⛳";
}

else if(rand1 < rand2)
{
    var winMsg = "Surya Won! You're Noob 🤡";
}

else
{
    var winMsg = "Draw Match! You got saved";
}

document.querySelector("#title .title-h1").innerHTML = winMsg;