
// document.querySelectorAll("button").addEventListener("click", buttonClicks);

var buttons =  document.querySelectorAll("button");

for (i = 0; i < buttons.length; i++){

  buttons[i].addEventListener("click", buttonClicks);



  }
  function buttonClicks(){
    var buttonLetterClicked = this.innerHTML;
    makeSound(buttonLetterClicked);
    makeAnimation(buttonLetterClicked);
}

document.addEventListener("keydown", keyBoardPress);


function keyBoardPress(event){
  makeSound(event.key);
  makeAnimation(event.key);

}

function makeSound(key){
  switch (key) {
    case "w":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;

    case "a":
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
      break;

    case "s":
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
      break;

    case "d":
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
      break;

    case "j":
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
      break;

    case "k":
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
      break;

    case "l":
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
      break;








    default:
    console.log(buttonLetterClicked);

  }
}

function makeAnimation(callBack){
  document.querySelector("." + callBack).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + callBack).classList.remove("pressed")
  },100)
}
