
var winHeight = window.innerHeight;
var myContainer = document.getElementById('container');
var myYOffset = myContainer.scrollTop;
var pageNum = (myYOffset + winHeight) / winHeight;

 
// prevent middle mouse click scrolling
window.addEventListener("mousedown", function(e){ if(e.button == 1){ e.preventDefault(); } });
/////////////////////////////////////////////////////////////////////////////
const config = {
    root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
    rootMargin: '0px',
    threshold: 0.2
  };
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting) {
                document.querySelector(`.navbar ol li a[href="#${id}"]`).parentElement.classList.add('highlight');

            } else {
                document.querySelector(`.navbar ol li a[href="#${id}"]`).parentElement.classList.remove('highlight');
            }
        });
    }, config);

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
    
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        console.log('scrolling');
        console.log('this.getAttributehref = ' + this.getAttribute('href'));
        //close mobile navbar
        closeNav();
    });
});




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
        currentImageDiv.innerHTML = '<img onclick="closeModal()" id="' + currImageId + '" style="animation: fadeAndGrowMe 1s;" src="' + currImageSrc + '">';
        modal.style.display = 'flex';
        var h1s = document.getElementsByTagName('h1');
            for (var i = 0; i < h1s.length; i++) {
            h1s[i].style.display = 'none';        
            }
        currImgValueString = currImageId.substr(currImageId.length-2);
        currImgValue = parseInt(currImageId.substr(currImageId.length-2));
        console.log('currImgValuetoString().length = ' + currImgValue.toString().length);

        currImageClassName = currImageId.slice(0, -2);
        console.log('currImageClassName = ' + currImageClassName);

        let imageList = document.getElementsByClassName(currImageClassName);
        console.log('imageList[currImgValue]' + imageList[currImgValue-1].id);
        console.log('currImgValue = ' + currImgValue);
        if (currImgValue.toString().length === 1) {
            currImgValue = '0' + currImgValue;
        }
        
        numOutOfDiv.innerHTML = currImgValue + '/' + imageList.length;
        

    };
}

//close the modal onclick
function closeModal(){
    modal.style.display = 'none';
    var h1s = document.getElementsByTagName('h1');
            for (var i = 0; i < h1s.length; i++) {
            h1s[i].style.display = 'block';        
            }
}


var nextImgBtn = document.querySelector('.nextImgBtn');
nextImgBtn.addEventListener('click', function(event) {
    console.log('next');
    currImageClassName = currImageId.slice(0, -2);
    let imageList = document.getElementsByClassName(currImageClassName);
    currImgValueString = currImageId.substr(currImageId.length-2);
    res = parseInt(currImageId.substr(currImageId.length-2));
    console.log('res = ' + res);
    console.log('imageList.length = ' + imageList.length);
    if (res === imageList.length) {
        res = '0' + 0;
    }

    if (currImgValueString.startsWith('0')) {
        res++;
        res = '0' + res;
        console.log('res starts with 0')
        console.log('res starts with 0 = ' + res)
    } else {
        res = res + 1;
    }

    if (res.length === 3){
        res = res.slice(1);
    }
    console.log('currImageId = ' + currImageId);
    
    currImageId = currImageId.slice(0, -2) + res;
    srcRes = currImageSrc.slice(0, -6) + res + ".jpg";
    currentImageDiv.innerHTML = '<img onclick="closeModal()" id="' + currImageId + '" style="animation: fadeMe 1s;" src="' + srcRes + '">';
    
    numOutOfDiv.innerHTML = res + '/' + imageList.length;

});

//prev button goes to prev image in modal
var prevImgBtn = document.querySelector('.prevImgBtn');
prevImgBtn.addEventListener('click', function(event) {
    console.log('prev');
    currImageClassName = currImageId.slice(0, -2);
    let imageList = document.getElementsByClassName(currImageClassName);
    currImgValueString = currImageId.substr(currImageId.length-2);
    res = parseInt(currImageId.substr(currImageId.length-2));
    console.log('res = ' + res);
    console.log('imageList.length = ' + imageList.length);
    
    if (currImgValueString.startsWith('0')) {
        res--;
        res = '0' + res;
        console.log('res starts with 0')
        console.log('res starts with 0 = ' + res)
    } else {
        res--;
    }
    if (res === '00') {
        res = imageList.length
    }
    if (res === 9) {
        res = '0' + res
    }
    console.log('type of res ' + typeof res);
    // if (res === 1) {
    //     res = imageList.length;
    // } else {
    //     res--;
    // }
    
    
    currImageId = currImageId.slice(0, -2) + res;
    srcRes = currImageSrc.slice(0, -6) + res + ".jpg";
    currentImageDiv.innerHTML = '<img onclick="closeModal()" id="' + currImageId + '" style="animation: fadeMe 1s;" src="' + srcRes + '">';
    numOutOfDiv.innerHTML = res + '/' + imageList.length;

    // console.log('srcRes = ' + srcRes);
    // console.log('currImageId in prev= ' + currImageId);
    // console.log('prev res= ' + res);
});


// Mobile navbar

/* Open the sidenav */
function openNav() {
    if (document.getElementById("mySidenav").style.width === "100%") {
        document.getElementById("mySidenav").style.width = "0";
    } else {
        document.getElementById("mySidenav").style.width = "100%";
    }    
}
  
  /* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



const myImages = document.querySelectorAll('img[id]')
myImages.forEach(function(imgs) {
    let myImagesrc = imgs.src;
    let mySplit = myImagesrc.split("img");
    let smallSrc = 'img/sml';
    let medSrc = 'img/med';
    // console.log(myImagesrc[22]);
    // console.log(mySplit[0]);
    let newSmallSrc = mySplit[0] + smallSrc + mySplit[1]; 
    let newMedSrc = mySplit[0] + medSrc + mySplit[1]; 

    // console.log(newSmallSrc);
    var width = window.innerWidth;
    if (width < 500) {
        imgs.src = newSmallSrc;
    }
    if (width > 500 && width < 1000){
        imgs.src = newMedSrc;
    }
})









// set src of image according to media size

// select images onload
//if media is < 1000
//     image src is img/med/.....    750width
//if media is < 500
//  image src is img/sml/.....      500width