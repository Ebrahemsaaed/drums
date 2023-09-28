window.addEventListener("keydown",playsound)
function playsound(e){
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return console.log("there is not found"); //stop function
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
}


let keys=document.querySelectorAll(".key")
   function removetranstion(e){
    if(e.propertyName!=="transform")return;
    this.classList.remove('playing')
   }
   

   keys.forEach(key=>key.addEventListener('transitionend',removetranstion))

