class MainApi {
    constructor(data) {
        this._url = data.url;
        this._headers = data.headers;
    }

    _checkServerResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    };

    register(item) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: item.name,
                email: item.email,
                password: item.password,
            }),
        })
        .then(this._checkServerResponse);
    };

    authorize(item) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                email: item.email,
                password: item.password,
            }),
        })
        .then(this._checkServerResponse);
    };

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers
        })
        .then(this._checkServerResponse)
    };

    editUserInfo(item) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name: item.name,
                email: item.email,
            }),
        })
        .then(this._checkServerResponse);
    };

    addUserMovie(movie) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
                movieId: movie.id,
            }),
        })
        .then(this._checkServerResponse);
    };

    deleteUserMovie(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._headers,
        })
        .then(this._checkServerResponse);
    };

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        })
        .then(this._checkServerResponse);
    };

}
 
const mainApi = new MainApi({
    url: 'https://api.maxflying.diploma.nomoredomains.icu',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default mainApi;