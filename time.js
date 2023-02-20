const time = document.querySelector(".time");

  window.onload = displayClock();
function displayClock(){
  let display = new Date().getHours();

  if (display <= 12) {
    time.innerHTML = "Good Morning";
  }if (display >= 12 && display <= 17) {
    time.innerHTML = "Good Afternoon";
  } if (display >= 17 && display <= 24) {
    time.innerHTML = "Good Evening";
  }
  
}