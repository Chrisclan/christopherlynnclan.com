




// sticky nav on window scroll 
var navbar = document.querySelector("nav");
window.addEventListener("scroll", function () {
    const pixels = window.pageYOffset;
    if (pixels > window.innerHeight - 50) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");

    }
});


/*Navigation scroll*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        console.log('scrolling');
        console.log('this.getAttributehref = ' + this.getAttribute('href'));
    });
});


//add animate for each section 
const config = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};
window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting) {
                document.querySelector(`section[id="${id}"]`).classList.add('fade');
                document.querySelector(`section[id="${id}"]`).classList.add('animate');
                console.log("adding animate to " + id)
            }
            console.log("not adding")
        });
    }, config);

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});



//Code Modal

//get all code buttons and their associated text files

var codeButtons = document.querySelectorAll('.codeButton');
var currentTextFile = document.querySelector('.currentTextFile');
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var codeTitle = document.querySelector(".codeTitle");


// for (var i = 0; i < codeButtons.length; i++) {
//     var cBtn = codeButtons[i];
//     // When the button is clicked...
//     cBtn.onclick = function (event) {
//         currFileId = this.id;
//         currFileTitle = this.title;
//         currFileAlt = this.alt;

//         console.log(currFileId + " is the id");
//         console.log(currFileTitle + " is the title");
//         console.log(currFileAlt + " is the alt");

//         // currentTextFile.innerHTML = '<script src="' + currFileId + '"></script><link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-' + currFileTitle + '.css">';
//         modal.style.display = 'block';

//     };
// }

function displayCode(codeId) {
    modal.style.display = 'block';
    codeId.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = 'scroll';
    for (var i = 0; i < modalScripts.length; i++) {
        modalScripts[i].style.display = "none"; // depending on what you're doing
    }
}

var modalScripts = document.getElementsByClassName("modalScripts");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'scroll';
        for (var i = 0; i < modalScripts.length; i++) {
            modalScripts[i].style.display = "none"; // depending on what you're doing
        }
    }
}

// var divsToHide = document.getElementsByClassName("classname"); //divsToHide is an array
//     for(var i = 0; i < modalScripts.length; i++){
//         modalScripts[i].style.visibility = "hidden"; // or
//         modalScripts[i].style.display = "none"; // depending on what you're doing
//     }