
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("gifSearch");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

//This function keeps the serch bar from the landing page available when scrolling....
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//forgot what this does...
$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 1000) {
         $('#navbar').show();
     }
     else {
         $('#navbar').hide();
     }
});
          $(document).ready(function () {
            $("#navbar").hide();    // just add this

        });


// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
function slide() {

}



$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


//MODAL
var loginButton = document.getElementById("landingPageLoginButton");
var joinWeecloButton = document.getElementById("joinWeecloButton");
var modalNextButton = document.getElementById("innerButton");
var video = document.getElementById("myVideo");
var modalBackButton = document.getElementById("modalBackButton");
var modal = document.getElementById('myModal');
var loginModal = document.getElementById('loginModal');
var signUpButton = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var loginLink = document.getElementById("loginLink");
var modalCloseButton = document.getElementById("modalCloseButton");
var mainModalCloseButton = document.getElementById("mainModalCloseButton");

var loginModalContent = "<center><h1>Welcome back!</h1></center><center><form action='/action_page.php'><input id='email' type='email' name='email' placeholder='Email' style='width:300px'><br><input id='password' type='password' name='password' placeholder='Password' style='width:300px'><br><br><br><br><center><a class='button' id='loginEventButton' >Let's Go!</a></center></form></center>";
//THIS IS HTML TO BE INSERTED INTO THE FIRST MODAL *********
var userTypeForm = "<div class='renterCard'><center><img src='../images/rent.png' alt='Avatar' style='width:100%;'></center><div class='renterContainer'><center><h1><b>I'm here to rent stuff!</b></h1></center><center><p>Sign me up!</p></center></div></div><div class='ownerCard'><img src='../images/owner.jpg' alt='Avatar' style='width:100%'><div class='ownerContainer'><center><h1><b>I have stuff to rent!</b></h1></center><center><p>Sign me up!</p></center></div></div>"
userTypeForm+="<br><br><br><br><br><br>";

var signUpForm = "<center><div><center><p>Tell us about you!</p></center><center><p>Please fill out the fields below so we can match you up with neightbors who can help</p></center>";
signUpForm+="<form action='/action_page.php'><input id='firstname' type='text' name='firstname' placeholder='First' style='width:150px'><input id='lastname' type='text' name='lastname' placeholder='Last' style='width:155px'><br><input type='text' name='email' placeholder='Email' style='width:304px'><br><input type='text' name='addressLine1' placeholder='Address' style='width:304px'><br><input type='text' name='addressLine2' placeholder='Address Line 2' style='width:304px'><br><input id='zipcode' type='text' name='zipCode' placeholder='Zip Code' style='width:150px'><input id='neighborhood' type='text' name='Neighborhood' placeholder='Neighborhood' style='width:150px'><br><input type='text' name='username' placeholder='Desired Username' style='width:304px'><br><input type='text' name='password' placeholder='Password' style='width:304px'><br><input type='text' name='passwordMatch' placeholder='Verify Password' style='width:304px'><br><br><br></form>";
signUpForm+="</div></center>";


var categoryTable = "<center><p>First, let's get to know you a little better...</p><center><center><p>Begin by selecting your interests...</p></center>"
categoryTable+="<table id='customers'><tr><td><label class='Modalcontainer'>Clothing<input type='checkbox'><span class='checkmark'></span></label></td></tr><tr><td><label class='Modalcontainer'>Health & Fitness<input type='checkbox'><span class='checkmark'></span>"
categoryTable+="</label></td></tr><tr><td><label class='Modalcontainer'>Lawn & Gardening<input type='checkbox'><span class='checkmark'></span></label></td></tr><tr><td><label class='Modalcontainer'>Electronics<input type='checkbox'><span class='checkmark'></span></label></td></tr><tr><td><label class='Modalcontainer'>Camera Equipment<input type='checkbox'><span class='checkmark'></span></label></td></tr><tr><td><label class='Modalcontainer'>Outdoor & Hiking<input type='checkbox'><span class='checkmark'>"
categoryTable+="</span></label></td></tr><tr><td><label class='Modalcontainer'>Musical Instruments<input type='checkbox'><span class='checkmark'></span></label></td></tr><tr><td><label class='Modalcontainer'>Jewelery<input type='checkbox'><span class='checkmark'></span></label></td></tr><tr><td><label class='Modalcontainer'> Industrial & Heavy Vehicles<input type='checkbox'><span class='checkmark'></span></label></td></tr><tr><td><label class='Modalcontainer'>Costumes & Cosplay<input type='checkbox'><span class='checkmark'></span></label></td></tr>"
categoryTable+="</table><br><br>"


var neighborhoodTable = "<label class='RadioButtonContainer'>Brookhaven, GA<input type='radio' checked='checked' name='radio'><span class='RadioCheckmark'></span></label><label class='RadioButtonContainer'>Buckhead, GA<input type='radio' name='radio'><span class='RadioCheckmark'></span></label><label class='RadioButtonContainer'>Marietta, GA<input type='radio' name='radio'><span class='RadioCheckmark'></span></label><label class='RadioButtonContainer'>Smyrna, GA<input type='radio' name='radio'><span class='RadioCheckmark'></span></label>"

mainModalCloseButton.onclick=function(){
  modal.style.display="none";
  console.log("clicked the span for main modal");
}

modalCloseButton.onclick=function(){
      loginModal.style.display = "none";
        console.log("clicked the span for login modal");

}

loginLink.onclick = function(){
     $(window).scrollTop(0);
  loginModal.style.display = "block";
  document.getElementById("loginModalContent").innerHTML = loginModalContent;
}

// When the user clicks the button, open the modal
loginButton.onclick = function(){
  loginModal.style.display = "block";
  document.getElementById("loginModalContent").innerHTML = loginModalContent;

}


joinWeecloButton.onclick = function() {
 //   $(window).scrollTop(0);
 //  modal.style.display = "block";
 // document.getElementById("modalContent").innerHTML = userTypeForm;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3001/listOfAllUsers");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    console.log("Response string is: "+'\n');

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
            var jsonObject = xhttp.responseText;
            var userEmail = JSON.parse(jsonObject)
            console.log(userEmail.users[0].user_email);
        }
    }

}


// signUpButton.onclick = function() {
//     modal.style.display = "block";
//    // document.getElementById("modalContent").innerHTML = userTypeForm;
//     var xhr= new XMLHttpRequest();
//     xhr.open('GET', 'userType.html', true);
//     xhr.onreadystatechange= function() {
//         if (this.readyState!==4) return;
//         if (this.status!==200) return; // or whatever error handling you want
//         document.getElementById('modalContent').innerHTML= this.responseText;
//     };
//     xhr.send();
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
//     console.console.log("Clicked Span");
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

console.log("Step State:"+stepState)
var stepState;
var innerButtonClickCount = 0;

function onClickNext(){
    modal.style.display = "block";

    console.log("innerButtonClickCount: "+innerButtonClickCount)
      if (innerButtonClickCount == 0 || stepState == 0){
          stepState = 1;
          innerButtonClickCount++
          console.log("Step State: "+stepState)
      // document.getElementById("modalContent").innerHTML = userTypeForm;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'userType.html', true);
      xhr.onreadystatechange = function () {
          if (this.readyState !== 4) return;
          if (this.status !== 200) return; // or whatever error handling you want
          document.getElementById('modalContent').innerHTML = this.responseText;
      };
      xhr.send();
  }


else if(innerButtonClickCount==1||stepState==1){
  console.log("Click Count: "+innerButtonClickCount);
  console.log("Step State: "+stepState)



// document.getElementById("modalContent").innerHTML = signUpForm;
// document.getElementById('step2').className+="active";

    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'modalForm.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.getElementById('modalContent').innerHTML= this.responseText;
    };
    xhr.send();
          stepState++;
          innerButtonClickCount++;
}
else if(innerButtonClickCount==2||stepState==2){
console.log("Click Count: "+innerButtonClickCount);
console.log("Step State: "+stepState)
// document.getElementById('modalContent').innerHTML = categoryTable;
// document.getElementById('step3').className+="active";
    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'categoryTable.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.getElementById('modalContent').innerHTML= this.responseText;
    };
    xhr.send();
          stepState++;
          innerButtonClickCount++;

}
else if(innerButtonClickCount==3||stepState==3){
console.log("Click Count: "+innerButtonClickCount);
console.log("Step State: "+stepState)
// document.getElementById('modalContent').innerHTML = neighborhoodTable;
// document.getElementById('step4').className+="active";

    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'neighborhoodTable.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.getElementById('modalContent').innerHTML= this.responseText;
    };
    xhr.send();
          stepState++;
          innerButtonClickCount++;
    console.log("Click Count is now: "+innerButtonClickCount)
}



}



function restartModal(){
    console.clear();
  console.log("restartModal clicked");
  console.log("Step State: "+stepState)
  innerButtonClickCount = 0;
  stepState=0;
  console.log("click count: "+innerButtonClickCount);
  // document.getElementById('step2').className-="active";
  // document.getElementById('step3').className-="active";
  // document.getElementById('step4').className-="active";

    onClickNext();
}
// modalNextButton.onclick = function(){
//     modalState=1;
//     innerButtonClickCount++;
//   if(innerButtonClickCount==1){
//     modalState=1;
//     console.log(innerButtonClickCount);
//   document.getElementById('yup').innerHTML = "";
//   document.getElementById('step2').className+="active";
//  }
// }
// else if(innerButtonClickCount==2){
//   modalState=2;
//   console.log(innerButtonClickCount);
//   document.getElementById('yup').innerHTML = "";
//   document.getElementById('step3').className+="active";
// }
// else if(innerButtonClickCount==3){
//   modalState=3;
//   console.log(innerButtonClickCount);
//   document.getElementById('yup').innerHTML = ""
//   document.getElementById('step4').className+="active";
// }
// }

function isRenter(){
    document.getElementById('renterCardID').style.backgroundColor = "#90EE90";
    document.getElementById('ownerCardID').style.backgroundColor = "white";
    console.log("User-type selection: Renter");

}
function isOwner(){
    document.getElementById('ownerCardID').style.backgroundColor = "#90EE90";
    document.getElementById('renterCardID').style.backgroundColor = "white";
    console.log("User-type selection: Owner");
}

function completeSignUp() {
    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'loadingPage.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.getElementById('modalContent').innerHTML= this.responseText;
    };
    xhr.send();
    stepState++;
    innerButtonClickCount++;
    console.log("Click Count is now: "+innerButtonClickCount)

    setTimeout(function(){

        var xhr= new XMLHttpRequest();
        xhr.open('GET', 'signupComplete.html', true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return; // or whatever error handling you want
            document.getElementById('modalContent').innerHTML= this.responseText;
        };
        xhr.send();
        stepState++;
        innerButtonClickCount++;
        console.log("Click Count is now: "+innerButtonClickCount)



    }, 3000);
}

//END OF MODAL
