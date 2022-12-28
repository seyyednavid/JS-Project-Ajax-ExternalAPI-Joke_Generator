document.querySelector(".get-jokes").addEventListener("click", getJokes);

//  Get Jokes
function getJokes(e) {
  const category = document.querySelector("#categories").value;
  //  Base URL
  let url = "https://api.chucknorris.io/jokes/random";

  // if we select specific category
  if (category !== "all") {
    url += `?category=${category}`;
  }
  // create xhr object
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const joke = JSON.parse(this.responseText);
      let output = `
                <li>Joke : ${joke.value}</li>
                <li>categories : ${joke.categories}</li>
                <li>created_at : ${joke.created_at}</li>
                <li>id : ${joke.id}</li>
                <li>updated_at : ${joke.updated_at}</li>
                <li>url : ${joke.url}</li>
            `;
      //  Add lis to ul
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
