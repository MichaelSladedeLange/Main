

//Scroll DownSection

//setTimeout(function(){document.querySelector(".ScrollDown").classList.add("Hidden");}, 5000)

//CV Section
var checkOne = 0;

document.querySelector(".HideCraft").addEventListener("click", function(){
 document.querySelector(".StarShip").classList.toggle("Hidden");
 if(checkOne == 0){
   document.querySelector(".HideCraft").innerHTML = "Show Craft";
   checkOne = 1;
 }
 else{
   document.querySelector(".HideCraft").innerHTML = "Hide Craft";
   checkOne = 0;
 }
})
