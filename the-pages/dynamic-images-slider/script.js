const prev = document.getElementById('prev');
const next = document.getElementById('next');
const hero = document.getElementById('hero');
const thumbs = document.querySelectorAll('.thumb');
const preview = document.querySelector('.preview');

var backgroundImg = new Array (
    "assets/fulls/01.jpg",
    "assets/fulls/02.jpg",
    "assets/fulls/03.jpg",
    "assets/fulls/04.jpg",
    "assets/fulls/05.jpg",
    "assets/fulls/06.jpg",
    "assets/fulls/07.jpg",
    "assets/fulls/08.jpg",
    "assets/fulls/09.jpg",
    "assets/fulls/10.jpg",
    "assets/fulls/11.jpg",
    "assets/fulls/12.jpg",
)

let i = 0;

next.addEventListener('click', () => {
    if(i < backgroundImg.length - 1) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbs[i+1].classList.add('active');
        thumbs[i].classList.remove('active');
        i++;

        preview.scrollBy({
            left: 60,
            behavior: "smooth"
        })
    }
})

prev.addEventListener('click', () => {
    if(i > 0) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbs[i-1].classList.add('active');
        thumbs[i].classList.remove('active');
        i--;
        preview.scroll;

        preview.scrollBy({
            left: -60,
            behavior: "smooth"
        })
    }
})
