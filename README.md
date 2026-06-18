# 📚 Book Explorer

Book Explorer is a responsive, interactive web application that allows users to search for books using the Open Library API, view results in a modern UI, and save their favorite books using localStorage.

---

## 🚀 Live Features

- 🔎 Search books using Open Library API
- 📖 Browse dynamic book results
- ❤️ Add/remove favorite books
- 💾 Persistent favorites using localStorage
- 🌙 Dark mode support
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Loading & error handling states
- 🧭 Multi-page navigation (Home, Favorites, About)

---

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (ES6 Modules)
- Open Library API
- localStorage

---
project structure
/project-root
│── index.html
│── favorites.html
│── about.html
│
│── /js
│ ├── app.js
│ ├── fetchBooks.js
│ ├── favorites.js
│ ├── darkmode.js
│ ├── menu.js
│
│── /assets
│── README.md


---

## 🔗 API Used

Open Library Search API  
(https://openlibrary.org/search.json?q=harry+potter)

⚙️ How It Works
1. Search Books
User types a keyword
App sends request to Open Library API
Results are displayed dynamically
2. Favorites System
Clicking “Add to Favorites” saves book to localStorage
Favorites page reads and displays saved books
Users can remove books anytime
3. Dark Mode
Toggle between light and dark themes
Saved in browser session

3. Dark Mode
Toggle between light and dark themes
Saved in browser session
📌 Key Features Implementation
🔎 Search Functionality
Uses async/await fetch
Handles empty input validation
Shows loading and "no results" state
❤️ Favorites Module
ES6 module pattern
Functions:
addFavorite(book)
removeFavorite(bookKey)
getFavorites()
⚡ Error Handling
API failure handling
Empty results handling
Safe JSON parsing from localStorage


📱 Responsive Design
Mobile-first layout
Tailwind CSS breakpoints:
sm
md
lg
xl




## 📁 Project Structure
