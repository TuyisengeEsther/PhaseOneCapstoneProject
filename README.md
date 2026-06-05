📚 Book Explorer

Book Explorer is a simple and responsive web application that allows users to search for books, view book details, and save their favorite books using local storage. It also supports dark mode and a mobile-friendly navigation menu.

🚀 Features
🔍 Search books using Open Library API
📖 Display book title, author, and cover image
⭐ Add books to favorites (stored in browser localStorage)
❌ Remove books from favorites
🌙 Dark mode toggle (light/dark theme)
📱 Responsive mobile menu (hamburger menu)
⏳ Loading state while fetching data
🚫 No results message handling



🛠️ Technologies Used
HTML5
Tailwind CSS
JavaScript (ES Modules)
Open Library API
LocalStorage API
📂 Project Structure
Book Explorer/
index.html
favorites.html
about.html
 js/
fetchBooks.js
favorites.js
darkmode.js
menu.js
main.js
README.md


🔧 How It Works
1. Search Books

Users enter a keyword, and the app fetches books from:

https://openlibrary.org/search.json?q=SEARCH_TERM


2. Display Books

Books are displayed as cards with:

Cover image
Title
Author
"Add to Favorites" button


3. Favorites System
Clicking "Add to Favorites" saves books in localStorage
Favorites persist even after page reload
Users can remove books anytime


5. Dark Mode
Toggles dark class on <html>
Uses Tailwind dark: styling

7. Loading & UX
Shows loading indicator while fetching data
Shows message when no books are found
💾 Local Storage Key
favoriteBooks

Used to store all saved favorite books in the browser.

▶️ How to Run the Project
Clone the repository
git clone https://github.com/TuyisengeEsther/book-explorer.git
Open the project folder
Run index.html in a browser





📄 License

This project is open-source and free to use.
