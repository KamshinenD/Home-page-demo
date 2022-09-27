
// execute script after page load
window.onload = function(){

const collapse = document.getElementById('collapse');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', ()=>{
    collapse.classList.toggle('active');
})
}