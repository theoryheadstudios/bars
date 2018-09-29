/*
  function to calculate the Length of Audio
*/
function calculateTotalValue(length) {
  var minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ':' + seconds

  return time;
}

/*
  function to calculate the current time of Audio
*/
function calculateCurrentValue(currentTime) {
  var current_hour = parseInt(currentTime / 3600) % 24,
    current_minute = parseInt(currentTime / 60) % 60,
    current_seconds_long = currentTime % 60,
    current_seconds = current_seconds_long.toFixed();
    if(current_seconds >= 60){
      current_minute = current_minute+1;
      current_seconds = 0;
    }
    var current_time = (current_minute < 10 ? current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
  return current_time;
}



/*
  initProgressBar: function to update progress bar of audio every second
*/
var startTime = document.getElementById('startTime');
var progressbar = document.getElementById('progress-bar');
var player = document.getElementById('audioPlayer');
player.onloadedmetadata = function() {
  // calculate total length of value.
  var length = player.duration
  var totalLength = calculateTotalValue(length)
  document.getElementById('endTime').innerHTML = totalLength;
};
var flag = false;
function initProgressBar() {
  var currentTime = player.currentTime;
  if(parseInt(currentTime.toFixed()) >= 3 && parseInt(currentTime.toFixed()) <= 9){
    if(flag === false){
      document.getElementById('coinsEarned').value += 1;
      var coin = document.getElementById('coinsEarned').value;
      document.getElementById('coinsEarned').innerHTML = 'Coins: '+coin;
      flag = true;
    }
  
    document.getElementById('coin').style.display = 'block';
    document.getElementById('coinPlusOne').style.display = 'block';
  }
  else{
    flag = false;
    document.getElementById('coin').style.display = 'none';
    document.getElementById('coinPlusOne').style.display = 'none';
  }
  
  // calculate current value time
  var current_time = player.currentTime;
  var currentTime = calculateCurrentValue(current_time);
  startTime.innerHTML = currentTime;

  progressbar.value = (player.currentTime / player.duration);
  $('#progress-bar').stop(true,true).animate({'width' : progressbar.value*100+'%'},200,'linear');
  // $('#progress-bar').stop(true,true).animate({'width':(currentTime +.25)/player.duration*100+'%'},200,'linear');
};

var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = "pseudoStyles";
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	var className = "pseudoStyle" + UID.getNew();
	
	_this.className +=  " "+className; 
	
	_sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
};


// if User presses 'Escape' then close the modal
document.onkeydown = function(event) {
  event = event || window.event;
  if (event.keyCode === 27) {
    console.info("Closing Modal upon ESCAPE key press");
    if(loginModal.style.opacity === '1' || loginModalForm.style.opacity === '1'){
      loginModal.style.opacity = '0';
      loginModal.style.visibility = 'hidden';
      loginModalForm.style.opacity = '0';
      loginModalForm.style.visibility = 'hidden';
      isLoginOpen = false;
    }
    document.getElementById('mySidenav').style.width = "0";
    document.getElementById('mySidenav').style.borderWidth = '0';
    // document.getElementById('queue').style.display="block"; 
    document.getElementById('menuSidenav').style.transform = 'translate3d(0px, 0, 0)';
    // document.getElementById('menuSidenavTitle').style.display = 'block';
    isMenuOpen = false; 
  }
};


/*
  openLoginModalPage: Open or Close Login/Registration Modal
*/
var loginModal = document.getElementById('loginModal');
var loginModalForm = document.getElementById('loginModalForm');
var isLoginOpen = false;
function openLoginModalPage(){
  console.info("Entering openLoginModalPage()");
  if(isLoginOpen){
    loginModal.style.opacity = '0';
    loginModal.style.visibility = 'hidden';
    loginModalForm.style.opacity = '0';
    loginModalForm.style.visibility = 'hidden';
    isLoginOpen = false;
  }else{
    loginModal.style.opacity = '1';
    loginModal.style.visibility = 'visible';
    loginModalForm.style.opacity = '1';
    loginModalForm.style.visibility = 'visible';
    isLoginOpen = true;
    document.getElementById('mySidenav').style.width = "0";
    document.getElementById('mySidenav').style.borderWidth = '0';
    // document.getElementById('queue').style.display="block";   
    // document.getElementById('menuSidenavTitle').style.display = 'block'; 
  }
}

/*
  closeLoginModalForm: functions to toggle the Login/Registration modal in Menu bar
*/
function closeLoginModalForm(){
  console.info("Entering closeLoginModalForm()");
  loginModal.style.opacity = '0';
  loginModal.style.visibility = 'hidden';
  loginModalForm.style.opacity = '0';
  loginModalForm.style.visibility = 'hidden';
  isLoginOpen = false;
}
$('#CreateAnAccLink').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  document.getElementById('SignInLink').style.display = 'block';
  document.getElementById('CreateAnAccLink').style.display = 'none';
});
$('#SignInLink').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  document.getElementById('CreateAnAccLink').style.display = 'block';
  document.getElementById('SignInLink').style.display = 'none';
});


var main = document.getElementById("main");
var bg = document.getElementById("bg");
var album = document.getElementById("albumCover");
var overlayMuteUnmute = document.getElementById("overlayMuteUnmute");
var menuSidenav = document.getElementById('menuSidenav');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (isLoginOpen && ((event.target === main) || (event.target === bg)
  || (event.target === album) || (event.target === overlayMuteUnmute))) {
    console.info("window.onclick event: Closing Login/Registration modal");
    loginModal.style.opacity = '0';
    loginModal.style.visibility = 'hidden';
    loginModalForm.style.opacity = '0';
    loginModalForm.style.visibility = 'hidden';
    isLoginOpen = false;
  }
  // else if(isMenuOpen && ((event.target === main) || (event.target === bg)
  // || (event.target === album) || (event.target === overlayMuteUnmute))){
  //   document.getElementById('menuSidenav').style.transform = 'translate3d(0px, 0, 0)';
  //   document.getElementById('menuSidenavTitle').style.display = 'block';
  //   isMenuOpen = false;
  // }else if(isQueueOpen && ((event.target === main) || (event.target === bg)
  // || (event.target === album) || (event.target === overlayMuteUnmute))){
  //   openCloseQueue(document.getElementById('mySidenav'));
  // }
  
  
};


var audioPlay = document.getElementById("audioPlayer");
window.onload = function(){ 
  initializeQueue("Bankai", "Mighty Thunder");
  randomizeImage();
  player.volume = 0.0;
  player.setAttribute("type", "audio/mpeg");
  // player.setAttribute("src", "SampleAudio.mp3");
  player.muted=true;
  player.autoplay=true;
  player.preload="all";
  	setTimeout(function(){
      document.body.classList.add('#welcome')
    document.body.classList.add("loaded");
    // document.getElementById("welcome").style.display = "none";
  }, 1000);
} 

// just for testing.. randomizes images..
function randomizeImage(){
  console.info("Entering randomizeImage()");
    var totalCount = 7;
    var num = Math.ceil( Math.random() * totalCount );
    var tmp = num;
    while(tmp === num)
      num = Math.ceil( Math.random() * totalCount );

    var pathToImages = "url(images/listen"+num+'.jpg'+')';
    document.getElementById('bg-before').style.backgroundImage = pathToImages;
    document.getElementById('albumCover').style.backgroundImage =  pathToImages;
}


/* openCloseQueue: function to call to toggle the queue navigation bar
  -
  toggle queue bar whenever it is clicked
 */
var isQueueOpen = false;
function openCloseQueue(sidenav) {
  console.info("Entering openCloseQueue()");
  if(sidenav.style.width === "250px" || sidenav.clientWidth === 250){
    sidenav.style.width = "0";
    sidenav.style.borderWidth = '0';
    // document.getElementById('queue').style.display="block";
    document.getElementById('queueTitle').style.left="0";
    isQueueOpen = false;  
  }else{
    document.getElementById('queueTitle').style.left="250px";
    // document.getElementById('queue').style.display="none";
    sidenav.style.width = "250px";
    sidenav.style.borderWidth = '1px';
    isQueueOpen = true;  
    document.getElementById('menuSidenav').style.transform = 'translate3d(0px, 0, 0)';
    // document.getElementById('menuSidenavTitle').style.display = 'block';
    isMenuOpen = false; 
    
  }
}


// document.ready = function(){
//   setTimeout(function (){
//     document.body.classList.add('loaded');
//     // document.getElementById("welcome").style.display = "block";
//   }, 3000);
// };

// $(document).ready(function() {
// 	setTimeout(function(){
//     $('body').addClass('loaded');
//     $('h1').css('color','#ffffff');

// 	}, 3000);
// });


// function addClass( element, classname ) {
//   if (element.classList){
//     element.classList.add(classname);
//   }
//   else{
//     element.className += ' ' + classname;
//   }
//   }
  
//   function removeClass( classname, element ) {
//       var cn = element.className;
//       var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
//       cn = cn.replace( rxp, '' );
//       element.className = cn;
//   }
  
  var Play_Pause = 0;

  function play() {
    console.info("Entering play()");
    if(Play_Pause % 2 === 0){
      player.play();
      // setVolume(1);
      player.muted=false;
      document.getElementById('overlayMuteUnmute').pseudoStyle("before", "content", "url('images/speaker.png')");
      setVolume(1);

      player.addEventListener("ended", function(){
       console.info("Song has ended: Playing next song");
      //  player.pause();
       player.currentTime = 0;
       player.setAttribute("type", "audio/mpeg");
       player.setAttribute("src", "DarkBells.mp3");
       player.load();
        document.getElementById('title-text').innerHTML = "Drake - NonStop";
        addRowtoQueue("Rae Sremmurd", "No Flex Zone");
        player.play();
    });
      document.getElementById('title-text').innerHTML = "Anonymous - DarkBells";
    }
    else{
      player.muted=true;
      // setVolume(0);
      document.getElementById('overlayMuteUnmute').pseudoStyle("before", "content", "url('images/speakerMute.png')");
    }
    Play_Pause++;
  }


/*
  addRowtoQueue: function to add rows to queue. Adds to bottom of html table
*/
var count = 1;
function addRowtoQueue(artist, track){
  console.info("Entering addRowtoQueue()");
  if(count === 8){
    count = 1;
  }
  var table = document.getElementById('queueTable');
  var firstRow = table.rows[0];
  var len = table.rows.length;
  var row = table.insertRow(len);
  var cell1 = row.insertCell(0);      
  cell1.innerHTML = "<div><img id='sidenavimage' name='sideimg' class='navimage' src='images/listen"+count+".jpg'><br><p id='artist' name='artist'>"+artist+":</p><br><p id='track' name='track'>"+track+"</p></div>";
  table.deleteRow(0);
  var pathToImages = "url("+firstRow.cells.item(0).getElementsByTagName('img')[0].src+")";
  document.getElementById('bg-before').style.backgroundImage = pathToImages;
  document.getElementById('albumCover').style.backgroundImage =  pathToImages;
  count++;
}

/*
  initializeQueue: function to initialize the queue upon page load
*/
function initializeQueue(artist, track) {
  console.info("Entering initializeQueue()");
  var c = 1;
  for(var addRow = 0; addRow < 20; addRow++){
    if(c === 8){
      c = 1;
    }
    var table = document.getElementById('queueTable');
    var len = table.rows.length;
    var row = table.insertRow(len);
    var cell1 = row.insertCell(0);   
    // cell1.innerHTML = "<div><img id='sidenavimage' name='sideimg' class='navimage' src='images/listen"+c+".jpg'><br><p id='artist' name='artist'>"+artist+":</p><br><p id='track' name='track'>"+track+"</p></div>";
     cell1.innerHTML = "<div><img id='sidenavimage' name='sideimg' class='navimage' src='images/listen"+c+".jpg'><br><a href='http://www.google.com'>"+artist+"</a><br><a href='http://www.google.com'>"+track+"</a><br></div>";
    c++;
  }
}


/*
  function to provide volume slider value if enabled
*/
$(document).ready(function () {
$('#volume').slider({
  min: 0,
  max: 100,
  value: 0,
  animate: true,
  range: 'min',
  slide: function(event, ui) {
    setVolume(ui.value/100);
  }
})
});

/*
  function to set the value of volume
*/
function setVolume(myVolume){
  player.volume = myVolume;
}


/*
  openCloseMenu: function to Open or Close Menu upon hover
*/
var menu = document.getElementById('menuSidenav');
var isMenuOpen = false;
function openCloseMenu(){
  console.info("Entering openCloseMenu()");
  if(isMenuOpen === true){
    document.getElementById('mySidenav').style.width = "0";
    document.getElementById('mySidenav').style.borderWidth = '0';
    // document.getElementById('queue').style.display="block";    
    menu.style.cursor = "pointer";
    menu.style.transform = 'translate3d(0px, 0, 0)';
    // document.getElementById('menuSidenavTitle').style.display = 'block';
    isMenuOpen = false;
  }else{
    document.getElementById('queueTitle').style.width="0";
    document.getElementById('mySidenav').style.width = "0";
    document.getElementById('mySidenav').style.borderWidth = '0';
    // document.getElementById('queue').style.display="block";    
    menu.style.cursor = "default";
    menu.style.transform = 'translate3d(-130px, 0, 0)';
    document.getElementById('queueTitle').style.left="0";
    // document.getElementById('menuSidenavTitle').style.display = 'none';
    isMenuOpen = true;
  }
}


/*
  listAllUsers: function to list users from Database
*/
function listAllUsers(){
  console.info("Entering listAllUsers()");
console.log("Grabbing request: localhost:3000/listAllUsers");
  var xmlHttp = new XMLHttpRequest();
  var fname = "", lname="", artist_usrName="";
  xmlHttp.onload = function() {
    if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
      // console.log((xmlHttp.responseText));
      var data = JSON.parse(xmlHttp.responseText);
      console.log("Account Number: "+ data.users[0].account_number)
      for( var event in data){
          var dataCpy = data[event];
          for(var data in dataCpy){
            var mainData = dataCpy[data];
              for(var key in mainData){
              if(key.match("first_name")){
                fname = mainData[key];
              }
              else if(key.match("last_name")){
                lname = mainData[key];
              }
              else if(key.match("user_name")){
                artist_usrName = mainData[key];
              }
              //console.log(key + " : " + mainData[key]);
              }
             addRowtoQueue(fname+' '+lname, artist_usrName);
            }
            //console.log(usr.first_name + ' ' + usr.last_name);
      }
      
    }else {
      console.log("Error");
    }
  }
  xmlHttp.open("GET", "http://localhost:3000/listOfAllUsers", true);
  xmlHttp.send(null);
  
  
  // console.log(data.users.account_number + " " + data.users.user_email+" : " +data.users.id);
  
}


/*
  createUser: function to create user and insert into Database
*/
function createUser(){
  console.info("Entering createUser()");
  console.log("Posting request: localhost:3000/createUser");
  // grab the data from values inserted in registration fields
  var data = saveFormData();

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/createUser", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 201) {
      console.log(xhr.response);
    } else {
      ;
    }
  }
  xhr.send(JSON.stringify(data));
}


/*
  updateUser: function to update user in Database
*/
function updateUser(){
  console.info("Entering updateUser()");
console.log("Posting request: localhost:3000/updateUser");
  var url = "http://localhost:3000/";

  var data = {};
  data.firstname = "John2";
  data.lastname  = "Snow2";
  var json = JSON.stringify(data);
  
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.response);
    } else {
     ;
    }
  }
  xhr.send(json); 
}


/* saveGender: function to save gender data
   -
   if user already clicked on a radio button,
   then delete the old value and add the new one
   otherwise, just add the new value into the 'gender' array
*/
var gender = new Array();
var genderValue;
function saveGender(data){
  console.info("Entering saveGender()");
  if(Object.keys(gender).length > 0){
    gender = gender.filter(e => e === data.id);
    gender[data.id] = data.checked;
  }else{
    gender[data.id] = data.checked;
  }
  for(key in gender){
    console.log(key + " " + gender[key]);
    genderValue = key;
  }
  
}

/* 
  saveGender: function to registration data.
    - this is used in createUser() function to
      send data to Database
*/
function saveFormData(){
  console.info("Entering saveFormData()");
  var data = {}
  data.firstName = document.getElementById('first').value;
  data.lastName = document.getElementById('last').value;
  data.password = document.getElementById('password').value;
  data.zip = document.getElementById('zip').value;
  data.dateOfBirth = parseDOB(document.getElementById('dob').value)
  data.timeZone = "Eastern";
  data.userName = document.getElementById('username').value;
  data.socialLink1 = "http://myspace.com/bump";
  data.socialLink2 = "http://myspace.com/bump1";
  data.socialLink3 = "http://myspace.com/bump2";
  data.pointsBalance = parseInt("7");
  data.country = "USA";
  data.accountNumber = Math.ceil( Math.random() * 8000 );
  data.userEmail = "SampleEmail"+data.accountNumber+"@email.com";
  data.gender = genderValue;
  return data;
}

function validateForm(){
  var fName = document.forms["regForm"]["firstname"];
  var lName = document.forms["regForm"]["lastname"];
  var username = document.forms["regForm"]["username"];
  var email = document.forms["regForm"]["e-mail"];
  var pwdtxt = document.forms["regForm"]["pwdtxt"];
  var cpwdtxt = document.forms["regForm"]["cpwdtxt"];
  var zip = document.forms["regForm"]["zip"];
  var dob = document.forms["regForm"]["dob"];

  if(fName.value === ""){
    window.alert("Please enter your first name.");
    fName.focus();
    return false;
  }
  if(lName.value === ""){
    window.alert("Please enter your last name.");
    lName.focus();
    return false;
  }
  if(username.value === ""){
    window.alert("Please enter your username.");
    username.focus();
    return false;
  }
  if(email.value === ""){
    window.alert("Please enter your email.");
    email.focus();
    return false;
  }
  if(pwdtxt.value === ""){
    window.alert("Please enter your password.");
    fNpwdtxtame.focus();
    return false;
  }
  if(cpwdtxt.value === ""){
    window.alert("Please confirm password.");
    cpwdtxt.focus();
    return false;
  }
  if(zip.value === ""){
    window.alert("Please enter your zip.");
    zip.focus();
    return false;
  }
  if(dob.value === ""){
    window.alert("Please enter your date of birth.");
    dob.focus();
    return false;
  }
}


/* 
  validateZIP: function to validate the ZIP/Postal Code in Registration
*/
var backspaceFlag = false;
function validateZIP(zip){
  console.info("Entering validateZIP()");
  backspaceTriggered(zip);
  /* remove last two characters if user presses backspace*/
  if(zip.value.length === 6 && backspaceFlag == true){
    var z = zip.value;
    z = z.substr(0, z.length - 1);
    zip.value = z;
  }
  /* determine if value in field is number & validate text value*/
 if(isNaN(zip.value.replace(/-/g,''))){
  zip.setAttribute("style", "background-color: red");
 }else if((zip.value.match(/^\d{5}$|^\d{5}-\d{4}$/) !== null && zip.value.length === 5) || (zip.value.match(/^\d{5}$|^\d{5}-\d{4}$/) !== null && zip.value.length === 10)){
  zip.setAttribute("style", "background-color: white");
 }else if(zip.value.match(/^\d{5}$|^\d{5}-\d{4}$/) === null && zip.value.length === 6){
   var z = zip.value;
   var lastChar = z.substr(z.length-1, z.length);
   z = z.substr(0, z.length - 1);
  zip.value = z + '-'+lastChar;
  zip.setAttribute("style", "background-color: red");
  zip.focus();
 }else{
   if(zip.value.length === 0){
    zip.setAttribute("style", "background-color: white"); 
   }else{
    zip.setAttribute("style", "background-color: red"); 
    zip.focus();
   }
  
 }
 console.log(zip.value);
}


/* 
  validateDOB: function to validate Date of Birth in Registration
*/
function validateDOB(data){
  console.info("Entering ValidateDOB()");
  backspaceTriggered(data);
  var valid = data.value;
  /* determine if value in field is number & remove last two characters if user presses backspace */
  if(isNaN(valid.replace(/-/g,''))){
    data.setAttribute("style", "background-color: red");
  }else{
    data.setAttribute("style", "background-color: white");
    var dob = data.value;
    if((data.value.length === 2 || data.value.length === 5) && backspaceFlag === true){
      var z = data.value;
      z = z.substr(0, z.length - 1);
      data.value = z;
    }else if (dob.match(/^\d{2}$/) !== null) {
      data.value = dob + '-';
    } else if (dob.match(/^\d{2}\-\d{2}$/) !== null) {
      data.value = dob + '-';
    }
}
}


/* 
  backspaceTriggered: function to determine if backspace/delete is pressed
*/
function backspaceTriggered(input){
input.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace" || key === "Delete") {
      backspaceFlag = true;
      return true;
    }else{
      backspaceFlag = false;
      return false;
    }  
});
}

/* 
  validatePassword: function to validate confirmation password
*/
function validatePassword(pass){
  var originalPass = document.getElementById('password');
  if(pass.value.length === 0){
    document.getElementById('password').setAttribute("style", "background-color: white"); 
    pass.setAttribute("style", "background-color: white");   
  }else if(originalPass.value === pass.value){
    originalPass.setAttribute("style", "background-color: white");
    pass.setAttribute("style", "background-color: white");
  }else{
    originalPass.setAttribute("style", "background-color: red");
    pass.setAttribute("style", "background-color: red");
    alert("Passwords Do Not Match!");
  }
}

/* 
  validateEmail: function to validate email address
*/
function validateEmail(email) {
  var valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email.value.length === 0){
    email.setAttribute("style", "background-color: white");   
  }else if(valid.test(email.value)){
    email.setAttribute("style", "background-color: white");  
  }else{
    email.setAttribute("style", "background-color: red");
    alert("Enter valid E-mail Address");  
  }
}

function checkIfUsernameExists(artist_usrName){
  console.info("Entering checkIfUsernameExists()");
  console.log("Grabbing request: localhost:3000/listAllUsers");
  if(artist_usrName.value.length === 0){
    artist_usrName.setAttribute("style", "background-color: white");  
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onload = function() {
    if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
      var data = JSON.parse(xmlHttp.responseText);
      for( var event in data){
          var dataCpy = data[event];
          for(var data in dataCpy){
            var mainData = dataCpy[data];
            for(var key in mainData){
              if(key.match("user_name")){
                if(artist_usrName.value === mainData[key]){
                  artist_usrName.setAttribute("style", "background-color: red");
                  alert("UserName Already Exists"); 
                }else{
                  artist_usrName.setAttribute("style", "background-color: white");   
                }
              }
            //console.log(key + " : " + mainData[key]);
            }
          } 
      }
    }else {
      console.log("Error");
    }
  }
  xmlHttp.open("GET", "http://localhost:3000/listOfAllUsers", true);
  xmlHttp.send(null); 
}

/* 
  parseDOB: function to parse Date of Birth field from registration text field
    - used in safeFormData()
*/
function parseDOB(dob) {
  var mm = dob.substr(0,2);
  var dd = dob.substr(3,2);
  var yyyy = dob.substr(6,10);
  var newDOB = yyyy+'-'+mm+'-'+dd;
  return newDOB;
}