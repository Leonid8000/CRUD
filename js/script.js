"use strict"

//navivation
var navAbout = document.getElementById('linkAbout');
navAbout.addEventListener('click',aboutGo);
function aboutGo() {
    part2.style.cssText = 'width:100%; left:100%;';
    arrowNext.style.cssText = 'display:block;';
    part3.style.cssText = 'width:0; left:100%;';
    arrowNext2.style.cssText = 'display:none;';
    prevAbout.style.cssText = 'display:none;';
    prevPortfolio.style.cssText = 'display:none';
    hideNav();
    stripesOver();
    stripesOut();
}

var navPortfolio = document.getElementById('linkPortfolio');
navPortfolio.addEventListener('click',portfolioGo);
function portfolioGo() {
    part2.style.cssText = 'width:100%; left:0;';
    arrowNext.style.cssText = 'display:none;';
    part3.style.cssText = 'width:0; left:100%;';
    arrowNext2.style.cssText = 'display:block;';
    prevAbout.style.cssText = 'display:block;';
    prevPortfolio.style.cssText = 'display:none';
    hideNav();
    stripesOver();
    stripesOut();
}

var navContact = document.getElementById('linkContact');
navContact.addEventListener('click',contactGo);
function contactGo() {
    part2.style.cssText = 'width:100%; left:0;';
    arrowNext.style.cssText = 'display:none;';
    part3.style.cssText = 'width:100%; left:0;';
    arrowNext2.style.cssText = 'display:none;';
    prevPortfolio.style.cssText = 'display:block';
    hideNav();
    stripesOver();
    stripesOut();
}
//-----------------------------
//nav arrows
// var prevAndNext2 = document.getElementsByClassName('prevAndNext2');
// for(var i = 0;i<prevAndNext2.length;i++);

var arrowNext = document.getElementById('next');
arrowNext.addEventListener('click', showPortfolio);

function showPortfolio() {
    part2.style.cssText = 'width:100%; left:0;';
    arrowNext.style.cssText = 'display:none;';
    prevAbout.style.cssText = 'display:block;';
    arrowNext2.style.cssText = 'display:block;';
    // var prevAndNext2 = document.getElementsByClassName('prevAndNext2');
    // for(var i = 0;i<prevAndNext2.length;i++){
    //     prevAndNext2[i].style.cssText = 'display:block;';
    // }
}


var prevAbout = document.getElementById('prev');
prevAbout.addEventListener('click', showAbout);
function showAbout(){
    part2.style.cssText = 'width:0; left:100%;';
    arrowNext.style.cssText = 'display:block;';
    prevAbout.style.cssText = 'display:none;';
}

var arrowNext2 = document.getElementById('next2');
arrowNext2.addEventListener('click', showContact);
function showContact(){
    part3.style.cssText = 'width:100%; left:0;';
    arrowNext2.style.cssText = 'display:none;';
    prevPortfolio.style.cssText = 'display:block;';
}

var prevPortfolio = document.getElementById('prev2');
prevPortfolio.addEventListener('click', backToPortfolio);
function backToPortfolio(){
    part3.style.cssText = 'width:0; left:100%;';
    arrowNext2.style.cssText = 'display:block;';
    prevPortfolio.style.cssText = 'display:none;';
    prevAbout.style.cssText = 'display:block;';

}
//----------------------------

//nicescroll
// $("#wrap").niceScroll({
//     cursorcolor:"aquamarine",
//     cursorwidth:"24px",
//     background:"rgba(20,20,20,0.3)",
//     cursorborder:"1px solid aquamarine",
//     cursorborderradius:0
// });
// $("#part2").niceScroll(".wrap");
//     cursorcolor:"aquamarine",
//     cursorwidth:"24px",
//     background:"rgba(20,20,20,0.3)",
//     cursorborder:"1px solid aquamarine",
//     cursorborderradius:0
// });  // a world full of color!

// $("#part3").niceScroll(".wrap2");
//     {
//     cursorcolor:"grey",
//     cursorwidth:"5px",
//     cursorborderadius:0
//
// });
//-------------------------

//cuboid=--------------------------------------------------
$("#name,#email,#message").focus(function(){
    $(".cuboid span").addClass("ready");
})
$("#name,#email,#message").blur(function(){
    if($(this).val() == "")
        $(".cuboid span").removeClass("ready");
})
// //remove '.ready' when user blus away but only if there is no content
// $("#email").blur(function(){
//     if($(this).val() == "")
//         $("#cuboid form").removeClass("ready");
// })
//
// //If the user is typing something make the arrow green/.active
// $("#email").keyup(function(){
//     //this adds .active class only if the input has some text
//     $(".submit-icon").toggleClass("active", $(this).val().length > 0);
// })
//
// //on form submit remove .ready and add .loading to the form
// $("#cuboid form").submit(function(){
//     $(this).removeClass("ready").addClass("loading");
//     //finish loading in 3s
//     setTimeout(complete, 3000);
//     //prevent default form submisson
//     return false;
// })
// function complete()
// {
//     $("#cuboid form").removeClass("loading").addClass("complete");
// }
// //reset/refresh functionality
// $(".reset-icon").click(function(){
//     $("#cuboid form").removeClass("complete");
// })
//----------------------------------
var p = document.getElementById('text');
window.setInterval(funcColor, 1000);

function funcColor() {
    if(p.style.color =='red') {
        p.style.color = 'green';
    } else {
        p.style.color ='red';
    }
}

//typed текст
var options = {
    strings: ["<h1>Hello, my name Leonid.</h1>" +
    "<p>I am anaward winning Full Stack Web Developer and UI/UX Javascript specialist.</p>" +
    "<p>Check out my blog articles, React.JS and Vue.JS UI components at the code laboratory.</p>" +
    "<p>Feel free to take a look at my latest projects on the web portfolio page.</p>"],
    typeSpeed: 4
}

var typed = new Typed(".hero-typed-text", options);

//mouseover для кнопки с полосками
var hamburgerBtn = document.getElementById('grandButton');
var stripes = document.getElementsByClassName('stripes');
for(var i = 0; i < stripes.length; i++);

hamburgerBtn.addEventListener('mouseover',stripesOver);

function stripesOver(){
    for(var i = 0; i < stripes.length; i++){
        stripes[0].style.cssText = 'bottom:7px;';
        stripes[2].style.cssText = 'top:7px;';
        hamburgerBtn.style.cursor = 'pointer';
    }
}
//mouseout для кнопки с полосками
hamburgerBtn.addEventListener('mouseout',stripesOut);

function stripesOut(){
    for(var i = 0; i < stripes.length; i++){
        stripes[i].style.cssText = 'width:40px;';
    }
}

// //по клику на кнопку с полосками
hamburgerBtn.addEventListener('click',showNav);
var navMenu = document.getElementById('navOpenMenu');

function showNav(){
    hamburgerBtn.removeEventListener('mouseover',stripesOver);
    hamburgerBtn.removeEventListener('mouseout',stripesOut);
    navMenu.style = 'height:100%;transition:0.6s;';
    stripes[0].style.cssText = ' bottom:-10px; transform:rotate(400deg);';
    stripes[1].style.cssText = ' transform:rotate(320deg);';
    stripes[2].style.cssText = 'top:-10px; transform:rotate(400deg);';
    hamburgerBtn.addEventListener('click',hideNav);
}
//по клику на крест
function hideNav(){
    navMenu.style = 'height:0;transition:0.6s;';
    hamburgerBtn.removeEventListener('click',hideNav);
    // var stripes = document.getElementsByClassName('stripes');
        stripes[0].style.cssText = ' bottom:-10px; transform:rotate(6deg);';
        stripes[1].style.cssText = ' transform:rotate(6deg);';
        stripes[2].style.cssText = 'top:-10px; transform:rotate(6deg);';
    hamburgerBtn.addEventListener('mouseover',stripesOver);
    hamburgerBtn.addEventListener('mouseout',stripesOut);
    // hamburgerBtn.addEventListener('click',openMenuNav);
}

// //right menu test

var part1 = document.getElementById('part1');
var part2 = document.getElementById('part2');
var part3 = document.getElementById('part3');




//logo rotate
var star = document.getElementById('logo'),
    deg = 10;
setInterval(function() {
    star.style.transform = "rotateY(" + deg + "deg)";
    deg = (deg + 1) % 360
}, 10);

var icons__item = document.getElementsByClassName('icons__item');
for(var i = 0; i<icons__item.length;i++)
    icons__item.addEventListener('mouseover',iconRadius);

    function iconRadius() {
        for(var i = 0; i<icons__item.length;i++) {
            icons__item[i].style.cssText = "border-radius:15%;";
        }
    }











