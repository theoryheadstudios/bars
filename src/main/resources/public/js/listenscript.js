window.onload = randomizeImage();

function randomizeImage(){
    // Randomize images

    // var myPix = new Array("images/Dark-Flashes-Neon.jpg","images/wonderworks.jpg","images/motel.jpg","images/hongkong.jpg");
    // var randomNum = Math.floor(Math.random() * myPix.length);
    // document.body.background = myPix[randomNum];

    /* or we could name our images by number and randomize that way */
    var totalCount = 6;
    var num = Math.ceil( Math.random() * totalCount );
    document.body.background = 'images/'+"listen"+num+'.jpg';


}
