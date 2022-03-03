const audio = new Audio();
let isPlay = false;
const button = document.querySelector('button');
let menuItems = document.querySelectorAll('.nav-item');
let menu = document.querySelector('.nav-list');
const main = document.querySelector('.main');
const logo = document.querySelector('.logo');

function playAudio () {
    if(!isPlay) { 
        audio.src = "assets/audio/solovey.mp3"       
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }else{
        audio.pause();
        isPlay = false;
    }
}

function toggleBtn() {
    button.classList.toggle('pause');
  }

function changeClassPause() {
    button.classList.add('pause');
  }

function changeClassActive(event) {    
    logo.classList.add('active');
    menuItems.forEach((el) => {
        el.classList.remove('active');        
    })    
    event.target.classList.add('active');
  }
  

  function changeBgr(event) {              
    if(event.target.classList.contains('nav-item')) {        
        main.style.backgroundImage = `url('./assets/img/${event.target.dataset.bird}.jpg')`; 
        console.log(isPlay)        
        if(!isPlay) {              
            audio.src = `assets/audio/${event.target.dataset.bird}.mp3`       
            audio.currentTime = 0;
            audio.play();
            isPlay = true;
        }else{
            audio.pause();
            audio.src = `assets/audio/${event.target.dataset.bird}.mp3`       
            audio.currentTime = 0;
            audio.play();            
            isPlay = true;
        }                
    }   
  }
  //console.log(isPlay) 
  button.addEventListener('click', playAudio);
  button.addEventListener('click', toggleBtn);
  menu.addEventListener('click', changeBgr);
  menu.addEventListener('click', changeClassPause);
  menu.addEventListener('click', changeClassActive);

  



 



 