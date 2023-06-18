import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveTime(eve) {
  localStorage.setItem('videoplayer-current-time', eve.seconds);
}
function loadingTime() {
  const getTime = localStorage.getItem(`videoplayer-current-time`);
  let time = parseInt(getTime);
  return time;
}
function setPlayerTime(time) {
  player
    .setCurrentTime(time)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;
        default:
          // some other error occurred
          break;
      }
    });
}

player.on('timeupdate', _.throttle(saveTime, 1000));
setPlayerTime(loadingTime());
