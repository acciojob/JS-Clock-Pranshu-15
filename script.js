// // script.js

// function setDate() {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const secondsDegrees = ((seconds / 60) * 360) + 90;
//   const secondHand = document.querySelector('.second-hand');
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   const minutes = now.getMinutes();
//   const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
//   const minuteHand = document.querySelector('.min-hand');
//   minuteHand.style.transform = `rotate(${minutesDegrees.toFixed(2)}deg)`; // Adjusted toFixed value

//   const hours = now.getHours();
//   const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
//   const hourHand = document.querySelector('.hour-hand');
//   hourHand.style.transform = `rotate(${hoursDegrees.toFixed(2)}deg)`; // Adjusted toFixed value
// }


// // Fix for transition issues when hand moves from 59 to 0 second/minute/hour
// function fixTransition(hand) {
//   hand.style.transition = 'none';
//   hand.offsetHeight; // Trigger a reflow, flushing the CSS changes
//   hand.style.transition = '';
// }

// function handleHandTransition() {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const minutes = now.getMinutes();
//   const hours = now.getHours();

//   const secondHand = document.querySelector('.second-hand');
//   const minuteHand = document.querySelector('.min-hand');
//   const hourHand = document.querySelector('.hour-hand');

//   if (seconds === 0) {
//     fixTransition(secondHand);
//   }
//   if (minutes === 0 && seconds === 0) {
//     fixTransition(minuteHand);
//   }
//   if (hours === 0 && minutes === 0 && seconds === 0) {
//     fixTransition(hourHand);
//   }
// }

// setInterval(() => {
//   setDate();
//   handleHandTransition();
// }, 1000);

// setDate();

const secHand = document.querySelector(‘.second-hand’);

const minHand = document.querySelector(‘.min-hand’);

const hourHand = document.querySelector(‘.hour-hand’);

function updateTime() {

const now = new Date();

const sec = now.getSeconds();

const min = now.getMinutes();

const hr = now.getHours();

const secDeg = (sec*6);

const minDeg = (min*6 + sec/10);

const hrDeg = (30*hr + min/2)%360;

secHand.style.transform = `rotate(${secDeg+90}deg)`;

minHand.style.transform = `rotate(${minDeg+90}deg)`;

hourHand.style.transform = `rotate(${hrDeg+90}deg)`;



// hourHand.style.transform = `rotate(${hrRot+90}deg)`;

// minHand.style.transform = `rotate(${minRot+90}deg)`;

// secHand.style.transform = `rotate(${secRot+90}deg)`;

}

setInterval(updateTime, 500);