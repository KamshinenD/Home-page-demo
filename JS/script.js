
// execute script after page load
window.onload = function(){

const collapse = document.getElementById('collapse');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', ()=>{
    collapse.classList.toggle('active');
})
}

// mansonary js

// let grid = document.querySelector('.images-flex');

let msnry = new Masonry(grid, {
    // itemSelector:'.flex-item',
    gutter:100,
    fitWidth: true
})