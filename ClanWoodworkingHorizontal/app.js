
var winWidth = window.innerWidth;
var outerContainer = document.getElementById('outer-container');
var myXOffset = outerContainer.scrollLeft;
var winWidthModulo = myXOffset % window.innerWidth;
var myNewXOffset = myXOffset;
var pageNum = (myNewXOffset + winWidth) / winWidth;
var newPageNum = pageNum;
var currentNavbar = document.getElementById('navPage' + newPageNum);
var h3UnderHeading = document.getElementById('h3UnderHeading');
// maxXOffset is the total number of pages change this iff adding more pages
var maxXOffset = 12; 
// prevent middle mouse click scrolling
window.addEventListener("mousedown", function(e){ if(e.button == 1){ e.preventDefault(); } });

//body on resize correct onclick html line 10
function myResize() {
    myXOffset = outerContainer.scrollLeft;
    outerContainer = document.getElementById('outer-container');
    winWidthModulo = myXOffset % window.innerWidth;
   
    if (myXOffset % window.innerWidth != 0) { 
        winWidth = winWidthModulo;
        outerContainer.scrollBy(-winWidth, 0);
        console.log('myXOffset = ' + myXOffset);
        console.log('window.innerWidth = ' + window.innerWidth);
        console.log('winWidth = ' + winWidth);
        console.log('winWidthModulo = ' + winWidthModulo);
    }
}


//onload highlight first page on navbar
//changes header heading
window.onload = function() {
    document.getElementById('navPage1').classList.add('highlight');
    h3UnderHeading.innerHTML = "Clan Woodworking";
};

//mousewheel scrolling up and down per page eventListener
document.getElementById("outer-container").onwheel = function() {myScrollPage()};

//mousewheel scrolling up and down per page function
//class highlight on current navbar
function myScrollPage() {
    outerContainer = document.getElementById('outer-container');
    winWidth = window.innerWidth;
    winWidthModulo = myXOffset % window.innerWidth;
    myXOffset = outerContainer.scrollLeft;
    var scrollUp = event.deltaY < 0;
    var scrollDown = event.deltaY > 0;
    pageNum = (myNewXOffset + winWidth) / winWidth;
    
    // console.log('pageNum = ' + pageNum);


    if (scrollUp) { 
        if (myXOffset === 0) {
            console.log('error cant scroll left');
        } else if (myXOffset % window.innerWidth != 0) { 
            winWidth = winWidthModulo;
            // console.log('modulo scroll up' + winWidthModulo);
            // outerContainer.scrollBy(-winWidth, 0);
            myXOffset = myXOffset - winWidth;
            // console.log('scrolling up');
        } else {
            outerContainer.scrollBy(-winWidth, 0);
            myXOffset = myXOffset - winWidth;
            // console.log('scrolling up');
            // console.log(event.deltaY + ' ' + scrollDown);
        } 
    } else if (scrollDown) {
        if (pageNum === maxXOffset) {
            console.log('error cant scroll right');
        } else if (myXOffset % window.innerWidth != 0) { 
            winWidth = window.innerWidth - winWidthModulo;
            // console.log('modulo scroll down' + winWidthModulo);
            outerContainer.scrollBy(winWidth, 0);
            myXOffset = myXOffset + winWidth;
            // console.log('scrolling down');
        } else {
            outerContainer.scrollBy(winWidth, 0);
            myXOffset = myXOffset + winWidth;
            // console.log('scrolling down');
            // console.log(event.deltaY + ' ' + scrollDown);
        } 
    }
    console.log('myXOffset is :' + myXOffset);
    changeNavColor();
}

//remove highlight class from navbar
// called inside changeNavColor()
var links = document.querySelectorAll("#navbar a");
function removeHighlightNavbar() {
    for (let i = 0; i < links.length; i++)
        links[i].className = '';
}

//highlight current page on navbar
//called inside function myScrollPage()
function changeNavColor() {
    // get current page number
    myNewXOffset = myXOffset;
    pageNum = (myNewXOffset + winWidth) / winWidth;
    newPageNum = pageNum;
    currentNavbar = document.getElementById('navPage' + newPageNum);
    var newH3UnderHeading = document.getElementById('h3UnderHeading');
    outerContainer = document.getElementById('outer-container');

    // remove highlight class from navbar
    removeHighlightNavbar();
    currentNavbar.classList.add('highlight');

    // console.log('newH3UnderHeading above split = ' + newH3UnderHeading);

    //change h3UnderHeading to this #page.span
    let underHeading = currentNavbar.id.split('navPage');
    // console.log('below split ' + underHeading);
    underHeading = "#page" + underHeading[1];
    newH3UnderHeading = document.querySelector(underHeading).querySelector('span').innerHTML;
    h3UnderHeading.innerHTML = newH3UnderHeading; 

    // console.log('underHeading = ' + underHeading);
    // console.log('current navBar = ' + currentNavbar);
    // console.log('current navBar id = ' + currentNavbar.id);
    // console.log('newPageNum = ' + newPageNum);
    // console.log('pageNum = ' + pageNum);
}

//next button moves one page right
//also highlights current page on navbar
nextList = document.querySelectorAll(".next");
for (var i = 0; i < nextList.length; i++) {
    nextList[i].addEventListener("click", function (e) {
        e.preventDefault();
        myXOffset = outerContainer.scrollLeft;
        outerContainer = document.getElementById('outer-container');
        winWidthModulo = myXOffset % window.innerWidth;
   
    if (myXOffset % window.innerWidth != 0) { 
        winWidth = winWidthModulo;
        outerContainer.scrollBy(-winWidth, 0);
        // console.log('myXOffset = ' + myXOffset);
        // console.log('window.innerWidth = ' + window.innerWidth);
        // console.log('winWidth = ' + winWidth);
        // console.log('winWidthModulo = ' + winWidthModulo);
    } else
        outerContainer.scrollBy(winWidth, 0);
        console.log('buttonRight');
        myScrollPage();
        changeNavColor();
    });
    
}

//prev button moves one page left
//also highlights current page on navbar
prevList = document.querySelectorAll(".prev");
for (var i = 0; i < prevList.length; i++) {
    prevList[i].addEventListener("click", function (e) {
        e.preventDefault();
        myXOffset = outerContainer.scrollLeft;
        outerContainer = document.getElementById('outer-container');
        winWidthModulo = myXOffset % window.innerWidth;
   
    if (myXOffset % window.innerWidth != 0) { 
        winWidth = winWidthModulo;
        outerContainer.scrollBy(-winWidth, 0);
        // console.log('myXOffset = ' + myXOffset);
        // console.log('window.innerWidth = ' + window.innerWidth);
        // console.log('winWidth = ' + winWidth);
        // console.log('winWidthModulo = ' + winWidthModulo);
    } else
        outerContainer.scrollBy(-winWidth, 0);
        console.log('buttonLeft');
        myScrollPage();
        changeNavColor();
    });
}


var mobileLinks = document.getElementById("myLinks");

//move to page and highlight navbar on click
document.addEventListener("DOMContentLoaded", () => {
    outerContainer = document.getElementById('outer-container');
    // get all the links with an ID that starts with 'pageLink'
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
            behavior: 'smooth'
        });
        h3UnderHeading.innerHTML = refH3UnderHeading;
        //if max width is 768px collapse navbar on click
        if (mobileLinks.style.display === "block") {
            mobileLinks.style.display = "none";
            console.log('navbar collapse hidden');
        }
        // console.log('scroll');
        // console.log('refH3UnderHeading is ' + refH3UnderHeading);
        // console.log('target is ' + ref);
        // console.log('ref[1] is ' + ref[2]);
        // console.log('document.querySelector(ref).offsetLeft is ' + document.querySelector(ref).offsetLeft);
        
      })
    })
})


// zoom in images onclick
//hides prev and next buttons
//hide navbar when image clicked
var images = document.querySelectorAll('img');
var modal = document.querySelector('.modal');
var currentImageDiv = document.querySelector('.currentImage');
var numOutOfDiv = document.querySelector('.numOutOf');
var closeBtn = document.querySelector('.close');

for (var i = 0; i < images.length; i++) {
    var img = images[i];   
    // When the image is clicked...
    img.onclick = function(event) {
        currImageId = this.id;
        currImageSrc = this.src;
        currentImageDiv.innerHTML = '<img id="' + currImageId + '" style="animation: fadeAndGrowMe 1s;" src="' + currImageSrc + '">';
        modal.style.display = 'flex';
        currImgValue = parseInt(currImageId.charAt(currImageId.length-1));
        console.log('currImgValue = ' + currImgValue);
        numOutOfDiv.innerHTML = currImgValue + '/6';
        console.log('this.src = ' + this.src);
        console.log('this.id = ' + this.id);
        console.log('currImageId above next= ' + currImageId);
        
        hideNextPrevBtn();
        hideNavbar();
    };
}

//hide navbar during modal
var navigationBar = document.getElementById('navbar');
function hideNavbar() {
    navigationBar = document.getElementById('navbar');
    navigationBar.style.visibility = 'hidden';
}

//show navbar when modal closes
function showNavbar() {
    navigationBar = document.getElementById('navbar');
    navigationBar.style.visibility = 'visible';
}

//hide main prev and next buttons during modal
var prevNextBtn = document.querySelectorAll(".btn");
function hideNextPrevBtn() {
    var prevNextBtn = document.querySelectorAll(".btn");
    for(var i = 0; i < prevNextBtn.length; i++) {
        prevNextBtn[i].style.visibility = "hidden";
    }
}

//show main prev and next buttons when modal closes
function showNextPrevBtn() {
    var prevNextBtn = document.querySelectorAll(".btn");
    for(var i = 0; i < prevNextBtn.length; i++) {
        prevNextBtn[i].style.visibility = "visible";
    }
}

//close the modal onclick in html line 17
function closeModal(){
    // currentImageDiv.innerHTML = '';
    // delete currImageId;
    // delete currImageSrc;
    modal.style.display = 'none';
    nextImgBtn.style.visibility = 'visible';
    prevImgBtn.style.visibility = 'visible';
    showNextPrevBtn();
    showNavbar();

}

//next button goes to next image in modal
var nextImgBtn = document.querySelector('.nextImgBtn');
nextImgBtn.addEventListener('click', function(event) {
    console.log('next');
    res = parseInt(currImageId.charAt(currImageId.length-1));

    if (res === 7) {
        res = 1;
    }

    if (res === 6) {
        res = 0;
    }
    res = res + 1;
    currImageId = currImageId.slice(0, -1) + res;
    srcRes = currImageSrc.slice(0, -5) + res + ".jpg";
    currentImageDiv.innerHTML = '<img id="' + currImageId + '" style="animation: fadeMe 1s;" src="' + srcRes + '">';
    
    numOutOfDiv.innerHTML = res + '/6';
    
    // console.log(typeof res);
    // console.log('res = ' + res);
    // console.log('next');
});

//prev button goes to prev image in modal
var prevImgBtn = document.querySelector('.prevImgBtn');
prevImgBtn.addEventListener('click', function(event) {
    // console.log('prev');
    // console.log('prev res = ' + res);
    res = parseInt(currImageId.charAt(currImageId.length-1));
    res--;
    if (res === 0) {
        res = 6;
    }
      
    currImageId = currImageId.slice(0, -1) + res;
    srcRes = currImageSrc.slice(0, -5) + res + ".jpg";
    currentImageDiv.innerHTML = '<img id="' + currImageId + '" style="animation: fadeMe 1s;" src="' + srcRes + '">';
    numOutOfDiv.innerHTML = res + '/6';

    // console.log('srcRes = ' + srcRes);
    // console.log('currImageId in prev= ' + currImageId);
    // console.log('prev res= ' + res);
});


// Mobile navbar

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 


