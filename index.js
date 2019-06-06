function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget(target, nested) {
	return document.querySelector('div#nested .target')
}

function increaseRankBy(n) {
	const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
	for (let i = 0; i < lis.length; i++) {
		lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
	}
}

function deepestChild() {
	let grand = document.getElementById('grand-node');
	let next = grand.children[0];

	while (next) {
		grand = next;
		next = grand.children[0];
	}

	return grand;
}