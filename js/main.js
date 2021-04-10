//Слайдер раздела introducing
let counter = 0;
document.getElementsByClassName("next")[counter].getElementsByTagName('img')[0].style.display = 'none';

let id = setInterval(function(){
    let slides = document.getElementsByClassName("item");
    let nav = document.getElementsByClassName("next");

    for (let slide of slides) {
        slide.style.display = "none";
    }

    for (let slide of nav) {
        slide.classList.remove("next-hidden");
        slide.getElementsByTagName('img')[0].style.display = 'block';
    }

    slides[counter].style.display = "block";
    nav[counter].classList.add("next-hidden");
    nav[counter].getElementsByTagName('img')[0].style.display = 'none';
    counter++;

    if(counter >= slides.length) {
        counter = 0;
    }

}, 5000);


//"Гамбургер" jquery
$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');

    if ($('.menu-btn').hasClass('menu-btn_active')) {
        $('#list-show').removeClass('btn-list-remove');
        $('#list-show').addClass('btn-list');
    } else {
        $('#list-show').removeClass('btn-list');
        $('#list-show').addClass('btn-list-remove');
    }

});
