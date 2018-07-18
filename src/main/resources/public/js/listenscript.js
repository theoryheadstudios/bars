var audioPlay = document.getElementById("audioPlayer");
window.onload = function(){ 
  randomizeImage();
  audioPlay.volume = 0.0;
  	setTimeout(function(){
      document.body.classList.add('#welcome')
    document.body.classList.add("loaded");
    // document.getElementById("welcome").style.display = "none";
	}, 1000);
} 

function randomizeImage(){
    var totalCount = 7;
    var num = Math.ceil( Math.random() * totalCount );
    var tmp = num;
    while(tmp === num)
      num = Math.ceil( Math.random() * totalCount );

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
    document.getElementById('queueTable').style.visibility = 'hidden';
  }else{
    queue.style.width = "250px";
    document.getElementById('queueTable').style.visibility = 'visible';
  }
}


// document.ready = function(){
//   setTimeout(function (){
//     document.body.classList.addClass('loaded');
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
    var startTime = document.getElementById('startTime');
    audioPlay.onloadedmetadata = function() {
      var endMinutes = "0" + Math.floor(audioPlay.duration / 60);
      var endseconds = "0" +  Math.floor(audioPlay.duration - endMinutes * 60);
      var endDurTime = endMinutes.substr(-2) + ":" + endseconds.substr(-2);
      document.getElementById('endTime').innerHTML = endDurTime;
    };

    function play() {
      document.getElementById('overlayPlay').style.display = "none";
        var endMinutes = "0" + Math.floor(audioPlay.duration / 60);
        var endseconds = "0" +  Math.floor(audioPlay.duration - endMinutes * 60);
        var endDurTime = endMinutes.substr(-2) + ":" + endseconds.substr(-2);
        document.getElementById('endTime').innerHTML = endDurTime;
      if(Play_Pause % 2 == 0){
        audioPlay.play();
        audioPlay.addEventListener("ended", function(){
          audioPlay.currentTime = 0;
         console.log("ended");
         audioPlay.type="audio/mpeg";
         audioPlay.src="No Flex Zone.mp3";
          document.getElementById('title-text').innerHTML = "Rae Sremmurd - No Flex Zone";
          // audioPlay.src="sampleAudio.mp3";
          // document.getElementById('title-text').innerHTML = "Sampler - Sample Track 2";
          addRowtoQueue("Rae Sremmurd", "No Flex Zone");
          audioPlay.play();
    });
        document.getElementById('title-text').innerHTML = "Sampler - Sample Track";
        audioPlay.addEventListener("timeupdate", function() {
            var currentTime = audioPlay.currentTime;
            var minutes = "0" + Math.floor(currentTime / 60);
            var seconds = "0" +  Math.floor(currentTime - minutes * 60);
            var durTime = minutes.substr(-2) + ":" + seconds.substr(-2);
            startTime.innerHTML = durTime;
            var duration = audioPlay.duration;
            $('#progress-bar').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},200,'linear');
            if((currentTime >= 3 && currentTime <= 3.2) || (currentTime >= 7 && currentTime <= 7.2)){
              document.getElementById('coinsEarned').value += 1;
              var coin = document.getElementById('coinsEarned').value;
              document.getElementById('coinsEarned').innerHTML = 'Coins: '+coin;              
            }
            if(currentTime >= 3 && currentTime <= 7){
              document.getElementById('coin').style.display = 'block';
              document.getElementById('coinPlusOne').style.display = 'block';
            }
            else{
              document.getElementById('coin').style.display = 'none';
              document.getElementById('coinPlusOne').style.display = 'none';
            }
        });

      }
      else{
        audioPlay.pause();
      }
      Play_Pause++;
    }

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


$(document).ready(function () {
$('#volume').slider({
  // orientation: "vertical",
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


function setVolume(myVolume){
  audioPlay.volume = myVolume;
}

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

// menu.onmouseleave = function () {
//   menu.style.transform = 'translate3d(0px, 0, 0)';
//   menu.style.cursor = "pointer";
//   isMenuOpen = false;
// }


