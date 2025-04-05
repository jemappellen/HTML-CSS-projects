document.addEventListener('DOMContentLoaded', () => {
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
    { text: "You have been granted a wellness break. Savor it.", author: "Ms. Cobel" }
  ];

  const longBreakQuotes = [
    { text: "Your Outie is kind. Your Outie has brightened people’s days by merely smiling.", author: "Ms. Casey" },
    { text: "You will be reinvigorated for the company.", author: "Mr. Milchick" },
    { text: "Upon request, I can also perform a hug.", author: "Ms. Casey" }
  ];

  // Quotes generator
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
    }, 20000); // Change quote every 20 seconds
  };

  const resetTimerUI = () => {
    clearInterval(interval);
    clearInterval(quoteInterval);
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
    updateQuoteVisibility(); // Update visibility after selecting a timer
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
    hideQuote();
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
    hideQuote();
    selectTimer(longBreak);
    setTimeout(() => {
      timer.classList.add('visible');
      minutes.innerHTML = '15';
      seconds.innerHTML = '00';
      totalSeconds = 15 * 60;
      initialTotalSeconds = totalSeconds;
      startQuoteRotation(longBreakQuotes);
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

  ring.addEventListener('error', () => {
    console.error('Failed to load the ring sound.');
  });

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

  const settingsLink = document.getElementById('settings');
  const closeButton = document.getElementById('close-button');
  const settingsContent = document.getElementById('settings-content');

  // Toggle quote visibility
  const toggleQuoteVisibility = (visible) => {
    if (visible) {
      quoteText.classList.add('visible');
      quoteAuthor.classList.add('visible');
    } else {
      quoteText.classList.remove('visible');
      quoteAuthor.classList.remove('visible');
    }
  };

  const isTimerSelected = () => {
    return document.querySelector('.timer-selected') !== null;
  };

  const updateQuoteVisibility = () => {
    const settingsHidden = !settingsContent.classList.contains('visible');
    const timerSelected = isTimerSelected();
    toggleQuoteVisibility(settingsHidden && timerSelected);
  };

  // Toggle settings content visibility when the settings link is clicked
  settingsLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (settingsContent.classList.contains('visible')) {
      settingsContent.classList.remove('visible');
      settingsContent.setAttribute('aria-hidden', 'true');
      // Ensure no elements within settingsContent have focus
      settingsContent.querySelectorAll('button, [tabindex="0"]').forEach(el => el.blur());
    } else {
      settingsContent.classList.add('visible');
      settingsContent.setAttribute('aria-hidden', 'false');
      document.getElementById('pomodoro-duration').focus(); // Focus on the first input
    }
    updateQuoteVisibility(); // Update visibility after toggling settings
  });

  // Hide settings content when the close button is clicked
  closeButton.addEventListener('click', () => {
    settingsContent.classList.remove('visible');
    settingsContent.setAttribute('aria-hidden', 'true');
    // Ensure no elements within settingsContent have focus
    settingsContent.querySelectorAll('button, [tabindex="0"]').forEach(el => el.blur());
    updateQuoteVisibility(); // Update visibility after closing settings
  });

  // Theme change
  let currentTheme = 'green-theme-set'; // Default theme

  const applyTheme = (theme) => {
    document.documentElement.classList.remove('green-theme-set', 'blue-theme-set');
    document.documentElement.classList.add(theme);
    currentTheme = theme;
  };

  const saveTheme = () => {
    localStorage.setItem('theme', currentTheme);
    alert('Theme saved!');
  };

  // Load saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  // Event listeners for theme buttons
  document.getElementById('green-theme').addEventListener('click', () => applyTheme('green-theme-set'));
  document.getElementById('blue-theme').addEventListener('click', () => applyTheme('blue-theme-set'));

  // Event listener for save button
  document.getElementById('save-button').addEventListener('click', saveTheme);

  // Ensure quote visibility is updated on page load
  updateQuoteVisibility();
});
