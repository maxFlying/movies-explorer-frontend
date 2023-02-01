class MoviesApi {
  
    getMovies() {
        return fetch('https://api.nomoreparties.co/beatfilm-movies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            if (!res.ok) {
                return Promise.reject(`Error: ${res.status}`);
            }
            return res.json();
        });
    };
};
  
const moviesApi = new MoviesApi();
  
export default moviesApi;