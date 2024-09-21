const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");
const volumeControl = document.getElementById("volume");
const songTitle = document.getElementById("song-title");
const songAuthor = document.getElementById("song-author");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// List of songs
const songs = [
  { title: "Happyrock", author: "benjamin Tissot", src: "happyrock.mp3" },
  {
    title: "Creative Minds",
    author: "benjamin Tissot",
    src: "creativeminds.mp3",
  },
  { title: "High Octane", author: "benjamin Tissot", src: "highoctane.mp3" },
];

let isPlaying = false;
let currentSongIndex = 0;

// Load a song
function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
  songAuthor.textContent = songs[index].author;
}

// Play song
function playSong() {
  isPlaying = true;
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

// Pause song
function pauseSong() {
  isPlaying = false;
  audio.pause();
  playPauseBtn.textContent = "▶️";
}

// Toggle play/pause
playPauseBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progressPercent;
});

// Seek when progress bar is moved
progressBar.addEventListener("input", () => {
  const newTime = (progressBar.value * audio.duration) / 100;
  audio.currentTime = newTime;
});

// Change volume
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

// Load the next song
nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

// Load the previous song
prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

// Load the initial song
loadSong(currentSongIndex);
