let selectedRating = 0;
const stars = document.querySelectorAll('#starInput .star');

// --- Star Rating Input Logic ---
stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'));
        updateStarDisplay(selectedRating);
    });
});

function updateStarDisplay(rating) {
    stars.forEach(s => {
        s.style.color = s.getAttribute('data-value') <= rating ? "gold" : "lightgrey";
    });
}

// --- CRUD: Create / Save Logic ---
document.getElementById('movieForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const movieData = {
        title: document.getElementById('title').value,
        year: document.getElementById('year').value,
        genre: document.getElementById('genre').value,
        rating: selectedRating
    };

    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movieData);
    localStorage.setItem('movies', JSON.stringify(movies));

    e.target.reset();
    selectedRating = 0;
    updateStarDisplay(0);
    displayMovies();
});

// --- CRUD: Delete Logic ---
function deleteMovie(index) {
    // Step 4 & 5: Confirmation dialog
    if (confirm("Are you sure you want to delete?")) {
        let movies = JSON.parse(localStorage.getItem('movies')) || [];
        
        // Remove the specific movie at the given index
        movies.splice(index, 1);
        
        // Update localStorage and refresh list
        localStorage.setItem('movies', JSON.stringify(movies));
        displayMovies();
    }
}

// --- CRUD: Read / Display Logic ---
function displayMovies() {
    const display = document.getElementById('movieDisplay');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    display.innerHTML = movies.map((m, index) => `
        <div class="movie-item" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <strong>${m.title} (${m.year})</strong> - ${m.genre}, 
                Rating: <span style="color: gold;">${"★".repeat(m.rating)}${"☆".repeat(5-m.rating)}</span>
            </div>
            <button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
        </div>
    `).join('');
}

// Initial Load
displayMovies();