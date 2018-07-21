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



var next = document.getElementById("nextBtn")
var back = document.getElementById("backBtn")
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
    if (event.target === modal) {
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

var nextPage = {
  'check' : [document.getElementById("first").innerHTML, document.getElementById("step2form").innerHTML, 
document.getElementById("step3form").innerHTML, document.getElementById("step4form").innerHTML],
'ul' : [document.getElementById("step1"), document.getElementById("step2"),
document.getElementById("step3"), document.getElementById("step4")]
}


// next button will allow user to progress to next page
var count = 0;
next.onclick = function (){
  if(count < 3){
  $scope.innerButtonClickCount++;
    // console.log($scope.innerButtonClickCount);
    // console.log(nextPage.check[count])
  document.getElementById('yup').innerHTML = nextPage.check[count+1]
  nextPage.ul[count+1].className="active"
  console.log(arr);
  count++;
  console.log("COUNT: " + count)
  }
  else{
    document.getElementById('yup').innerHTML = nextPage.check[count]
    nextPage.ul[count].className="active"
  }
}

// The back button will allow the user to go back a single page
back.onclick = function (){
  if(count !== 0){
    count--;
    console.log("COUNT: " + count)
  document.getElementById('yup').innerHTML = nextPage.check[count]
  nextPage.ul[count+1].className="inactive"
  $scope.innerButtonClickCount++;
  }
  if(count === 0){
  nextPage.ul[0].className="active"
  }
}};

// function Forward(){
//   nextPage.push("stp2")
//   $scope.innerButtonClickCount++;
//   if($scope.innerButtonClickCount===1){
//     console.log($scope.innerButtonClickCount);
//   document.getElementById('yup').innerHTML = document.getElementById("step2form").innerHTML
//   document.getElementById('step2').className+="active";
//   console.log(arr);
// }
// else if($scope.innerButtonClickCount===2){
//   console.log($scope.innerButtonClickCount);
//   document.getElementById('yup').innerHTML = document.getElementById("step2form").innerHTML
//   document.getElementById('step3').className+="active";
// }
// else if($scope.innerButtonClickCount===3){
//   console.log($scope.innerButtonClickCount);
//   document.getElementById('yup').innerHTML =  document.getElementById("step4form").innerHTML
//   document.getElementById('step4').className+="active";
// }
// }




//   if($scope.innerButtonClickCount===4){
//     console.log($scope.innerButtonClickCount);
//   document.getElementById('yup').innerHTML = document.getElementById("step2form").innerHTML
//   document.getElementById('step4').className+="inactive";

// }
// else if($scope.innerButtonClickCount===5){
//   console.log(document.activeElement)
//   console.log($scope.innerButtonClickCount);
//   document.getElementById('yup').innerHTML = document.getElementById("step4form").innerHTML
//   document.getElementById('step3').className+="inactive";
// }
// else if($scope.innerButtonClickCount===6){
//   console.log(document.activeElement)
//   console.log($scope.innerButtonClickCount);
//   document.getElementById('yup').innerHTML =  document.getElementById("step2form").innerHTML
//   document.getElementById('step2').className+="inactive";
// }
// }};


app.controller("MainController", ["$scope","$http", MainController]);
}());


// save values of each checkbox
var arr = new Array();
function saveData(checkbox){
  if(checkbox.checked){
    arr.push(checkbox.value);
  }else{
    arr.pop(checkbox.value);
  }

  // if(typeof(Storage) !== "undefined"){
  //   localStorage.setItem("check", checkbox.value)
  //   console.log(localStorage.getItem("check"));
  // }else{
  //   document.getElementById("yup").innerHTML = "Sorry, your browser does not support Web Storage...";
  // }
console.log("TagName: " + checkbox.tagName + " The checkbox is: " + checkbox.checked);
}

