function playSound(id, audioFile) {
  var audioElement = document.createElement("audio");
  var media = "fiches/" + id + "/medias/" + audioFile + ".mp3";
  audioElement.setAttribute("src", media);
  audioElement.play();
}
