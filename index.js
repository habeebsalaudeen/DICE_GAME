var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomImageDice = "dice" + randomNumber1 + ".png";

var getRandomImage = "images/" + randomImageDice;

document.querySelectorAll("img")[0].setAttribute("src", getRandomImage);

document.querySelectorAll("img")[1].setAttribute("src", getRandomImage);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var getRandomImage2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", getRandomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "⛳PLAYER 1 WIN"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WIN⛳"
} else {
    document.querySelector("h1").innerHTML = "DRAW!"
}
document.querySelector("h1").classList.add("less");