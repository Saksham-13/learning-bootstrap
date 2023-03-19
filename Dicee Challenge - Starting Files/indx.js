var randomNumber1 = Math.floor(Math.random() * 6) + 1;//gives a random number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";//Gives a random dice from 1-6

var randomImageSource = "images/" + randomDiceImage;//image of the dice

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";//Gives a random dice from 1-6

var randomImageSource2 = "images/" + randomDiceImage2;//image of the dice

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!!🚩"
}
else{
    document.querySelector("h1").innerHTML="DRAW!"
}