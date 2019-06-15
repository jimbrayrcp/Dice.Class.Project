randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").src = ("images/dice" + randomNumber1 + ".png");

randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img2").src = ("images/dice" + randomNumber2 + ".png");


function winner(random1, random2) {
  var string;
  if (random1 > random2) {
    string = "🚩 Player 1 Wins";
  } else if (random1 < random2) {
    string = "Player 2 Wins 🚩";
  } else if (random1 === random2) {
    string = "Draw! roll again";
  } else {
    string = "Roll Dice";
  }
  return string;
}


document.querySelector("h1").textContent = winner(randomNumber1, randomNumber2);
