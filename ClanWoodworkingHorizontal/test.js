// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }























// -------------------------------------------------------------------------------





document.addEventListener("DOMContentLoaded", () => {
    outerContainer = document.getElementById('outer-container');
    // get all the links with an ID that starts with 'sectionLink'
    const listOfLinks = document.querySelectorAll("a[href^='#pageLink");
    // loop over all the links
    listOfLinks.forEach(function (link) {
      // listen for a click
      link.addEventListener('click',  () => {
        // toggle highlight on and off when we click a link
        listOfLinks.forEach( (link) => {
          if (link.classList.contains('highlight')) {
            link.classList.remove('highlight');
          }
        });
        link.classList.add('highlight');
        // get the element where to scroll
        let ref = link.href.split('#pageLink');
        console.log('below split ' + ref);
        ref = "#page" + ref[1];
        let refH3UnderHeading = document.querySelector(ref).querySelector('span').innerHTML;
        outerContainer.scroll({
            top: 0,
            left: document.querySelector(ref).offsetLeft,
            // top gets the distance from the top of the page of our target element
            behavior: 'smooth'
        });
        h3UnderHeading.innerHTML = refH3UnderHeading;
        // console.log('scroll');
        console.log('refH3UnderHeading is ' + refH3UnderHeading);
        console.log('target is ' + ref);
        // console.log('document.querySelector(ref).offsetLeft is ' + document.querySelector(ref).offsetLeft);
        
      })
    })
})



var el
    var prefix = 'elementId';
    for(var i = 0; el = document.getElementById(prefix + i); i++) {
    if(condition) {
        el.style.display = '';
    }
    }

    // listOfPages = [object NodeList]
    // listOfPages[i] = http://127.0.0.1:5500/index.html#pageLink12
    // listOfPages[i].id = navPage12
    // [i] = 11


function changeNavColor() {


    // get current page number
    myNewXOffset = myXOffset;
    pageNum = (myNewXOffset + winWidth) / winWidth;

    //add highlight class for current page
    newPageNum = pageNum;
    currentNavbar = document.getElementById('navPage' + newPageNum);
    h3UnderHeading = document.getElementById('h3UnderHeading');
    
    const listOfPages = document.querySelectorAll("[id^=navPage]");
    listOfPages.forEach(function (pageLink) {
        if (currentNavbar.id === pageLink[1]) {
            currentNavbar.classList.add('highlight');
        }
    })



    if (currentNavbar.id === 'navPage1'){
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Clan Woodworking"; 
        console.log('if currentNavbar = navPage1');
    } else if (currentNavbar.id === 'navPage2') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Adirondack Chairs"; 
        console.log('if currentNavbar = navPage2');
    } else if (currentNavbar.id === 'navPage3') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "King Size Bed Frame"; 
        console.log('if currentNavbar = navPage3');
    } else if (currentNavbar.id === 'navPage4') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Desk"; 
        console.log('if currentNavbar = navPage4');
    } else if (currentNavbar.id === 'navPage5') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Double Dog Kennel"; 
        console.log('if currentNavbar = navPage5');
    } else if (currentNavbar.id === 'navPage6') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Entertainment Center"; 
        console.log('if currentNavbar = navPage6');
    } else if (currentNavbar.id === 'navPage7') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Mallets"; 
        console.log('if currentNavbar = navPage7');
    } else if (currentNavbar.id === 'navPage8') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Mjolnir Thor's Hammer"; 
        console.log('if currentNavbar = navPage8');
    } else if (currentNavbar.id === 'navPage9') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Mugs"; 
        console.log('if currentNavbar = navPage9');
    } else if (currentNavbar.id === 'navPage10') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Reclining Patio Chairs"; 
        console.log('if currentNavbar = navPage10');
    } else if (currentNavbar.id === 'navPage11') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage12').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Aquarium"; 
        console.log('if currentNavbar = navPage11');
    } else if (currentNavbar.id === 'navPage12') {
        currentNavbar.classList.add('highlight');
        document.getElementById('navPage1').classList.remove('highlight');
        document.getElementById('navPage2').classList.remove('highlight');
        document.getElementById('navPage3').classList.remove('highlight');
        document.getElementById('navPage4').classList.remove('highlight');
        document.getElementById('navPage5').classList.remove('highlight');
        document.getElementById('navPage6').classList.remove('highlight');
        document.getElementById('navPage7').classList.remove('highlight');
        document.getElementById('navPage8').classList.remove('highlight');
        document.getElementById('navPage9').classList.remove('highlight');
        document.getElementById('navPage10').classList.remove('highlight');
        document.getElementById('navPage11').classList.remove('highlight');
        h3UnderHeading.innerHTML = "Contact Me"; 
        console.log('if currentNavbar = navPage12');
    }


    console.log('current navBar = ' + currentNavbar);
    console.log('current navBar id = ' + currentNavbar.id);


}