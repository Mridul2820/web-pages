
let date = new Date;
document.getElementById('year').innerHTML = date.getFullYear();


function tooggleMunu(){
    var menuToggle = document.querySelector('.menuToggle');
    var navigation = document.querySelector('.navigation');
    var toggleIcon = document.querySelector('.toggleIcon');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

    if (menuToggle.classList.contains('active')) {
        toggleIcon.classList.add('fa-times');
        toggleIcon.classList.remove('fa-bars');
    }

    else {
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
    }
}