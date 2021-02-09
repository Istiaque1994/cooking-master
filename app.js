const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-field");
const itemDetails = document.getElementById("item-details")
const itemContainer = document.getElementById('item-container');

const searchItems = async (searchText) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    const data = await response.json();
    displayItems(data.meals)
}

// Show Image Thumbnail & Title
const displayItems = items => {
    
    if (items == null) { // if no title/ artist found alert
        notification('not-available', 'block');
        setTimeout(() => notification('not-available', 'none'), 3000);
    }
        else {
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'search-result d-flex flex-wrap justify-content-center'
                itemDiv.innerHTML = `
                    <div class="box" onclick="handleitemClick('${item.idMeal}')">
                        <img src="${ item.strMealThumb }">
                        <h3 class="item-name">${item.strMeal}</h3>
                    </div>
                `
                itemContainer.appendChild(itemDiv);
            })
}
}

// Show Item Details
const handleitemClick = async (idMeal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const itemData = await response.json();
    const item = itemData.meals[0];

    const {strMealThumb, strMeal, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10}=item
    const subset = {strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10};
    
    // console.log(item)
    itemContainer.innerHTML = "";

    itemDetails.innerHTML = `
        <div class="single-result d-flex flex-wrap justify-content-center">
            <div id="item-details-info" class="full-box">
                <img src=${strMealThumb} alt="">
                <h3>${strMeal}</h3>
                <h4>${strCategory}</h4>
                <h5>INGREDIENT :</h5>    
            </div>
        </div>
         `;

         // For List Area
         var div = document.getElementById("item-details-info");
         var ul = document.createElement("ul");
        
        div.appendChild(ul)
        Object.values(subset).forEach(val => {
            if (val!="" || val==null){
                let li = document.createElement("li");
                ul.appendChild(li);
                li.append(val)
            }
            
        });
}


// Search Button Event Listener
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchText = searchInput.value.trim();
    // console.log(searchText);
    if (searchText == "") { // if search input is empty show alert and clear innerHtml if exist
        itemContainer.innerHTML = "";
        itemDetails.innerHTML="";
        notification('blank-input', 'block');
        setTimeout(() => notification('blank-input', 'none'), 3000);
    } else {
        itemContainer.innerHTML = "";
        itemDetails.innerHTML="";
        searchItems(searchText);
    }

        
});



const notification = (id, value) => document.getElementById(id).style.display = value;
