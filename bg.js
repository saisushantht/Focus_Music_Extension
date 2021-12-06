chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if(msg.name == "playTrack"){

    var trackName = msg.track;
    var audioEle = document.querySelector('.audio-element');
    audioEle.src = trackName+'_hr.mp3';
    audioEle.play();
  }

  if(msg.name == "pauseTrack"){

    var audioEle = document.querySelector('.audio-element');
    audioEle.pause();
  }

});
