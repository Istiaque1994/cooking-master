const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-field");

const searchItems = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    
    // Data Load
    fetch(url)
    .then(res => res.json())
    .then (data => displayItems(data.meals))
}

// Show Image Thumbnail & Titel
const displayItems = items => {
    const itemContainer = document.getElementById('item-container');

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'search-result d-flex flex-wrap justify-content-center'
        itemDiv.innerHTML = `
            <div class="box">
                <img src="${ item.strMealThumb }" onclick="handleitemClick('${item.strMealThumb}', '${item.strMeal}')">
                <h3 class="item-name" onclick="handleitemClick('${item.strMealThumb}', '${item.idMeal}')">${item.strMeal}</h3>
            </div>
        `
        itemContainer.appendChild(itemDiv);
    })
}

// Show Item Details
const handleitemClick = (strMealThumb, idMeal) => {
    const itemdetailDiv = document.createElement('div');
    itemdetailDiv.className = 'single-result d-flex flex-wrap justify-content-center'
    itemdetailDiv.innerHTML = `
    <div class="full-box">
        <img src="${ item.strMealThumb }" alt="">
        <h3>${item.strMeal}</h3>
    </div>
    `
}


// Event listener
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchText = searchInput.value.trim();
    // console.log(searchText);
    if (searchText == "") { // if search input is empty show alert and clear innerHtml if exist
        // result.innerHTML = "";
        // alertNotification('empty-input', 'block');
        // setTimeout(() => alertNotification('empty-input', 'none'), 3000);
    } else {
        // result.innerHTML = "";
        searchItems(searchText);
    }

        
});
