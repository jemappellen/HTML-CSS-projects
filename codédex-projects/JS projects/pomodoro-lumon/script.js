document.addEventListener('DOMContentLoaded', () => {
  // Navigation mouse events' listeners
  const home = document.getElementById('home');
  const info = document.getElementById('info');
  const settings = document.getElementById('settings');

  let infoContent = document.getElementById('info-content');
  let settingsContent = document.getElementById('settings-content');

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
  const pomodoro = document.getElementById('pomodoro');
  const shortBreak = document.getElementById('short-break');
  const longBreak = document.getElementById('long-break');

  let timer = document.querySelector('.timer');
  let startButton = document.getElementById('start-button');
  let pauseButton = document.getElementById('pause-button');
  const ring = new Audio('./assets/ring.mp3');

  let minutes = document.querySelector('.minutes');
  let seconds = document.querySelector('.seconds');
  let progressPercentage = document.getElementById('progress-percentage');
  let progressIndicator = document.getElementById('progress-indicator');

  let totalSeconds = 0;
  let initialTotalSeconds = 0;
  let interval;
  let isPaused = false;
  let pomodoroCount = 0; // Track the number of completed Pomodoro sessions
  let quoteInterval;
  let currentQuoteIndex = 0;

  const quoteText = document.getElementById('quote');
  const quoteAuthor = document.getElementById('quote-author');

  // Quotes for Pomodoro sessions
  const pomodoroQuotes = [
      { text: "A handshake is available upon request.", author: "Ms. Cobel" },
      { text: "Every time you find yourself here, it’s because you chose to come back.", author: "Mark S." },
      { text: "No, I don't think severance divides us. I think it brings us together.", author: "Helly R." },
      { text: "Your resignation request is denied.", author: "Ms. Cobel" },
      { text: "My delts are embarrassingly good today. My outie does muscle shows for sure.", author: "Dylan G." },
      { text: "The work is mysterious and important.", author: "Mark S." },
      { text: "Hey, I know this has been a tough quarter. I’m gonna see about rustling you up some special perks. That sound good?", author: "Mr. Milchick" },
      { text: "Okay, kids. Let’s find out what’s for dinner.", author: "Irving B." }
  ];

  // Quotes for break sessions
  const breakQuotes = [
      { text: "Take a moment. The pause is a kindness.", author: "Ms. Casey" },
      { text: "You feel peaceful. You feel rested. You feel happy.", author: "Ms. Casey" },
      { text: "You have been granted a wellness break. Savor it.", author: "Ms. Cobel" },
      { text: "Your Outie is kind. Your Outie has brightened people’s days by merely smiling.", author: "Ms. Casey" },
      { text: "You will be reinvigorated for the company.", author: "Mr. Milchick" }
  ];

  const displayQuote = (quote) => {
    if (quoteText && quoteAuthor) { // Ensure elements are not null
      quoteText.textContent = `“${quote.text}”`;
      quoteAuthor.textContent = quote.author;
      quoteText.classList.add('visible');
      quoteAuthor.classList.add('visible');
    }
  };

  const hideQuote = () => {
    if (quoteText && quoteAuthor) {
        quoteText.classList.remove('visible');
        quoteAuthor.classList.remove('visible');
    }
  };

  const startQuoteRotation = (quotes) => {
      hideQuote(); // Hide the quote initially
      currentQuoteIndex = 0;
      displayQuote(quotes[currentQuoteIndex]);

      quoteInterval = setInterval(() => {
          currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
          displayQuote(quotes[currentQuoteIndex]);
      }, 30000); // Change quote every 30 seconds
  };

  const resetTimerUI = () => {
    clearInterval(interval);
    clearInterval(quoteInterval); // Clear the quote rotation interval
    isPaused = true;
    startButton.classList.add('visible'); // Add class for transition
    pauseButton.classList.remove('visible'); // Remove class for transition
    progressPercentage.innerText = '0%';
    progressIndicator.style.width = '0%';
    timer.classList.remove('visible'); // Remove class for transition
};

  const selectTimer = (selectedTimer) => {
      // Remove the selected class from all timer list items
      pomodoro.classList.remove('timer-selected');
      shortBreak.classList.remove('timer-selected');
      longBreak.classList.remove('timer-selected');

      // Add the selected class to the clicked timer list item
      selectedTimer.classList.add('timer-selected');
  };

  const selectPomodoro = () => {
      resetTimerUI();
      hideQuote();
      selectTimer(pomodoro);
      setTimeout(() => {
        timer.classList.add('visible');
        minutes.innerHTML = '25';
        seconds.innerHTML = '00';
        totalSeconds = 25 * 60;
        initialTotalSeconds = totalSeconds;
        startQuoteRotation(pomodoroQuotes);
    }, 200); // Delay to allow the transition to complete
  };

  const selectShortBreak = () => {
      resetTimerUI();
      selectTimer(shortBreak);
      setTimeout(() => {
        timer.classList.add('visible');
        minutes.innerHTML = '05';
        seconds.innerHTML = '00';
        totalSeconds = 5 * 60;
        initialTotalSeconds = totalSeconds;
        startQuoteRotation(breakQuotes);
    }, 200); // Delay to allow the transition to complete
  };

  const selectLongBreak = () => {
      resetTimerUI();
      selectTimer(longBreak);
      setTimeout(() => {
        timer.classList.add('visible');
        minutes.innerHTML = '15';
        seconds.innerHTML = '00';
        totalSeconds = 15 * 60;
        initialTotalSeconds = totalSeconds;
        startQuoteRotation(breakQuotes);
    }, 200); // Delay to allow the transition to complete
  };

  pomodoro.addEventListener('click', selectPomodoro);
  shortBreak.addEventListener('click', selectShortBreak);
  longBreak.addEventListener('click', selectLongBreak);

  // Timer functionality
  const progressBar = document.getElementById('progress-bar');

  const pomodoroMessages = [
      "You have completed a unit of focused labor. Kier smiles upon you.",
      "The numbers are pleased. You may rest… briefly.",
      "Your toil has not gone unnoticed. A reprieve is sanctioned.",
      "You have honored the pact of diligence. A short respite awaits."
  ];

  const breakMessages = [
      "Recalibration complete. Return to your purpose.",
      "Your moment of kindness has expired. Please proceed.",
      "Welcome back. The work missed you.",
      "Your outie entrusted you with this duty. Honor them."
  ];

  const startTimer = () => {
      startButton.classList.remove('visible');
      pauseButton.classList.add('visible');
      progressBar.classList.add('visible');

      if (isPaused) {
          // Resume the timer from where it was paused
          isPaused = false;
      } else {
          // Start the timer from the beginning
          totalSeconds = initialTotalSeconds;
      }

      interval = setInterval(() => {
          totalSeconds--;

          let mins = Math.floor(totalSeconds / 60);
          let secs = totalSeconds % 60;

          minutes.innerHTML = mins.toString().padStart(2, '0');
          seconds.innerHTML = secs.toString().padStart(2, '0');

          // Calculate progress as an integer percentage
          let progress = Math.floor(((initialTotalSeconds - totalSeconds) / initialTotalSeconds) * 100);
          progressPercentage.innerText = `${progress}%`;
          progressIndicator.style.width = `${progress}%`;

          if (totalSeconds === 0) {
              clearInterval(interval);
              ring.play();
              showNotification();
          }
      }, 1000);
  };

  const pauseTimer = () => {
      startButton.classList.add('visible');
      pauseButton.classList.remove('visible');
      clearInterval(interval);
      isPaused = true;
  };

  const showNotification = () => {
      if (Notification.permission === "granted") {
          let message;
          if (totalSeconds === 25 * 60) {
              message = pomodoroMessages[pomodoroCount % pomodoroMessages.length];
              pomodoroCount++;
          } else {
              message = breakMessages[Math.floor(Math.random() * breakMessages.length)];
          }
          new Notification("Timer Complete", {
              body: message,
          });
      } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(permission => {
              if (permission === "granted") {
                  showNotification();
              }
          });
      }
  };

  startButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);

  // Request notification permission on page load
  Notification.requestPermission();
});
