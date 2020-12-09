const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll('.expand-btn');

// ham toggle
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
})

// Mobile menu Expand
expandBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle("open");
    });
});