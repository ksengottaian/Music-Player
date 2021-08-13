let songs_list = [
  { path: "/Songs/song1.mp3" },
  { path: "/Songs/song2.mp3" },
  { path: "/Songs/song3.mp3" },
  { path: "/Songs/song4.mp3" },
  { path: "/Songs/song5.mp3" },
];

let playPause_btn = document.querySelector(".playpause");
let rewind_btn = document.querySelector(".rewind");
let forward_btn = document.querySelector(".forward");

// Initializing global Variables
let is_Playing = false;
let songs_index = 0;

// Creating an audio element
let curr_song = document.createElement("audio");

//Functions to play, pause,rewind and forward
function playPause_audio() {
  if (!is_Playing) {
    play_audio();
  } else {
    pause_audio();
  }
}
function play_audio() {
  curr_song.play();
  is_Playing = true;
  playPause_btn.innerHTML = '<i class="far fa-pause-circle fa-6x"></i>';
}
function pause_audio() {
  curr_song.pause();
  is_Playing = false;
  playPause_btn.innerHTML = '<i class="fas fa-play-circle fa-6x"></i>';
}
function load_song(songs_index) {
  curr_song.src = songs_list[songs_index].path;
  curr_song.load();
}
function rewind_audio() {
  if (songs_index < songs_list.length - 1) songs_index += 1;
  else songs_index = 0;
  // Load and play the new track
  load_song(songs_index);
  play_audio();
}
function forward_audio() {
  if (songs_index > 0) songs_index -= 1;
  else songs_index = songs_list.length - 1;
  // Load and play the new track
  load_song(songs_index);
  play_audio();
}
