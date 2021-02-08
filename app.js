const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-field");

const searchItems = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
     // Data Load
    fetch(url)
    .then(res => res.json())
    .then (data => console.log(data.meals))
}

// const displayItems = items => {
//     console.log(items);
// }


// Event listener
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchText = searchInput.value.trim();
    // console.log(searchText);
    if (searchText == "") { // if search input is empty show alert and clear innerHtml if exist
        // result.innerHTML = "";
        // lyricsText.innerHTML = "";
        // alertNotification('empty-input', 'block');
        // setTimeout(() => alertNotification('empty-input', 'none'), 3000);
    } else {
        // result.innerHTML = "";
        // lyricsText.innerHTML = "";
        searchItems(searchText);
    }

        
});
