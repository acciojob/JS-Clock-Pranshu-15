// script.js

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const secondHand = document.querySelector('.second-hand');
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const minuteHand = document.querySelector('.min-hand');
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Fix for transition issues when hand moves from 59 to 0 second/minute/hour
function fixTransition(hand) {
  hand.style.transition = 'none';
  hand.offsetHeight; // Trigger a reflow, flushing the CSS changes
  hand.style.transition = '';
}

function handleHandTransition() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  if (seconds === 0) {
    fixTransition(secondHand);
  }
  if (minutes === 0 && seconds === 0) {
    fixTransition(minuteHand);
  }
  if (hours === 0 && minutes === 0 && seconds === 0) {
    fixTransition(hourHand);
  }
}

setInterval(() => {
  setDate();
  handleHandTransition();
}, 1000);

setDate();
