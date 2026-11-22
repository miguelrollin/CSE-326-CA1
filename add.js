// add.js: the "Add a volunteer" form

const form = document.getElementById("addForm");
const message = document.getElementById("message");

// Shows a red (error) or green (success) message under the form
function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

// This runs when the form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const eventName = document.getElementById("eventName").value;

  // Check the input. "return" stops the function if something is wrong.
  if (name.length < 2) {
    showMessage("Please enter a name with at least 2 letters.", "error");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    showMessage("Please enter a valid email, like name@example.com.", "error");
    return;
  }

  if (eventName === "") {
    showMessage("Please choose an event.", "error");
    return;
  }

  // Everything is fine: add the volunteer to the list and save
  volunteers.push({ name: name, email: email, event: eventName, status: "Pending" });
  save();

  showMessage(name + " was added to " + eventName + "!", "success");
  form.reset(); // clear the form
});
