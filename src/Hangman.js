<html>
   <head>
      <style>
      /* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;

}
@keyframes effect {
        0% {
            transform: translateX(0px) rotate(0deg);
        }
  
        20% {
            transform: translateX(-4px) rotate(-2deg);
        }
  
        40% {
            transform: translateX(-2px) rotate(-1deg);
        }
  
        60% {
            transform: translateX(4px) rotate(2deg);
        }
  
        80% {
            transform: translateX(2px) rotate(1deg);
        }
  
        100% {
            transform: translateX(0px) rotate(0deg);
        }
    }
/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: aqua;
  color: red;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 0;
  transition: opacity 2s;
 
}
         .h1{
         font-family: "Brush Script MT", cursive;
         color: red;
         }
         .button:hover{ background-color: yellow;
         color: black;
         
         }
        
         .keys {
         display: grid;
         grid-template-columns: repeat(4, 1fr);
         grid-gap: 20px;
         padding: 20px;
         }
         
@keyframes coloranimation {
  0%   {color: red;}
  25%  {color: yellow;}
  50%  {color: blue;}
  100% {color: green;}
}
      </style>
   </head>
   <body id="body" style="text-align:center;background-color: rgba(255,182,193,0.5);">
      <p align="center" style="animation-name:coloranimation; animation-duration: 4s;animation-iteration-count: infinite;" class="h1">Welcome to Pokemon Hangman! </p>
      <p align="center"><font color="blue" size="40px" id="Word"></font></p>
      <div class="keys">
         <button id="button1"  class="button" onClick="ButtonClicked(1) "> ? </button>
         <button id="button2"  class="button" onClick="ButtonClicked(2) "> ? </button>
         <button id="button3"  class="button" onClick="ButtonClicked(3) "> ? </button>
         <button id="button4"  class="button" onClick="ButtonClicked(4) "> ? </button>
         <button id="button5"  class="button" onClick="ButtonClicked(5) "> ? </button>
         <button id="button6"  class="button" onClick="ButtonClicked(6) "> ? </button>
         <button id="button7"  class="button" onClick="ButtonClicked(7) "> ? </button>
         <button id="button8"  class="button" onClick="ButtonClicked(8) "> ? </button>
         <button id="button9"  class="button" onClick="ButtonClicked(9) "> ? </button>
         <button id="button10" class="button" onClick="ButtonClicked(10)"> ? </button>
         <button id="button11" class="button" onClick="ButtonClicked(11)"> ? </button>
         <button id="button12" class="button" onClick="ButtonClicked(12)"> ? </button>
         <button id="button13" class="button" onClick="ButtonClicked(13)"> ? </button>
         <button id="button14" class="button" onClick="ButtonClicked(14)"> ? </button>
         <button id="button15" class="button" onClick="ButtonClicked(15)"> ? </button>
         <button id="button16" class="button" onClick="ButtonClicked(16)"> ? </button>
      </div>
      
     
<div class="tooltip">
         <button class="tooltip" id="TurnsLeft" > </button>
              <span class="tooltiptext">Turns left</span>
              </div>

<img id="image" style="transition-duration: 3.0s;display:none;width5%">

      <script type="text/javascript" src=names.js></script>
      <script type="text/javascript" src=Hangman.js></script>
      
      
   </body>
</html>
