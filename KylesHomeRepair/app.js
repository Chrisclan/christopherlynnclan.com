



// sticky nav on window scroll 
var navbar = document.getElementById("navbar");
const container = document.querySelector("div.container")
container.addEventListener("scroll", function(){ 
  const pixels = container.scrollTop;
  if (pixels > window.innerHeight - 50) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
});


// smooth scroll to each anchor from navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
      console.log('scrolling');
      console.log('this.getAttributehref = ' + this.getAttribute('href'));
      // close mobile nav
      closeNav();
  });
});

//add remove class highlight on navbar for each section 
const config = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
};
window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting) {
              document.querySelector(`#navbar li a[href="#${id}"]`).parentElement.classList.add('highlight');
              console.log("highlight id = " + id);

          } else {
              document.querySelector(`#navbar li a[href="#${id}"]`).parentElement.classList.remove('highlight');
          }
      });
  }, config);

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
  });
  
});


// modal image
var images = document.querySelectorAll('.recent-box img');
var modal = document.querySelector('.modal');
var currentImageDiv = document.querySelector('.currentImage');
var closeBtn = document.querySelector('.close');
var numOutOfDiv = document.querySelector('.numOutOf');

for (var i = 0; i < images.length; i++) {
    var img = images[i];   
    // When the image is clicked...
    img.onclick = function(event) {
        currImageId = this.id;
        currImageSrc = this.src;
        currentImageDiv.innerHTML = '<img onclick="closeModal()" id="' + currImageId + '" style="animation: zoom 1s;" src="' + currImageSrc + '">';
        modal.style.display = 'block';
        currImgValueString = currImageId.substr(currImageId.length-1);
        currImgValue = parseInt(currImageId.substr(currImageId.length-1));

        currImageClassName = currImageId.slice(0, -1);

        let imageList = document.getElementsByClassName(currImageClassName);

        numOutOfDiv.innerHTML = currImgValue + '/' + imageList.length;
    };
}

//close the modal onclick
function closeModal(){
    modal.style.display = 'none';
}

function prevImage() {
    console.log('prev');
    currImageClassName = currImageId.slice(0, -1);
    var thisImageList = document.getElementsByClassName(currImageClassName);
    currImgValueString = currImageId.substr(currImageId.length-1);
    res = parseInt(currImageId.substr(currImageId.length-1));

    res = res - 1;
    if (res >= thisImageList.length) {
    res = 1;
    } else  if (res === 0) {
    res = thisImageList.length;
    }

    currImageId = currImageId.slice(0, -1) + res;
    srcRes = currImageSrc.slice(0, -5) + res + ".jpg";
    currentImageDiv.innerHTML = '<img onclick="closeModal()" id="' + currImageId + '" style="animation: fadeMe 1s;" src="' + srcRes + '">';

    numOutOfDiv.innerHTML = res + '/' + thisImageList.length;
}

function nextImage() {
    console.log('next');
    currImageClassName = currImageId.slice(0, -1);
    var thisImageList = document.getElementsByClassName(currImageClassName);
    currImgValueString = currImageId.substr(currImageId.length-1);
    res = parseInt(currImageId.substr(currImageId.length-1));

    if (res >= thisImageList.length) {
    res = 1;
    } else  if (res < 1) {
    res = thisImageList.length;
    } else {
    res = res + 1;
    }

    currImageId = currImageId.slice(0, -1) + res;
    srcRes = currImageSrc.slice(0, -5) + res + ".jpg";
    currentImageDiv.innerHTML = '<img onclick="closeModal()" id="' + currImageId + '" style="animation: fadeMe 1s;" src="' + srcRes + '">';

    numOutOfDiv.innerHTML = res + '/' + thisImageList.length;
}


// Testimonial quotes

var slideIndex = 1;
quoteSlide(slideIndex);

function quoteSlide(n) {
    var i;
    var quotes = document.getElementsByClassName('quote');
    if (n > quotes.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = quotes.length}
    for (i = 0; i < quotes.length; i++) {
        quotes[i].style.display = "none";
    }
    quotes[slideIndex-1].style.display = "block"; 
}

function prevQuote(n){
    quoteSlide(slideIndex += n);
    console.log('prev clicked');
}

function nextQuote(n) {
    quoteSlide(slideIndex += n);
    console.log('next clicked');
}

// automatic quote slide
function autoQuote() {
    quoteSlide(slideIndex += 1);
    console.log('autoQuote');
}

var autoQuoteInterval = setInterval(autoQuote, 4000);

// stops autoQuote after 60 secs
setTimeout(stop_interval, 60000);
function stop_interval() {
    clearInterval(autoQuoteInterval);
    console.log('interval cleared');
}




// Mobile navbar

// Open sidenav 
function openNav() {
    if (document.getElementById("mySidenav").style.width === "100%") {
        document.getElementById("mySidenav").style.width = "0";
    } else {
        document.getElementById("mySidenav").style.width = "100%";
    }    
}

// Close/hide sidenav 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
