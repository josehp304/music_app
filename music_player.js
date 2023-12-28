const song = document.querySelector(".song");
const timeline = document.querySelector(".timeline");
const logo = document.querySelector(".logo");
const control = document.querySelector(".playpause #pause");
const controlstyle = window.getComputedStyle(control);
const control2 = document.querySelector(".playpause #play");
const volume = document.querySelector(".volume");
song.addEventListener("loadedmetadata", () => {
  timeline.max = song.duration;
  timeline.value = song.currentTime;
  volume.max = 1;
  song.volume = 0.5;
  console.log("hi");
});

function playPause() {
  if (controlstyle.display !== "none") {
    song.pause();
    control.style.display = "none";
    control2.style.display = "inline-block";
  } else {
    song.play();
    control.style.display = "inline-block";
    control2.style.display = "none";
  }
}
if (song.play()) {
  setInterval(() => {
    timeline.value = song.currentTime;
  }, 500);
}

timeline.onchange = function () {
  song.currentTime = timeline.value;
};

// volume.onchange = function () {
//   song.volume = volume.value;
// };
setInterval(() => {
  song.volume = volume.value;
}, 500);
