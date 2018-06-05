// Code goes here

(function(){
  var app = angular.module("weeClo", []);
var MainController = function($scope, $http){
    $scope.clicked = "you clicked a button";
    $scope.registerString = "";
    $scope.howItWorksString="";
    $scope.clickCount = 0;
    $scope.lawnAndGardentClickCount = 0;
    $scope.clothingClickCount = 0;
    $scope.healthAndFitnessClickCount = 0;
    $scope.innerButtonClickCount = 0;


  $scope.browse = function(){
   $scope.clicked = "browsing table";
 };
    $scope.register = function(){
   $scope.clicked = "register table";
 };
    $scope.howItWorks = function(){
   $scope.clicked = "How it works table";
 };

  $scope.select = function(){
    $scope.clickCount++;
    console.log($scope.clickCount);
    if($scope.clickCount%2!=0){
      $scope.check();
    }
    else {
      $scope.uncheck();
    }
  };



var btn2 = document.getElementById("innerButton")
var video = document.getElementById("myVideo");
var menuButton = document.getElementById("menuButton")
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var menuCloseButton = document.getElementById("menuCloseButton");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

menuButton.onclick=function () {
    document.getElementById("rightMenu").style.display = "block";
    console.log("button pressed.")
}
menuCloseButton.onclick=function () {
    document.getElementById("rightMenu").style.display = "none";
}


btn2.onclick = function(){
  $scope.innerButtonClickCount++;
  if($scope.innerButtonClickCount==1){
    console.log($scope.innerButtonClickCount);
  document.getElementById('yup').innerHTML = '<link rel = "stylesheet" href="css/styles.css"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><div class="w3-container w3-center w3-animate-right"><div class="trackerContainer"></div><center><p>What is your gender?</p><center><table id="customers"><tr><td><label class="container">Male<input type="checkbox"><span class="checkmark"></span></label></td></tr><tr><td><label class="container">Female<input type="checkbox"><span class="checkmark"></span></label></td></tr><tr><td><label class="container">Other<input type="checkbox"><span class="checkmark"></span></label></td></tr></table><br><br></div>';
  document.getElementById('step2').className+="active";
}
else if($scope.innerButtonClickCount==2){
  console.log($scope.innerButtonClickCount);
  document.getElementById('yup').innerHTML = '<link rel = "stylesheet" href="css/styles.css"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><div class="w3-container w3-center w3-animate-right"><div class="trackerContainer"></div><center><p>What is your gender?</p><center><table id="customers"><tr><td><label class="container">Male<input type="checkbox"><span class="checkmark"></span></label></td></tr><tr><td><label class="container">Female<input type="checkbox"><span class="checkmark"></span></label></td></tr><tr><td><label class="container">Other<input type="checkbox"><span class="checkmark"></span></label></td></tr></table><br><br></div>';
  document.getElementById('step3').className+="active";
}
else if($scope.innerButtonClickCount==3){
  console.log($scope.innerButtonClickCount);
  document.getElementById('yup').innerHTML = '<link rel = "stylesheet" href="css/styles.css"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><div class="w3-container w3-center w3-animate-right"><div class="trackerContainer"></div><center><p>What is your gender?</p><center><table id="customers"><tr><td><label class="container">Male<input type="checkbox"><span class="checkmark"></span></label></td></tr><tr><td><label class="container">Female<input type="checkbox"><span class="checkmark"></span></label></td></tr><tr><td><label class="container">Other<input type="checkbox"><span class="checkmark"></span></label></td></tr></table><br><br></div>';
  document.getElementById('step4').className+="active";
}
}




};


app.controller("MainController", ["$scope","$http", MainController]);
}());
