const piano = document.querySelector('.piano'),
	pianoКeys = document.querySelectorAll('.piano-key'),
	buttonsKeys = document.querySelector('.btn-container'),
	buttons = document.querySelectorAll('.btn'),
	fullScreen = document.querySelector('.fullscreen'),
	keys = Array.from(document.querySelectorAll('.piano-key'));

var allowed = true;

// Keyboard click -> play music
window.addEventListener('keydown', function (e) {
	const note = document.querySelector(`audio[data-key='${e.keyCode}']`);
	const src = document.querySelector(`.piano-key[data-key='${e.keyCode}']`);

	if (e.repeat != undefined) {
		allowed = !e.repeat;
	};
	if (!allowed) return;
	allowed = false;

	if(!src) return;

	note.currentTime = 0;
	note.play();

	src.classList.add('piano-key-active');
	removeTransition(e);
});

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	e.target.classList.remove('piano-key-active','piano-key-active-pseudo');
};

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Mouse click and move —> play music
piano.addEventListener('mousedown', (e) => {
	if (e.target.classList.contains('piano-key')) playNote(e);
});

piano.addEventListener('mousedown', mouseMove)

function mouseMove() {
	this.addEventListener('mouseover', (e) => {
		if (e.target.classList.contains('piano-key') && e.which === 1 || e.which == 3) playNote(e);
	})
};

// Play note
function playNote(e) {
	const note = e.target.dataset.note;
	const src = `assets/audio/${note}.mp3`;

	pianoКeys.forEach((i) => {
		i.classList.contains('piano-key-active','piano-key-active-pseudo') && i.classList.remove('piano-key-active','piano-key-active-pseudo');
	});

	e.target.classList.add('piano-key-active','piano-key-active-pseudo');

	const audio = new Audio();
	audio.src = src;
	audio.currentTime = 0;
	audio.play();
};

// Fullscreen toogle
const toggleFullScreen = () => {
	return (document.fullscreenElement) ? document.exitFullscreen && document.exitFullscreen() : document.documentElement.requestFullscreen();
};

document.addEventListener('keypress', function(e) {
	if (e.key === 122) {
		toggleFullScreen();
	}
}, false);

fullScreen.addEventListener('click', () => {
	toggleFullScreen();
});

// Notes/Letters switch
buttonsKeys.addEventListener('click', (e) => {
	if (!e.target.classList.contains('btn-active')) toggleButtonActive();
	return (e.target.classList.contains('btn-letters')) ? addButtonClass() : removeButtonClass();
});

const toggleButtonActive = () => {
	buttons.forEach(tag => {
		tag.classList.toggle('btn-active');
	})
};

const addButtonClass = () => {
	pianoКeys.forEach(tag => {
		tag.classList.add('piano-key-letter')
	})
};

const removeButtonClass = () => {
	pianoКeys.forEach(tag => {
		tag.classList.remove('piano-key-letter')
	})
};