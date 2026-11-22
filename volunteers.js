// volunteers.js: shows the list, with search, filters, status change and remove

const list = document.getElementById("list");

// Builds the list on the page. It runs again after every change.
function showList() {
  const search = document.getElementById("search").value.toLowerCase();
  const eventFilter = document.getElementById("eventFilter").value;
  const statusFilter = document.getElementById("statusFilter").value;

  list.innerHTML = "";
  let shown = 0;

  for (let i = 0; i < volunteers.length; i++) {
    const v = volunteers[i];

    // "continue" skips this volunteer if they don't match the search or filters
    if (!v.name.toLowerCase().includes(search)) { continue; }
    if (eventFilter !== "All" && v.event !== eventFilter) { continue; }
    if (statusFilter !== "All" && v.status !== statusFilter) { continue; }

    // Add one row for this volunteer
    list.innerHTML += `
      <div class="row">
        <div>
          <strong>${v.name}</strong><br>
          ${v.email} · ${v.event}
        </div>
        <div>
          <button class="status ${v.status}" onclick="nextStatus(${i})">${v.status}</button>
          <button class="remove" onclick="removeVolunteer(${i})">Remove</button>
        </div>
      </div>`;
    shown = shown + 1;
  }

  if (shown === 0) {
    list.innerHTML = "<p>No volunteers found.</p>";
  }

  document.getElementById("count").textContent =
    "Showing " + shown + " of " + volunteers.length + " volunteers";
}

// Move a volunteer to the next status: Pending → Confirmed → Completed → Pending
function nextStatus(i) {
  if (volunteers[i].status === "Pending") {
    volunteers[i].status = "Confirmed";
  } else if (volunteers[i].status === "Confirmed") {
    volunteers[i].status = "Completed";
  } else {
    volunteers[i].status = "Pending";
  }

  save();
  showList();
}

// Delete a volunteer (splice removes 1 item at position i)
function removeVolunteer(i) {
  volunteers.splice(i, 1);
  save();
  showList();
}

// Show the list when the page opens
showList();
