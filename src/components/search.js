export default function Search({ searchValue }) {
  return `
      <div class="mb-4">
        <label class="sr-only" for="search">Search champions</label>
        <input 
          type="text" 
          placeholder="Search champions..."
          class="p-2 border border-gray-300 rounded"
          id="search"
          value="${searchValue}"
          autofocus
        >
      </div>
    `;
}
