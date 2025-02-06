let count = 0;

function updateCounterDisplay() {
  document.getElementById('counter').textContent = count;
}

function increaseCounter() {
  count++;
  updateCounterDisplay();
}

function decreaseCounter() {
  count--;
  updateCounterDisplay();
}

function resetCounter() {
  count = 0;
  updateCounterDisplay();
}
