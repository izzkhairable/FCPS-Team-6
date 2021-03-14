function getTaskCategory() {
	//Check page number when getting task category
	//If got category then return as array [(photo url, name),(photo, name),(photo, name)]
	return [("https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg",1),("https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg",2),("https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg",3)];
}

function getPageNum() {
	//Track current page & total pages available
	return "#/#";
}

document.getElementById("header-text").innerHTML = "What do you need help ah?";

var task_category = getTaskCategory();

if (task_category == null) {
	//No categories to show
	document.getElementById("task-category").innerHTML = "Nothing";
} else {
	for (category in task_category) {
		var tile = document.createElement("div");
		tile.setAttribute("id", "category-tile");
		tile.classList.add("col");
		
		var tile_image = document.createElement("img");
		tile_image.setAttribute("src", category[0]);
		tile_image.classList.add("category-image");
		tile.appendChild(tile_image);

		var tile_words = document.createElement("h2");
		tile_words.innerHTML = category[1];
		tile_words.classList.add("category-name");
		tile.appendChild(tile_words);

		var element = document.getElementById("task-category");
		element.appendChild(tile);
	}
	//Tiles with task categories
	var page_num = 'Page' + getPageNum();
	document.getElementById("page-num").innerHTML = page_num;
}