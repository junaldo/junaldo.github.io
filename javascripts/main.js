// var slideIndex = 1;
//
// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
//
// $(document).ready(function () {
//     showSlides();
// });

// handle navigation display
function navigationHandler() {
    var x = document.getElementById("condensednav");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// var slideIndex = 1;
//
// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
//
// function showDomestic() {
//     document.getElementById('domestic').style.display = "block";
//     document.getElementById('international').style.display = "none";
//     document.getElementById('singapore').style.display = "none";
// }
//
// function showInternational() {
//     document.getElementById('domestic').style.display = "none";
//     document.getElementById('international').style.display = "block";
//     document.getElementById('singapore').style.display = "none";
// }
//
// function showSingapore() {
//     document.getElementById('domestic').style.display = "none";
//     document.getElementById('international').style.display = "none";
//     document.getElementById('singapore').style.display = "block";
// }
//
// $(document).ready(function () {
//     showSlides();
// });