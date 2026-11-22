// data.js: used by every page.
// It holds the list of volunteers and saves it in the browser.

// Example volunteers, used the first time the site opens
const sampleVolunteers = [
  { name: "Aarav Nair",   email: "aarav@example.com",  event: "Food Drive",      status: "Confirmed" },
  { name: "Meera Pillai", email: "meera@example.com",  event: "Orientation Day", status: "Pending" },
  { name: "Rohan Singh",  email: "rohan@example.com",  event: "Tech Workshop",   status: "Completed" },
  { name: "Anika Sharma", email: "anika@example.com",  event: "Charity Run",     status: "Confirmed" },
  { name: "Joel Thomas",  email: "joel@example.com",   event: "Food Drive",      status: "Pending" },
  { name: "Fatima Khan",  email: "fatima@example.com", event: "Tech Workshop",   status: "Completed" }
];

// Load the saved list. If nothing is saved yet, use the sample list.
let volunteers = JSON.parse(localStorage.getItem("volunteers")) || sampleVolunteers;

// Save the list (so it is still there after a refresh and on the other pages)
function save() {
  localStorage.setItem("volunteers", JSON.stringify(volunteers));
}
