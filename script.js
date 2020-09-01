/*According to combinations calculator, there are 55 combinations
to log for the options listed with repeat. This block takes input
value, translates it thorugh function and displays the calculation
in the results field*/
//```````````````````````````````````````````````````````````````````````````````
//This block works with correspondence of sections in response to their value
$(document).ready(function(){
  $("#convert").click(function(){
    var value = $("#value_inline").val();
   // console.log(value);---used this to track registration of input
    var value2 = test(value);
    $("#value_inline2").val(value2);
    //tracking selection of options
console.log($(".selector1").val());
console.log($(".selector2").val());
  });

  var z = JSON.stringify(x) + JSON.stringify(y);
  var x = $(".selector1").val();
  var y = $(".selector2").val();
  
var test = function(k){
  
//var k = $("#value_inline").val();
//Funciton combinations go here. This is a demo.
//This function works--no, it defaults to the else statement
if (x > y) {
  return k / 3;
} else { return k / 2;}
//var z = JSON.stringify(x) + JSON.stringify(y);


//tsp-->tbsp
/*if (z = "12"){
  return k * 3}
//tsp-->floz
else if (z = "13"){
  return k / 6}
//tsp-->1cup
else if (z = "14"){
  return k / 48.692}
//tsp-->1pt
 else if (z = "15"){
  return k / 192}
 //tsp-->1gal
 else if (z = "16"){
  return k / 768}
 //tsp-->1mL
 else if (z = "17"){
   return k * 4.92892}
 //tsp-->g
  // else if (z ="18"){
    else {return k * 1}

 }*/


switch (z) {
  case "12":
    text = k * 3;
    break;
  case "21":
    text = k / 3;
    break;
  default:
    text = k * 1;
}
}

/*This portion will enable recognition between unit pairings (i.e. tsp--> tbsp != tbsp--> tbsp)
The idea is to stringify the combinations using JSON stringify.
<p id="demo"></p>*/




/*var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;*/

//var x = 1;
//var y = 0;
/*var z = JSON.stringify(x) + JSON.stringify(y);
//var z = "01";

switch (z) {
  case "12":
    text = z * 3;
    break;
  case "21":
    text = z / 3;
    break;
  default:
    text = z*1;
}*/




//reset button
$("#reset").click(function(){
$("#value_inline").val("");
$("#value_inline2").val("");
$(".selector1").val("");
$(".selector2").val("");

});
});
//````````````````````````````````````````````````````````````````````````````
