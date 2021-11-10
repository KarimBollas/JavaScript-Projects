function cutdown()
{
    var seconds=document.getElementById("seconds").value;  //read seconds input 
    console.log(seconds);
    function tick()                             // reduce seconds
    {
        seconds--;
        timer.innerHTML=seconds;
        var time=setTimeout(tick,1000);           //every second at time
        if (seconds==-1)                            // seconds<0 
        {
            alert("Time is up!");
            clearTimeout(time);                     // clear time
            timer.innerHTML="";
        }
    }
    tick();                                     // calls tick to reduce seconds
}




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function nextSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); // Change image every 1.5 seconds
}