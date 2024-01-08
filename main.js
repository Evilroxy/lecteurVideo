const video = document.getElementById("video");
const back = document.getElementById("BACK");
const skip = document.getElementById("SKIP");
const reset = document.getElementById("RESET");
const progress = document.getElementById("progress");



video.addEventListener("loadedmetadata", () => {
  progress.max = video.duration;
});

video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});



back.addEventListener("click", () => {
  if (video.currentTime < 10) {
    video.currentTime = 0;
  } else {
    video.currentTime -= 10;
  }
});

skip.addEventListener("click", () => {
  video.currentTime += 10;
});

reset.addEventListener("click", () => {
  video.currentTime = 0;
});
