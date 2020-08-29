//attempt to store value in value input line
/*$("#value_inline").val() = 
var input = input.val();
}
);*/


//testing convert button functionality

/*$(document).ready(function(){
    $("#convert").click(function(){
      $(this).hide();
    });
});*/

//script.js is connected to index.html. This funciton did work.

//testing reset button functionality

/*$(document).ready(function(){
    $("#reset").click(function(){
      $(this).hide();
    });
});*/

//This function also worked.

//trial of convert button with input value line

/*$(document).ready(function(){
    $("#convert").click(function(){
      $("#value_inline").hide();
    });
});*/

//This function also worked.

//trial of convert button to input text to input line

/*$(document).ready(function(){
    $("#convert").click(function(){
      $("#value_inline").val("Melody");
    });
});*/

//This funciton also worked.

//trial of convert button with function

/*$(document).ready(function(){
    $("#convert").click(function(){
      console.log($("#value_inline").val());//can we use .val to get values?-yes
      //from here, how to make the value an object and run a fuction on it--make varialbe see below
    });
});*/

//trial of recipt of inputted value using .val()

/*$(document).ready(function(){
    $("#convert").click(function(){
      var value = $("#value_inline").val();
      console.log(value);
    });
});*/

//using global function within function made for click

/*$(document).ready(function(){
  $("#convert").click(function(){
    var value = $("#value_inline").val();
    console.log(value);
    test(value)
  });
});

var test = function(message){
  console.log(message);
}*/

//This trial worked. The result was two notes of the typed-in value to the console.

//trial to use inputted value as global variable pon click--does not become global

/*$(document).ready(function(){
  $("#convert").click(function(){
    value = $("#value_inline").val();
    console.log(value);
  });
});

  console.log(value);*/

//Trial to log inputted value in a global function with argument other than "message"

  /*$(document).ready(function(){
    $("#convert").click(function(){
      var value = $("#value_inline").val();
      console.log(value);
      test(value)
    });
  });
  
  var test = function(x){
    console.log(x);
  }*/

  //This trial worked. The result was two notes of the typed-in value to the console.

//Trial to use inputted value in global math function

 /* $(document).ready(function(){
    $("#convert").click(function(){
      var value = $("#value_inline").val();
      console.log(value);
      test(value)
    });
  });
  
  var test = function(x){
    console.log(x / 3);
  }*/

  /*This trial worked. The result was the inputted value and the
  calculated value in the console log. The inputted value replaced
  x- the function parameter*/
  
//TRIAL TO PLACE CALCULATED VALUE INTO RESULT FIELD.

  /*$(document).ready(function(){
    $("#convert").click(function(){
      var value = $("#value_inline").val();
      console.log(value);
      test(value);
      $("#value_inline2").val(value);
    });
  });
  
  var test = function(x){
    console.log(x / 3);
  }*/
/*This placed the value of the input into the result field with the
calculated value in the console.*/

//Trial to make calculated result into variable to place into result field.

/*$(document).ready(function(){
  $("#convert").click(function(){
    var value = $("#value_inline").val();
    console.log(value);
    console.log(test(value));
    $("#value_inline2").val(value);
  });
});

var test = function(x){
 return x / 3;
}*/

//This also logged x/3 to console.

//make calculated result a variable

/*$(document).ready(function(){
  $("#convert").click(function(){
    var value = $("#value_inline").val();
    console.log(value);
    var value2 = test(value);
    $("#value_inline2").val(value2);
  });
});

var test = function(x){
 return x / 3;
}*/
/*This trial was successful. This entered the calculated result
into the result field.*/


//ATTACHING VALUES TO FUNCITONS DEFINED IN CASES
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