let search=document.getElementById("search");
search.addEventListener("keyup",(e) => {
    let searText=e.target.value;
    SearchMovies(searText);
});


function SearchMovies(searText){
    const imdbapi=`http://www.omdbapi.com/?s=${searText}&apikey=f056e2f7`;
    window
    .fetch(imdbapi)
    .then(data=>{
        data
        .json()
        .then((moviesData) =>{
            console.log(moviesData)
            let movies=moviesData.Search;
            let output=[];
            for(let movie of movies){
                let defaultImg=
                movie.Poster==="N/A"
                ?"https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg"
                :movie.Poster;
                output +=`
                <div class="AllMovieList">
                <img src="${defaultImg}">
                <h3 class="title">${movie.Title}</h3>
                <h4>${movie.Year}</h4>
                <a href="http://www.imdb.com/title/${movie.imdbID}/" target="_blank">Movie Details</a>
                </div>

                `;
            }
            document.getElementById("MovieList").innerHTML=output;
        })
        .catch(err=>console.log(err));
    })
.catch((err)=>console.log(err));
    
}