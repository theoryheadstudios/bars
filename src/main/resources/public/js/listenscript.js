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
  function to update progress bar of audio every second
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
    if(flag == false){
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
  $('#progress-bar').stop(true,true).animate({'width':progressbar.value*100+'%'},200,'linear');
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

var loginModal = document.getElementById('loginModal');
var loginModalForm = document.getElementById('loginModalForm');
var isLoginOpen = false;
function openLoginModalPage(){
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
  }
}


// if User presses 'Escape' then close the modal
document.onkeydown = function(event) {
  event = event || window.event;
  if (event.keyCode === 27) {
    if(loginModal.style.opacity === '1' || loginModalForm.style.opacity === '1'){
      loginModal.style.opacity = '0';
      loginModal.style.visibility = 'hidden';
    loginModalForm.style.opacity = '0';
    loginModalForm.style.visibility = 'hidden';
      isLoginOpen = false;
    }
  }
};

var main = document.getElementById("main");
var bg = document.getElementById("bg");
var album = document.getElementById("albumCover");
var overlayMuteUnmute = document.getElementById("overlayMuteUnmute");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (isLoginOpen && ((event.target === main) || (event.target === bg)
  || (event.target === album) || (event.target === overlayMuteUnmute))) {
    loginModal.style.opacity = '0';
    loginModal.style.visibility = 'hidden';
    loginModalForm.style.opacity = '0';
    loginModalForm.style.visibility = 'hidden';
    isLoginOpen = false;
  }
};


var audioPlay = document.getElementById("audioPlayer");
window.onload = function(){ 
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
    var totalCount = 7;
    var num = Math.ceil( Math.random() * totalCount );
    var tmp = num;
    while(tmp === num)
      num = Math.ceil( Math.random() * totalCount );
  num = 7;
    var pathToImages = "url(images/listen"+num+'.jpg'+')';
    document.getElementById('bg-before').style.backgroundImage = pathToImages;
    document.getElementById('albumCover').style.backgroundImage =  pathToImages;
}


/* function to call to toggle the queue navigation bar
  -
  toggle queue bar whenever it is clicked
 */
function openCloseQueue(queue) {
  if(queue.style.width === "250px"){
    queue.style.width = "0px";    
  }else{
    queue.style.width = "250px";
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


function addClass( element, classname ) {
  if (element.classList){
    element.classList.add(classname);
  }
  else{
    element.className += ' ' + classname;
  }
  }
  
  function removeClass( classname, element ) {
      var cn = element.className;
      var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
      cn = cn.replace( rxp, '' );
      element.className = cn;
  }
  
  var Play_Pause = 0;

  function play() {
    if(Play_Pause % 2 === 0){
      player.play();
      // setVolume(1);
      player.muted=false;
      document.getElementById('overlayMuteUnmute').pseudoStyle("before", "content", "url('images/speaker.png')");
      setVolume(1);

      player.addEventListener("ended", function(){
       console.log("ended");
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
  function to add rows to queue. Adds to bottom of html table
*/
var count = 1;
function addRowtoQueue(artist, track){
  if(count === 8){
    count = 1;
  }
  var table = document.getElementById('queueTable');
  var firstRow = table.rows[0];
  var len = table.rows.length;
  var row = table.insertRow(len);
  var cell1 = row.insertCell(0);      
  cell1.innerHTML = "<div><img id='sidenavimage' name='sideimg' class='navimage' src='images/listen"+count+".jpg'><p name='track'>"+artist+":<br>"+track+"</p></div>";
  table.deleteRow(0);
  var pathToImages = "url("+firstRow.cells.item(0).getElementsByTagName('img')[0].src+")";
  document.getElementById('bg-before').style.backgroundImage = pathToImages;
  document.getElementById('albumCover').style.backgroundImage =  pathToImages;
  count++;
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
  function to Open or Close Menu upon hover
*/
var menu = document.getElementById('menu');
var isMenuOpen = false;
function openCloseMenu(){
  if(isMenuOpen === true){
    menu.style.cursor = "pointer";
    menu.style.transform = 'translate3d(0px, 0, 0)';
    isMenuOpen = false;
  }else{
    menu.style.cursor = "default";
    menu.style.transform = 'translate3d(-130px, 0, 0)';
    isMenuOpen = true;
  }
}


/*
  functions to toggle the Login/Registration modal in Menu bar
*/
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


function httpGetAsync(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
      console.log((xmlHttp.responseText));
    }else {
      console.log("Error");
    }
  }
  xmlHttp.open("GET", "http://localhost:3000/listOfAllUsers", true);
  xmlHttp.send(null);
}