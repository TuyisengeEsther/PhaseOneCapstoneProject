export async function fetchBooks(searchTerm) {
  try {
    if (!searchTerm) return [];

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`
    );

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();

    if (!data.docs) return [];

    return data.docs.slice(0, 12);

  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}