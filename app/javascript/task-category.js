function getTaskCategory() {
	//Check page number when getting task category
	//If got category then return as array [(photo url, name),(photo, name),(photo, name)]
	var result = [["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 1"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 2"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 3"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 4"]]
	return result;
}

document.getElementById("header-text").innerHTML = "What do you need help ah?";

var task_category = getTaskCategory();

if (task_category == null) {
	//No categories to show
	document.getElementById("task-category").innerHTML = "Nothing";
} else {
	var first_category = true;
	for (let category of task_category) {
		var tile = document.createElement("div");
		tile.setAttribute("id", "category-tile");
		tile.className = "carousel-item";
		if (first_category) {
			tile.classList.add("active");
			first_category = false;
		}
		var tile_image = document.createElement("img");
		tile_image.src = category[0];
		tile_image.alt = "slide";
		tile_image.className = "category-image d-block";
		tile.appendChild(tile_image);

		var tile_words = document.createElement("div");
		tile_words.className = "category-name carousel-caption";
		var tile_name = document.createElement("h2")
		tile_name.innerHTML = category[1];
		tile_words.appendChild(tile_name);
		tile.appendChild(tile_words);

		var element = document.getElementById("task-category");
		element.appendChild(tile);
	}
	//Tiles with task categories
	//var page_num = 'Page' + getPageNum();
	//document.getElementById("page-num").innerHTML = page_num;
}