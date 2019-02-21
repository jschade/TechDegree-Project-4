var imgSearch = document.getElementById("userInput");
var imgDataTitle = document.querySelectorAll("a[data-caption");

imgSearch.addEventListener("keyup", function(filtering){

	let filtered = imgSearch.value.toUpperCase();

	for (var i = 0; i < imgDataTitle.length; i++){
		var title = imgDataTitle[i].getAttribute("data-caption");
		if (title.toUpperCase().includes(filtered)) {
			imgDataTitle[i].style.display = "inline";
		} else {
			imgDataTitle[i].style.display = "none";
		}
	}
});