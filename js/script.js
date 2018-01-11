// scripts.js
var list = document.getElementById('list')
var add = document.getElementById('addElem')
add.addEventListener('click', function() {
	var element = document.createElement('li');
	var liElements = document.getElementsByTagName('li');
	element.innerHTML = "item " + liElements.length;
	list.appendChild(element);
});