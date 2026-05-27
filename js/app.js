
import { fetchBooks } from './fetchBooks.js';
import { addFavorite } from './favorites.js';
import { setupDarkMode } from './darkmode.js';
import { setupMenu } from './menu.js';

setupDarkMode();
setupMenu();

const grid = document.getElementById('bookGrid');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');

async function displayBooks(searchTerm) {

  loading.classList.remove('hidden');
  noResults.classList.add('hidden');

  grid.innerHTML = '';

  const books = await fetchBooks(searchTerm);

  loading.classList.add('hidden');

  if (books.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }

  books.forEach(book => {

    const card = document.createElement('div');

    card.className = `
      bg-white dark:bg-slate-900
      rounded-3xl overflow-hidden shadow-2xl
      hover:scale-105 transition duration-300
    `;

    const imageUrl = book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
      : 'https://via.placeholder.com/300x400?text=No+Image';

    card.innerHTML = `

      <img
        src="${imageUrl}"
        class="w-full h-80 object-cover"
      />

      <div class="p-6">

        <h2 class="text-xl font-bold mb-3 line-clamp-2">
          ${book.title}
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-5">
          ${book.author_name ? book.author_name[0] : 'Unknown Author'}
        </p>

        <button class="favBtn bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-xl transition w-full">
          Add to Favorites
        </button>

      </div>
    `;

    card.querySelector('.favBtn').addEventListener('click', () => {

      addFavorite(book);

      alert('Book added to favorites');
    });

    grid.appendChild(card);
  });
}

searchBtn.addEventListener('click', () => {

  const value = searchInput.value.trim();

  if (value !== '') {
    displayBooks(value);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  displayBooks('programming');
});
