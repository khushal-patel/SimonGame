var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var started = false
var level = 0


function nextSquence(){
  userClickedPattern = []
  level++
  var randomNumber = Math.floor(Math.random()*4)
  var randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
  playSound(randomChosenColor)
  $("h1").text("Level "+level)
  // console.log(gamePattern);
}

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
})

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3")
  audio.play()
}

function animatePress(currentColor){
  $(".btn").click(function(){
    $(".btn").addClass("pressed")
    setTimeout(function(){
      $(".btn").removeClass("pressed")
    }, 100)
  })
}

$(document).keypress(function(){
  if (!started) {
    $("h1").text("Level "+level)
    nextSquence()
    started = true
  }
})

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function(){
        nextSquence()
      }, 1000)

    }
  }else {
    startOver()
  }
}

function startOver(){
  level = 0
  gamePattern = []
  started = false
}
