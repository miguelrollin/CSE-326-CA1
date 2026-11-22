# Hands Up: Club Volunteer Allocation Portal

A small multi-page website that helps a club sign up volunteers for events and track who has confirmed. It is built with plain **HTML, CSS and JavaScript**, with no frameworks or libraries, so every line is easy to read and explain.

The design is inspired by bold editorial websites: a big condensed headline, a cream background, thick borders, a tilted moving strip and a blue dashboard section.

## Features

- **Responsive layout:** works on phones, tablets and desktops.
- **Add form:** a structured form to sign a volunteer up for an event.
- **Input validation:** clear red error messages (name, email, event) and a green success message.
- **Search and filters:** search by name, filter by event, and filter by status.
- **Status tracking:** click a volunteer's status to move it from Pending, to Confirmed, to Completed.
- **Dashboard:** totals for each status and a progress bar showing the percentage completed.
- **Remove records:** delete a volunteer from the list.
- **Saved data:** everything is kept in the browser with `localStorage`, so it is still there after a refresh and on every page.
- **Smooth animations:** page fade-in, moving strip, hover effects and a growing progress bar.

## Pages

| Page | File | What it does |
| --- | --- | --- |
| Home | `index.html` | Headline, moving strip and the club dashboard |
| Add | `add.html` | Form to add a new volunteer |
| Volunteers | `volunteers.html` | Searchable, filterable list with status and remove buttons |

## Project structure

```
hands-up/
├── index.html        Home page
├── add.html          Add volunteer page
├── volunteers.html   Volunteer list page
├── style.css         All the styling (shared by every page)
├── data.js           Volunteer list + save() function (shared by every page)
├── home.js           Dashboard numbers and progress bar
├── add.js            Form validation and adding a volunteer
└── volunteers.js     Showing the list, search, filters, status change, remove
```

## How to run

1. Download or clone this repository.
2. Keep all the files in the **same folder**.
3. Open `index.html` in any modern browser (double-click it).

Optional: in VS Code, right-click `index.html` and choose **Open with Live Server** to reload the page automatically while you edit.

An internet connection is only needed to load the two Google Fonts (Anton and DM Sans). Without it the site still works and uses default fonts.

## How it works

- **`data.js`** creates a `volunteers` array. Each volunteer is an object:

  ```js
  { name: "Aarav Nair", email: "aarav@example.com", event: "Food Drive", status: "Confirmed" }
  ```

  The array is loaded from `localStorage` (or from a few sample volunteers the first time) and saved again by the `save()` function.
- **`add.js`** listens for the form's `submit` event, checks the input with `if` statements, then uses `push()` to add the volunteer and `save()` to store it.
- **`volunteers.js`** has a `showList()` function that loops through the array and skips anyone who does not match the search box or the filters. It runs again after every change.
- **`home.js`** loops through the array, counts each status and fills in the dashboard.

## Concepts used

- HTML: semantic tags, forms, labels, multiple linked pages
- CSS: variables, flexbox, grid, media-free responsive layout (`flex-wrap`, `auto-fit`), transitions, `@keyframes` animations
- JavaScript: variables, arrays and objects, `for` loops, `if / else`, functions, DOM selection, events, template strings, `localStorage` with `JSON.parse` and `JSON.stringify`

## Reset the data

The volunteer list is saved in your browser. To go back to the sample data, open the browser developer tools, go to **Application** (or **Storage**) and **Local Storage**, delete the `volunteers` key and refresh the page.

## Known limitations

- Data is stored only in the current browser. There is no server or database, so it is not shared between devices.
- A volunteer's name, email and event cannot be edited after saving (only the status can change). Remove and add again instead.
- The form does not check for duplicate volunteers.
- Names and emails are placed into the page as typed. A real project should clean them first for security.

## Ideas for improvement

- Edit a volunteer's details
- Limit how many volunteers each event can take
- Add event dates and a separate events page
- Move the data to a backend and database
- Export the list to a CSV file

## Author

Built by **Miguel Rollin, Anuj Kumar and Shelvin K Shaji** as a CSE326 CA2 project.
