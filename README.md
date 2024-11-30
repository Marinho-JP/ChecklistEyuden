# Checklist Project

This is a simple checklist project created for learning and experimenting with JSON data and JavaScript. The goal of this project is to manage a list of items, where each item can be marked as "Recruited" or "Not Recruited" by the user.

## Features

- Display a list of items with associated information like Name, Location, and Method.
- Each item can be marked as "Recruited" or "Not Recruited" using a button.
- The button color changes based on the state (red for "Not Recruited" and green for "Recruited").
- The state of each item (whether it's marked or not) is saved locally in the browser using `localStorage`.

## How to Use

1. **Clone or Download the Project**  
   Download or clone the repository to your local machine. You can’t use the project directly from GitHub Pages as the saving functionality relies on `localStorage`, which only works locally on your computer.

2. **Run the Project Locally**  
   Open the `index.html` file in your browser to view the checklist.  
   You can also use any local server, such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code, to run the project.

3. **Interacting with the Checklist**  
   - Click on the "Recruited" button next to any item to toggle its state.
   - The button text will update to reflect whether the item is recruited or not.
   - Upon reloading the page, the button state will be remembered **only if the project is running locally** on your computer.

## Important Notes

- **LocalStorage Limitations:**  
   The state of the buttons is saved using `localStorage` in the browser, which means the data will persist between page reloads, but **only when running the project locally**. This will not work on GitHub Pages or other online hosts since they don't provide local storage functionality that persists across sessions or devices.
  
- **Download the Files to Make It Work:**  
   To make use of the state-saving functionality, you need to download the project to your local machine. It won't work if accessed directly through GitHub Pages.

## Project Overview

- **Tech Stack:**
  - HTML
  - CSS (for styling)
  - JavaScript (for interactivity and local storage)

- **JSON Structure:**
  The project uses a simple JSON file to store item data:
  
  ```json
  {
    "Id": 1,
    "Name": "Nowa",
    "Location": "Default",
    "Method": "N/A"
  }
