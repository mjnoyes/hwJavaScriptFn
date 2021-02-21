var wrapperEle = document.body.querySelector(".wrapper");
var headOneEle = document.body.querySelector(".headOne");
var headTwoEle = document.body.querySelector(".headTwo");
var headThreeEle = document.body.querySelector(".headThree");
var headFourEle = document.body.querySelector(".headFour");
var buttonEle = document.body.querySelector(".editButton");
var mpg = 0;

function rewriteFunction(){
  var inputMiles = Number(prompt("How many miles do you drive in a year?"));
  var inputCost = Number(prompt("How much does gas cost?"));
  writerFunction(inputMiles,inputCost);
}
function writerFunction(miles,cost){
  var total;
  total = calcTotal(miles,cost,12);
  headOneEle.innerHTML="To drive a car with an MPG rating of 12 for "+miles+" miles at $"+cost+" per gallon would cost $" + total;
  total = calcTotal(miles,cost,17);
  headTwoEle.innerHTML="To drive a car with an MPG rating of 17 for "+miles+" miles at $"+cost+" per gallon would cost $" + total;
  total = calcTotal(miles,cost,26);
  headThreeEle.innerHTML="To drive a car with an MPG rating of 26 for "+miles+" miles at $"+cost+" per gallon would cost $" + total;
  total = calcTotal(miles,cost,29);
  headFourEle.innerHTML="To drive a car with an MPG rating of 29 for "+miles+" miles at $"+cost+" per gallon would cost $" + total;
  
}
function calcTotal(miles,cost,mpg){
  return miles/mpg*cost;
}

writerFunction();

buttonEle.addEventListener("click",function(){
  rewriteFunction();
 
})