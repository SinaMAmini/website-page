const seaContainer = document.querySelector('.sea-container');

const singleWave = 'assets/images/wave/SingleWave.svg';

const viewHeight = seaContainer.clientHeight;
const viewWidth = document.body.clientWidth;

for (let i = 0; viewHeight - 0.5 * viewWidth * i >= 0; i++) {
    const newWave = document.createElement('img');
    newWave.src = singleWave;
    newWave.alt = 'wave';

    newWave.classList.add('simple-wave');
    newWave.style.insetBlockStart = `${i * 0.52 * viewWidth - 100}px`;

    seaContainer.appendChild(newWave);

    const newWave2 = document.createElement('img');
    newWave2.src = singleWave;
    newWave2.alt = 'wave';

    newWave2.classList.add('simple-wave');
    newWave2.style.insetBlockStart = `${i * 0.5 * viewWidth - 100}px`;
    newWave2.style.transform = 'translateY(-50%)';

    seaContainer.appendChild(newWave2);
}
