//Keyboard Button press
document.addEventListener("keypress",function(event){

makeSound(event.key);

buttonAnimation(event.key);

});



function makeSound(key)
{
  switch (key) 
  {

   case "a":
   var snare= new Audio("audio/Snare-Drum.mp3");
   snare.play();
   break;

   case "s":
   var bass = new Audio("audio/Bass-Drum.mp3");
   bass.play();
   break;

   case "d":
   var med = new Audio("audio/Medium-Tom.mp3");
   med.play();
   break;

   case " ":
   var sma = new Audio("audio/Small-Tom.mp3");
   sma.play();
   break;

   case "j":
   var flo = new Audio("audio/Floor-Tom.mp3");
   flo.play();
   break;

   case "k":
   var cymbal = new Audio("audio/Splash-Cymbal.mp3");
   cymbal.play();
   break;

   case "l":
   var hihat = new Audio("audio/Hi-Hat.mp3");
   hihat.play();
   break;

   default:console.log(buttonInnerHTML);
  }
}


