const fires = document.querySelectorAll('.fire-wrapper img');

let i = 0;

function changeFrame() {
    fires[i].classList.remove('show');
    if (i < 12) i++;
    else i = 0;
    fires[i].classList.add('show');
}

setInterval(() => changeFrame(), 100);
