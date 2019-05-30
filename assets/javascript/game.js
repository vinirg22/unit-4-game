

var targetNumber;
var numberOptions;
var counterTotal = 0;

$("#counter-total").text(counterTotal);
$("#counter-total").empty();
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);

var crystalOne = $("#crystal-1");
var crystalTwo = $("#crystal-2");
var crystalThree = $("#crystal-3");
var crystalFour = $("#crystal-4");

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var ranNums = [];
targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

$(document).ready(function() {
  var topRanPixels = Math.floor(Math.random() * 300);

  $("#current-random-num").text(targetNumber);

  function restart() {
    counterTotal = 0;
    $("#counter-total").text(counterTotal);
    $("#counter-total").empty();
    $("#current-random-num").empty();
    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#current-random-num").text(targetNumber);
    ranNums = [];
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    randomCrystalValues();
  }

  function randomCrystalValues() {
    (i = nums.length), (x = 0);

    if (i--) {
      x = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[x]);
      nums.splice(x, 1);
    }

    console.log(ranNums);
  }
  randomCrystalValues();

  $(".crystal-image").on("click", function() {
    $(crystalOne).attr("data-crystalvalue", ranNums[0]);
    $(crystalTwo).attr("data-crystalvalue", ranNums[1]);
    $(crystalThree).attr("data-crystalvalue", ranNums[2]);
    $(crystalFour).attr("data-crystalvalue", ranNums[3]);

    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
   
    counterTotal += crystalValue;
    $("#counter-total").text(counterTotal);

    if (counterTotal === targetNumber) {
      alert("You win!");
      wins++;
      $("#wins").text(wins);
      restart();
    } else if (counterTotal >= targetNumber) {
      alert("You lose!!");
      losses++;
      $("#losses").text(losses);
      restart();
    }
  });
});


// A game with four crystals and random result
// each crystal will have a random numbee from 1-12
// a new random number will generate every time we win or lose
// results will add up every time we click on a crystal
// until it equals the random result
// if greater than the random result,
// losses count will decrease
// if equal, wins count will increase


