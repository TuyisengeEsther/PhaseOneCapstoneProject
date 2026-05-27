
export function setupDarkMode() {

  const html = document.documentElement;

  const themeToggle = document.getElementById('themeToggle');

  const mobileThemeToggle = document.getElementById('mobileThemeToggle');

  function toggleTheme() {
    html.classList.toggle('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
  }
}
