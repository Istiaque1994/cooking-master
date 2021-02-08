const searchItems = () => {
    const searchText = document.getElementById("search-field").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);

    // Data Load
    fetch(url)
    .then(res => res.json())
    .then (data => console.log(meals))
    
}

// const displayItems = items => {
//     console.log(items);
// }