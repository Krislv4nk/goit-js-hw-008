// 02-video.js
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

window.addEventListener('DOMContentLoaded', (event) => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});

