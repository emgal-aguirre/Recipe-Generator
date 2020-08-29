/*According to combinations calculator, there are 55 combinations
to log for the options listed with repeat. This block takes input
value, translates it thorugh function and displays the calculation
in the results field*/

$(document).ready(function(){
  $("#convert").click(function(){
    var value = $("#value_inline").val();
    console.log(value);
    var value2 = test(value);
    $("#value_inline2").val(value2);
  });
});

var test = function(x){
//funciton combinations go here
  return x / 3;
}