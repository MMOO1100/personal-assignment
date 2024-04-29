const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTMxZDIzYTRhZjk5ODgxZDI0YTkwMDg2Zjg4MWYxNCIsInN1YiI6IjY2MjlmMThkOGQ3N2M0MDA5OTJkOTI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0s57OS6kWDOVcaKaFHxon_wffLKpgeiUNO1Apjwjlg0'
    }
};

fetch('https://api.themoviedb.org/3/account/21234757/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));