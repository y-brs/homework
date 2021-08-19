const carousel = [...document.querySelectorAll('.carousel img')];
const musicPlayerSection = document.querySelector('.music-player-section');
const backToHomeBtn = document.querySelector('.music-player-section .back-btn');
const playlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player-section .nav-btn');
const backToMusicPlayer = document.querySelector('.playlist .back-btn');
const music = document.querySelector('#audio-source');
const seekBar = document.querySelector('.music-seek-bar');
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.artist-name');
const coverImage = document.querySelector('.cover');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');
const queue = [...document.querySelectorAll('.queue')];
const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.play-button');
const pauseBtn = document.querySelector('i.pause-button');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider');

// carousels

let carouselImageIndex = 0;

const changeCarousel = () => {
  carousel[carouselImageIndex].classList.toggle('active');

  if(carouselImageIndex >= carousel.length - 1){
    carouselImageIndex = 0;
  } else{
    carouselImageIndex++;
  }

  carousel[carouselImageIndex].classList.toggle('active');
}

setInterval(() => {
  changeCarousel();
}, 3000);

// navigations

// toggling music player

musicPlayerSection.ondblclick = function() {
  musicPlayerSection.classList.add('active');
};

// back from music player

backToHomeBtn.addEventListener('click', () => {
  musicPlayerSection.classList.remove('active');
})

// access playlist

navBtn.addEventListener('click', () => {
  playlistSection.classList.add('active');
})

// back from playlist to music player

backToMusicPlayer.addEventListener('click', () => {
  playlistSection.classList.remove('active');
})

// navigation done

// music

let currentMusic = 0;

// funtion for setting up music

const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;

  music.src = song.path;

  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  coverImage.src = song.cover;

  setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);
  }, 300);

  currentMusicTime.innerHTML = '00 : 00';
  queue.forEach(item => item.classList.remove('active'));
  queue[currentMusic].classList.add('active');
}

setMusic(0);

// format duration in 00 : 00 format

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if(min < 10){
    min = `0` + min;
  }

  let sec = Math.floor(time % 60);
  if(sec < 10){
    sec = `0` + sec;
  }

  return `${min} : ${sec}`;
}

// playBtn click event

playBtn.addEventListener('click', () => {
  music.play();
  playBtn.classList.remove('active');
  pauseBtn.classList.add('active');
})

// pauseBtn click event

pauseBtn.addEventListener('click', () => {
  music.pause();
  pauseBtn.classList.remove('active');
  playBtn.classList.add('active');
})

//  forward btn

forwardBtn.addEventListener('click', () => {
  if(currentMusic >= songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  playBtn.click();
})

// backward btn

backwardBtn.addEventListener('click', () => {
  if(currentMusic <= 0) {
    currentMusic = songs.length - 1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  playBtn.click();
})

// seekbar events

setInterval(() => {
  seekBar.value = music.currentTime;
  currentMusicTime.innerHTML = formatTime(music.currentTime);
  if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
    if(repeatBtn.className.includes('active')){
      setMusic(currentMusic);
      playBtn.click();
    } else{
      forwardBtn.click();
    }
  }
}, 500)

seekBar.addEventListener('change', () => {
  music.currentTime = seekBar.value;
})

// repeat button

repeatBtn.addEventListener('click', () => {
  repeatBtn.classList.toggle('active');
})

// volume section

volumeBtn.addEventListener('click', () => {
  volumeBtn.classList.toggle('active');
  volumeSlider.classList.toggle('active');
})

volumeSlider.addEventListener('input', () => {
  music.volume = volumeSlider.value;
})

queue.forEach((item, i) => {
  item.addEventListener('click', () => {
    setMusic(i);
    playBtn.click();
  })
})
