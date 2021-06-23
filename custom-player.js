// const media = document.querySelector('video');
const media = document.querySelector('audio');
// const controls = document.querySelector('.controls');

const mediaSource = document.getElementsByTagName('source')[0];

const play = document.querySelector('.play');
// const stop = document.querySelector('.stop');
// const rwd = document.querySelector('.rwd');
// const fwd = document.querySelector('.fwd');

// const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

media.removeAttribute('controls');
// controls.style.visibility = 'visible';


play.addEventListener('click', playPauseMedia);
// stop.addEventListener('click', stopMedia);
// media.addEventListener('ended', stopMedia);


function playPauseMedia(track) {
  if(media.paused) {
    play.setAttribute('data-icon','u');
    // console.dir(mediaSource);
    mediaSource.src = track;
    media.load();
    media.play();
  } else {
    play.setAttribute('data-icon','P');
    media.pause();
  }
}

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute('data-icon','P');
}


