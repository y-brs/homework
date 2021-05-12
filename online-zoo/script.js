function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}

function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}

(function () {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-dark');
		document.getElementById('slider').checked = false;
	} else {
		setTheme('theme-light');
		document.getElementById('slider').checked = true;
	}
});

var slider = document.getElementById("range_1");
var output = document.getElementById("range_1_num");

output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
}