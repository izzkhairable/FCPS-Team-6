function getTaskCategory() {
	//Check page number when getting task category
	//If got category then return as array [(photo url, name),(photo, name),(photo, name)]
	var result = [["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 1"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 2"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 3"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 4"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 5"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 6"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 7"],["https://www.foot.com/wp-content/uploads/2017/06/placeholder-square.jpg","Name 8"]]
	return result;
}

document.getElementById("header-text").innerHTML = "What do you need help ah?";

var task_category = getTaskCategory();

if (task_category == null) {
	//No categories to show
	document.getElementById("task-category").innerHTML = "Nothing";
} else {
	var first_page = true;
	var cat_count = 0
	for (let category of task_category) {
		var page = document.createElement("div");
		page.setAttribute("id", "category-page");
		page.className = "carousel-item card row";

		var tile = document.createElement("div");
		tile.className = "card col";

		var tile_image = document.createElement("img");
		tile_image.src = category[0];
		tile_image.className = "category-image d-block card-img-top";
		tile.appendChild(tile_image);

		var tile_words = document.createElement("div");
		tile_words.className = "category-name card-body";
		var tile_name = document.createElement("h2")
		tile_name.className = "card-text";
		tile_name.innerHTML = category[1];
		tile_words.appendChild(tile_name);
		tile.appendChild(tile_words);

		page.appendChild(tile);
		tile = undefined;
		cat_count++;

		if (cat_count%4 === 0) {
			if (first_page) {
				page.classList.add("active");
				first_page = false;
			}
			var element = document.getElementById("task-category");
			element.appendChild(page);
			page = undefined;
		}
	}
	//Tiles with task categories
	//var page_num = 'Page' + getPageNum();
	//document.getElementById("page-num").innerHTML = page_num;
}