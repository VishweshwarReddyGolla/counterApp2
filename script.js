let count = document.getElementById('count');

function onIncrement() {
  let previousValue = parseInt(count.textContent);
  let updatedValue = previousValue + 1;
  count.textContent = updatedValue;
}

function onDecrement() {
  let previousValue = parseInt(count.textContent);
  let updatedValue = previousValue - 1;
  count.textContent = updatedValue;
}
