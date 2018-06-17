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


var video = document.getElementById("myVideo");
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    // if the right menu is already displaying, then close it, open the modal, and increment click counter on menu 
    if(document.getElementById('rightMenu').style.width !== "0px" ){
      document.getElementById('rightMenu').style.width = "0px";
      document.getElementById('menuButton').clickcount = Number(document.getElementById('menuButton').clickcount)+1;
    }
}
   

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    
}

// if User presses 'Escape' then close the modal
document.onkeydown = function(event) {
  event = event || window.event;
  if (event.keyCode == 27) {
    if(modal.style.display === "block"){
      modal.style.display = "none";
    }
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}};

app.controller("MainController", ["$scope","$http", MainController]);
}());



/* 
---------------------------------------------------------------------------------------
------------------- FUNCTIONS CREATED OUTSIDE OF THE CONTROLLER ------------------------ 
----------------------------------------------------------------------------------------
*/


/* this array will be used to switch to different pages when user clicks on 'next' or 'back' buttons
 and will mark the progress bar as active or inactive */
var switchPage = {
  'check' : [document.getElementById('firstForm').innerHTML, document.getElementById("step2form").innerHTML, 
             document.getElementById("step3form").innerHTML, document.getElementById("step4form").innerHTML],
  'ul'    : [document.getElementById("step1"), document.getElementById("step2"),
             document.getElementById("step3"), document.getElementById("step4")]
}
/* next button will allow user to progress to next page 
  -
  The next button will grab htlm code form the array of 'switchPage' to switch to the next page,
  mark the progress bar steps as active, and grab checkbox values from when
  the user had chosen if they moved to other pages before
*/
var count = 0;
function onClickNext (){
  if(count < 3){
    document.getElementById('firstForm').innerHTML = switchPage.check[count+1]
    document.getElementById('nextBtn').style.float = "right"
    switchPage.ul[count+1].className="active"
    console.log(arr);
    count++;
  }
  else{
    document.getElementById('firstForm').innerHTML = switchPage.check[count]
    switchPage.ul[count].className="active"
  }
  //do not display back button on first page
  //display on any other page
  // on last page, display 'Finish' button, not the 'next' button
  if(count == 0){
    document.getElementById("backBtn").style.display = "none";
  }else if(count == 1){
    document.getElementById("backBtn").style.display = "block";
  }else if(count == 3){
    document.getElementById("submitBtn").style.display = "Block";
    document.getElementById("nextBtn").style.display = "none";
  }
  getSavedChecks();
}

/* The back button will allow the user to go back a single page
  -
  the back button will grab html code from the array of 'switchPage' to go back to previous page,
  mark the progress bar steps as inactive and grab the checkbox values from before to display
*/
function onClickBack(){
  if(count !== 0){
    count--;
    console.log("COUNT: " + count)
  document.getElementById('firstForm').innerHTML = switchPage.check[count]
  switchPage.ul[count+1].className="inactive"
  }
  if(count === 0){
  switchPage.ul[0].className="active"
  document.getElementById("backBtn").style.display = "none";
  document.getElementById('nextBtn').style.float = "none"
  }else{
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "block";
  }
  getSavedChecks();
}


/* function to save values of each clicked checkbox
  -
  if the checkbox is checked, then save the value
  otherwise, if unchecked, remove it from the array
*/
var arr = new Array();
function saveData(checkbox){
  if(checkbox.checked){
    arr = arr.filter(e => e !== checkbox.value)
    arr.push(checkbox.value);
  }else{
    arr = arr.filter(e => e !== checkbox.value)
  }
console.log("TagName: " + checkbox.tagName + " The checkbox is: " + checkbox.checked);
}

/* function to call to toggle the menu button
  -
  if menu is first clicked, then open it up
  else if menu is clicked thereafter on 2nd hit, open
  otherwise, close it.
 */
function toggleMenu(menu){
  if(typeof(menu.clickcount) === "undefined"){
    menu.clickcount = 1;
    document.getElementById("rightMenu").style.width = "250px";
  }
  else if(menu.clickcount % 2 === 0){
    menu.clickcount = Number(menu.clickcount)+1;
    document.getElementById("rightMenu").style.width = "250px";
  }
  else{
    menu.clickcount = Number(menu.clickcount)+1;
    document.getElementById("rightMenu").style.width = "0";
  }
}

/* function to call whenever the 'x' is clicked in the menuButton
    -
    if user clicks on the 'x' in the menu button, then close it
    and increment the counter of the menuButton so that next time
    the user clicks, they can toggle it and open again
*/
function closeMenu() {
  document.getElementById("rightMenu").style.width = "0";
  document.getElementById("menuButton").clickcount += 1;
}


var checkboxes = ["EDM", "House", "Metal", "Djent", "Dubstep", "Pop", "Hip-Hop", "RnB", "Soul", "Country"];
var checkboxes2 = ["Male", "Female", "Other"];
var checkboxes3 = ["Something", "Goes", "Here"];
/* Function to re-check all enabled checkboxes that the 
  user provided when filling out the form
  -
  if the each table respectively is reached, then call this function
  and check any boxes that the user had checked before 
 */
function getSavedChecks(){
  for(i = 0; i < arr.length; ++i){
    if(count == 0){
      if(checkboxes.includes(arr[i])){
        document.getElementById(arr[i]).checked = true;
      }
    }else if(count == 1){
      if(checkboxes2.includes(arr[i])){
        document.getElementById(arr[i]).checked = true;
      }
    }else if(count == 2){
      if(checkboxes3.includes(arr[i])){
        document.getElementById(arr[i]).checked = true;
      }
    }
  }
}

// var subButton = document.getElementById('submitBtn');
// subButton.addEventListener('mouseleave', saveJoinPageInput, false); 
// subButton.addEventListener('click', saveJoinPageInput, false); 


function saveJoinPageInput(){
    var data = new FormData();
    var firstname = document.getElementById('first').value;       data.append('first_name', firstname);
    var lastname = document.getElementById('last').value;         data.append('last_name', lastname);
    var email = document.getElementById('email').value;           data.append('user_email', email);
    var password = document.getElementById('password').value;     data.append('password', password);
    var accountNum = Math.ceil( Math.random() * 8000 );           data.append('account_number', accountNum);
    var dob = "1999-01-01";                                       data.append('date_of_birth', dob);
    var country = document.getElementById('selectCountry').value; data.append('country', country);
    var zip = "30009";                                            data.append('zip', zip);
    var timeZone = "Eastern";                                     data.append('time_zone', timeZone);
    var userName = "Migos";                                       data.append('user_name', userName);
    var socialLink1 = "http://myspace.com/bump";                  data.append('social_link_1', socialLink1);
    var socialLink2 = "http://myspace.com/bump1";                 data.append('social_link_2', socialLink2);
    var socialLink3 = "http://myspace.com/bump2";                 data.append('social_link_3', socialLink3);
    var points = "7";                                             data.append('points_balance', points);

    var result = document.getElementById('result');
    
    if (firstname.length < 3) {
        result.textContent = 'Username must contain at least 3 characters';
        // alert('Username must contain at least 3 characters');
    } else {
        result.textContent = 'Your username is: ' + firstname;
        // alert(nameField);
    }
    var j = JSON.stringify(data);
    console.log(j)

    for(var pair of data.entries()){
      console.log(pair[0] + ', ' + pair[1]);
    }

    postIt(data);

 }

 function postIt(data){

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/createUser", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
      // do something to response
      console.log(this.responseText);
  };
  xhr.send(JSON.stringify(data));
  console.log(xhr.response);
  console.log(xhr.responseText);

}

function getIt(){
  var xhr = new XMLHttpRequest();
  // we defined the xhr
  
  xhr.onreadystatechange = function () {
      if (this.readyState != 4) return;
  
      if (this.status == 200) {
          var data = JSON.parse(this.responseText);
  
          // we get the returned data
      }
  
      // end of state change: it can be after some time (async)
  };
  
  xhr.open('GET', "http://localhost:3000/listOfAllUsers", true);
  xhr.send();
}