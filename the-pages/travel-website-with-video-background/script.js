
const loading = document.getElementById('loading');
const loadingImg = document.getElementById('loading-image');
const banner = document.getElementById('banner');


// Show Spinner after loading 
setTimeout(() => {
    loading.remove();
    loadingImg.remove();
    banner.style.display = 'flex';
}, 2000)