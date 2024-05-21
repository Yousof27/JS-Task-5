
let li = document.querySelectorAll('li');
let result = document.querySelector('.result');

if (localStorage.color) {
    let activeElement = document.querySelector(`[data-color="${localStorage.color}"]`);
    active(activeElement);
    result.style.backgroundColor = localStorage.color;
}

li.forEach(e => {
    e.style.backgroundColor = e.getAttribute('data-color');
    e.addEventListener('click', (ev) => {
        active(e);
        localStorage.color = e.getAttribute('data-color');
        result.style.backgroundColor = localStorage.color;
    })
})

function active(el) {
    li.forEach(element=> {
        element.classList.remove('active');
    });
    el.classList.add('active');
}

// localStorage.clear();
