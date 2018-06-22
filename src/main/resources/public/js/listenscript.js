// window.onload = randomizeImage();


// function randomizeImage(){
//     // Randomize images

//     // var myPix = new Array("images/Dark-Flashes-Neon.jpg","images/wonderworks.jpg","images/motel.jpg","images/hongkong.jpg");
//     // var randomNum = Math.floor(Math.random() * myPix.length);
//     // document.body.background = myPix[randomNum];

//     /* or we could name our images by number and randomize that way */
//     var totalCount = 6;
//     var num = Math.ceil( Math.random() * totalCount );
//     document.body.background = 'images/'+"listen"+num+'.jpg';


// }

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
    $('h1').css('color','#ffffff');
	}, 500);
});


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
    
    var progressBarEl = document.getElementById("progress-bar");
    var controlsPlayEl = document.getElementById("controls-play");
    var audioPlay = document.getElementById("audioPlay");
    
    var c = 0;
    function play() {
      if(c % 2 == 0){
        audioPlay.play();
        addClass(progressBarEl, "play");
        addClass(controlsPlayEl, "play");
      }
      else{
        audioPlay.pause();
        addClass(controlsPlayEl, "pause");
      }
      c++;
    }
