const display = document.getElementById('display');
const operators = ['+', '-', '*', '/'];

function appendValue(value) {
  if (value === '.') {
    if (display.value.includes('.')) return;
  }

  // Оператор дараа оператор дарвал сүүлийнхийг солино
  if (operators.includes(value) && operators.includes(display.value.slice(-1))) {
    display.value = display.value.slice(0, -1) + value;
    return;
  }

  if (display.value === '0' && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Алдаа';
  }
}

function clearDisplay() {
  display.value = '0';
}

function cancelLast() {
  if (display.value.length <= 1) {
    display.value = '0';
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function calcPercent() {
  let val = parseFloat(display.value);
  if (!isNaN(val)) display.value = (val / 100).toString();
}

function calcSqrt() {
  let val = parseFloat(display.value);
  if (!isNaN(val) && val >= 0) {
    display.value = parseFloat(Math.sqrt(val).toFixed(10)).toString();
  } else {
    display.value = 'Алдаа';
  }
}