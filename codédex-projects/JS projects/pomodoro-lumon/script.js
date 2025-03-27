// Navigation mouse events' listeners
const home = document.querySelector('#home');
const info = document.querySelector('#info');
const settings = document.querySelector('#settings');

let infoContent = document.querySelector('#info-content');
let settingsContent = document.querySelector('#settings-content');

/*
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
*/

// Timer selector
const pomodoro = document.querySelector('#pomodoro');
const shortBreak = document.querySelector('#short-break');
const longBreak = document.querySelector('#long-break');

let timer = document.querySelector('.timer');
let startButton = document.querySelector('#start-button');
let pauseButton = document.querySelector('#pause-button');

let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let progressPercentage = document.querySelector('#progress-percentage');
let progressIndicator = document.querySelector('#progress-indicator');

const selectPomodoro = () => {
  timer.style.display = 'block';
  minutes.innerHTML = '25';
  seconds.innerHTML = '00';
  progressPercentage.innerText = '0%';
  progressIndicator.style.width = '0%';
}

const selectShortBreak = () => {
  timer.style.display = 'block';
  minutes.innerHTML = '05';
  seconds.innerHTML = '00';
  progressPercentage.innerText = '0%';
  progressIndicator.style.width = '0%';
}

const selectLongBreak = () => {
  timer.style.display = 'block';
  minutes.innerHTML = '15';
  seconds.innerHTML = '00';
  progressPercentage.innerText = '0%';
  progressIndicator.style.width = '0%';
}

pomodoro.addEventListener('click', selectPomodoro);
shortBreak.addEventListener('click', selectShortBreak);
longBreak.addEventListener('click', selectLongBreak);

// Timer functionality
let interval;
let totalSeconds;

const startTimer = () => {
    totalSeconds = parseInt(minutes.innerHTML) * 60;
    interval = setInterval(() => {
        totalSeconds--;
        let mins = Math.floor(totalSeconds / 60);
        let secs = totalSeconds % 60;
        minutes.innerHTML = mins.toString().padStart(2, '0');
        seconds.innerHTML = secs.toString().padStart(2, '0');
        
        let progress = ((totalSeconds / (parseInt(minutes.innerHTML) * 60)) * 100).toFixed(2);
        progressPercentage.innerText = `${progress}%`;
        progressIndicator.style.width = `${progress}%`;
        if (totalSeconds <= 0) {
            clearInterval(interval);
            alert('Time is up!');
        }
    }, 1000);
}

const pauseTimer = () => {
    clearInterval(interval);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);



