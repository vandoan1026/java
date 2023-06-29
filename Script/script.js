// Set the date we're counting down to
var countDownDate = new Date("Jul 6, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="birthday-countdown"
  // document.getElementById("birthday-countdown").innerHTML =
  //   days + " " + hours + " " + minutes + " " + seconds;

  document.getElementById("bcd-days").innerHTML = days;
  document.getElementById("bcd-hours").innerHTML = hours;
  document.getElementById("bcd-minutes").innerHTML = minutes;
  document.getElementById("bcd-seconds").innerHTML = seconds;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("birthday-countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Gallery
/*
const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
*/
