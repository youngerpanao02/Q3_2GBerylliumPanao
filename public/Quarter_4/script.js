let selectedRating = 0;
const stars = document.querySelectorAll('#starInput .star');

// 1. Handle Star Selection
stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        updateStarDisplay(selectedRating);
    });
});

function updateStarDisplay(rating) {
    stars.forEach(s => {
        s.style.color = s.getAttribute('data-value') <= rating ? "gold" : "lightgrey";
    });
}

// 2. Save Movie to localStorage
document.getElementById('movieForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const newMovie = {
        title: document.getElementById('title').value,
        year: document.getElementById('year').value,
        genre: document.getElementById('genre').value,
        rating: selectedRating
    };

    // Get existing data or empty array
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(newMovie);
    
    // Save back to storage
    localStorage.setItem('movies', JSON.stringify(movies));

    // Reset and Refresh
    e.target.reset();
    selectedRating = 0;
    updateStarDisplay(0);
    displayMovies();
});

// 3. Read and Display Movies
function displayMovies() {
    const display = document.getElementById('movieDisplay');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    display.innerHTML = movies.map(m => `
        <div class="movie-item">
            <strong>${m.title} (${m.year})</strong> - ${m.genre}, 
            Rating: <span style="color: gold;">${"★".repeat(m.rating)}${"☆".repeat(5-m.rating)}</span>
        </div>
    `).join('');
}

// Initial load
displayMovies();