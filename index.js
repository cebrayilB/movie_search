let tableBody = document.querySelector("tbody")

async function getMovieName(title) {
  try {
    let res = await fetch(`http://www.omdbapi.com/?apikey=a407a7b3&s=${title}`);
    let data = await res.json();
    data.Search.forEach((elem,index) => {
      renderMovie(elem,index)
    });
   // 
  } catch (err) {
    alert(err)
  } finally {
    console.log("Data downloaded");
  }
}

document.querySelector("#searchMovie").addEventListener("click", () => {
  let movieTitle = document.querySelector("#movieTitle");
  tableBody.innerHTML="";
  getMovieName(movieTitle.value);
  movieTitle.value = "";
});




function renderMovie(movie,index){
  
  let moviecard = document.createElement("tr");
  moviecard.innerHTML = `
  <th scope="row">${index+1}</th>
  <td>${movie.Title}</td>
  <td>${movie.Year}</td>
  <td>${movie.Type}</td>
  <td>${movie.imdbID}</td>
  <td><img src=${movie.Poster} width="100px" height="100px"></td>                  
  `
    tableBody.append(moviecard);
  
}