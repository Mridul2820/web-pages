let button = document.getElementsByClassName('button');

let gallery = document.getElementById('gallery');

let images = new Array (
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg",
    "assets/img4.jpg",
    "assets/img5.jpg",
    "assets/img6.jpg"
);

for (let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
        gallery.src = images[i];
        let current = document.getElementsByClassName('active');

        current[0].className = current[0].className.replace('active', '');
        this.className += ' active';
    }
}