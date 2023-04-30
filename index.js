const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let timer = null
  return (seconds) => {
    let currSec = seconds
    if (timer) clearInterval(timer)
    timer = setInterval(() => {
      if (currSec >= 1000) {
        time = new Date(currSec)
        timerEl.textContent = `${String(time.getUTCHours()).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}:${String(time.getUTCSeconds()).padStart(2, '0')}`
        currSec -= 1000
      } else {
        timerEl.textContent = '00:00:00'
        clearInterval(timer)
      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  inputEl.value = e.target.value.replace( /[^0123456789]/, '' )
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
