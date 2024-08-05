$(document).ready(function() {
  var slideshow = $('#slideshow');
  var images = [
      './assets/images/bkgrd1.png',
      './assets/images/bkgrd2.png',
      './assets/images/bkgrd3.png',
      './assets/images/bkgrd4.png',
      './assets/images/bkgrd5.png',
      './assets/images/bkgrd6.png'
  ];

  if (window.innerWidth < 600){
    var images = [
      './assets/images/mobile/bkgrd1.png',
      './assets/images/mobile/bkgrd2.png',
      './assets/images/mobile/bkgrd3.png'
    ];
  }
  window.onload = function () {
    var i = 1;
    setInterval(changeImage, 1300);
    function changeImage() {   
      if (!images[i]) i = 0;
      slideshow.css('background-image', 'url(' + images[i] + ')');
      i++;
    }
  }
});