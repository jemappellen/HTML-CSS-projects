// Navigation mouse events' listeners
const home = document.querySelector('#home');
const info = document.querySelector('#info');
const settings = document.querySelector('#settings');

let infoContent = document.querySelector('#info-content');
let settingsContent = document.querySelector('#settings-content');

infoContent.hidden = true;
settingsContent.hidden = true;

const showHome = () => {
  infoContent.hidden = true;
  settingsContent.hidden = true;
  home.classList.add('active');
  info.classList.remove('active');
  settings.classList.remove('active');
}

const showInfo = () => {
  infoContent.hidden = false;
  home.classList.remove('active');
  info.classList.add('active');
  settings.classList.remove('active');
}

const showSettings = () => {
  settingsContent.hidden = false;
  home.classList.remove('active');
  info.classList.remove('active');
  settings.classList.add('active');
}

home.addEventListener('click', showHome);
info.addEventListener('click', showInfo);
settings.addEventListener('click', showSettings);

// Timer selector
const pomodoro = document.querySelector('#pomodoro');
const shortBreak = document.querySelector('#short-break');
const longBreak = document.querySelector('#long-break');

let timer = document.querySelector('.timer');
let startButton = document.querySelector('#start-button');
let pauseButton = document.querySelector('#pause-button');

let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

const selectPomodoro = () => {
    timer.style.display = 'block';
    minutes.innerHTML = '25';
}

pomodoro.onclick = selectPomodoro;

const selectShortBreak = () => {
    timer.style.display = 'block';
    minutes.innerHTML = '05';
}

shortBreak.onclick = selectShortBreak;

const selectLongBreak = () => {
    timer.style.display = 'block';
    minutes.innerHTML = '15';
}

longBreak.onclick = selectLongBreak;

document.querySelector('#progress-percentage').innerText = '0%';



