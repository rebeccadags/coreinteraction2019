window.addEventListener('load', function(e) {
const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("click", function (){
    video.classList.toggle("playing");
    if(video.classList.contains("playing")){
      video.play()
    } else {
      video.pause()
    }
  })
})
});
