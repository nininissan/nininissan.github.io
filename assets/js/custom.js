$(document).ready(function() {
  var slideshow = $('#slideshow');
  var preload = [];
  if (window.innerWidth < 600){
    preload = [
      './assets/images/mobile/01.png',
      './assets/images/mobile/02.png',
      './assets/images/mobile/03.png',
      './assets/images/mobile/04.png',
      './assets/images/mobile/05.png',
      './assets/images/mobile/06.png',
      './assets/images/mobile/07.png',
      './assets/images/mobile/08.png',
      './assets/images/mobile/09.png',
      './assets/images/mobile/10.png',
      './assets/images/mobile/11.png',
      './assets/images/mobile/12.png',
      './assets/images/mobile/13.png',
      './assets/images/mobile/14.png',
      './assets/images/mobile/15.png',
      './assets/images/mobile/16.png',
      './assets/images/mobile/17.png',
      './assets/images/mobile/18.png',
      './assets/images/mobile/19.png',
      './assets/images/mobile/20.png',
      './assets/images/mobile/21.png',
      './assets/images/mobile/22.png',
      './assets/images/mobile/23.png',
      './assets/images/mobile/24.png',
      './assets/images/mobile/25.png',
      './assets/images/mobile/26.png',
      './assets/images/mobile/27.png',
      './assets/images/mobile/28.png',
      './assets/images/mobile/29.png',
      './assets/images/mobile/30.png',
      './assets/images/mobile/31.png',
      './assets/images/mobile/32.png',
      './assets/images/mobile/33.png',
      './assets/images/mobile/34.png',
      './assets/images/mobile/35.png',
      './assets/images/mobile/36.png',
      './assets/images/mobile/37.png'
    ];
  }
  else{
    preload = [
      './assets/images/01.png',
      './assets/images/02.png',
      './assets/images/03.png',
      './assets/images/04.png',
      './assets/images/05.png',
      './assets/images/06.png',
      './assets/images/07.png',
      './assets/images/08.png',
      './assets/images/09.png',
      './assets/images/10.png',
      './assets/images/11.png',
      './assets/images/12.png',
      './assets/images/13.png',
      './assets/images/14.png',
      './assets/images/15.png',
      './assets/images/16.png',
      './assets/images/17.png',
      './assets/images/18.png',
      './assets/images/19.png',
      './assets/images/20.png',
      './assets/images/21.png',
      './assets/images/22.png',
      './assets/images/23.png',
      './assets/images/24.png'
    ];
  }
  window.onload = function () {
    var images = [];
    for (i = 0; i < preload.length; i++) {
        images[i] = new Image();
        images[i].src = preload[i];
    }
    var j = 1;
    setInterval(changeImage, 2500);
    function changeImage() {   
      if (!images[j]) j = 0;
      slideshow.css('background-image', 'url(' + images[j].src + ')');
      j++;
    }
  }
});