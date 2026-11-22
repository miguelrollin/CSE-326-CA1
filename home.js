// home.js: fills in the dashboard numbers on the home page

let pending = 0;
let confirmed = 0;
let completed = 0;

// Go through every volunteer and count each status
for (let i = 0; i < volunteers.length; i++) {
  if (volunteers[i].status === "Pending") {
    pending = pending + 1;
  } else if (volunteers[i].status === "Confirmed") {
    confirmed = confirmed + 1;
  } else {
    completed = completed + 1;
  }
}

// Work out the percentage of volunteers who are completed
let percent = 0;
if (volunteers.length > 0) {
  percent = Math.round((completed / volunteers.length) * 100);
}

// Show the numbers on the page
document.getElementById("total").textContent = volunteers.length;
document.getElementById("pending").textContent = pending;
document.getElementById("confirmed").textContent = confirmed;
document.getElementById("completed").textContent = completed;
document.getElementById("percentText").textContent = percent + "% completed";

// Wait a moment, then set the bar width so it grows smoothly
setTimeout(function () {
  document.getElementById("barFill").style.width = percent + "%";
}, 300);
