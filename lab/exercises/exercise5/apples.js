//sets up function to be called when the specific event is delivered to the target
window.addEventListener('load', function(e) {
// instructs elements to be positioned in grid system
	var appleGrid = document.getElementById('apple-grid');
// references the list of apples
	var appleList = document.getElementById('apple-list');
// targets each element based on its id
	var appleThumbs = document.getElementById('apple-thumbs');
// references data
	var gridApples = document.querySelectorAll('.apple');

//creates grid and informs one apple goes in each slot
	gridApples.forEach((gridApple, i) => {
//adds the "click" action to each apple element
		gridApple.addEventListener('click', pickApple);
	});
//defines the function that picks each apple
	function pickApple(e) {
// defines each event target
		var apple = e.target;
// refers to the string of elements/apples
		var appleName = apple.dataset.apple.toString();
// defines the list item that links with the html element
		var appleListItem = document.createElement('li');
// connects with the list that provides the data
		var ol = appleList.querySelector('ol');
// ordered list
		ol.appendChild(appleListItem);
// targets the text that would appear in relation to the selection
		appleListItem.innerText = appleName;
// Variable that requests response from the console
		var appleThumb = apple.cloneNode(true);
// variable that references the child
		appleThumbs.appendChild(appleThumb);

	}

});
