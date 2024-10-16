const progress =document.querySelector("#progress");
const song =document.querySelector("#song");
const ctlicon =document.querySelector("#ctlicon");

song.onloademetadata = function(){
progress.max = song.duration;
progress.value = song.currentTime; 
}

function playpause(){
     if(ctlicon.classList.contains("fa-pause")){
        song.pause();
        ctlicon.classList.remove("fa-pause");
        ctlicon.classList.add("fa-play");
     }else{
        song.play();
        ctlicon.classList.add("fa-pause");
        ctlicon.classList.remove("fa-play");
     }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime; 
    },1000)
}

progress.onchange = function(){
song.play();
song.currentTime = progress.value;
ctlicon.classList.add("fa-pause");
ctlicon.classList.remove("fa-play");
}