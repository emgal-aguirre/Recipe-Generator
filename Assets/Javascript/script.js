// On click recognizes the selection of meal type
$(document).ready(function () {
  $("#convert").click(function () {
    var value = $("#value_inline").val();
  });

  // Hold the value of the selector 
  var x = $(".selector1").val();


  //reset button
  $("#reset").click(function () {
    $("#value_inline").val("");
    $(".selector1").val("");

  });
});

// Displays date in real time
var times = JSON.parse(localStorage.getItem("times"));
function displayDate() {
  $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();


// On click recipe is generated from API
$("#convert").on("click", function () {
  var apiId = "83268794"
  var apiKey = "d627b0da7ed52c774f684c8f9a89210a";
  var mealType = $(".selector1").val()
  var queryURL = `https://api.edamam.com/search?q=${mealType}&app_id=${apiId}&app_key=${apiKey}`

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var index = Math.floor(Math.random() * response.hits.length)

    // API Responses
    $("#recipeTitle").text(
      "Title:    " + response.hits[index].recipe.label
    )
    $("#recipeYield").text(
      "Yield:    " + response.hits[index].recipe.yield + " servings"
    )
    $("#recipeCalories").text(
      "Calories:    " + response.hits[index].recipe.calories.toFixed(0)
    )

    // Variable to perform math to divide calories by yield to provide calories per serving
    var caloriesPer = response.hits[index].recipe.calories.toFixed(0) / response.hits[index].recipe.yield

    $("#recipeCaloriesPerServing").text(
      caloriesPer.toFixed(0) + " calories per serving"
    )

    $("#recipeIngredients").text(
      "Ingredients:    " + response.hits[index].recipe.ingredientLines
    )
    $("#healthLabels").text(
      "Health:    " + response.hits[index].recipe.healthLabels
    )
    $("#cautions").text(
      "Warnings:    " + response.hits[index].recipe.cautions
    )
  })
})