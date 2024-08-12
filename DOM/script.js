


let button = document.getElementById('toggleFormBtn');
let form = document.getElementById('contactForm');


button.addEventListener('click', () => {
    
    if (form.style.display == 'none' || form.style.display == '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
})
