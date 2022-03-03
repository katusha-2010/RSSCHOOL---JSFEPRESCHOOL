const field = document.querySelector('.field');
const boxes = document.querySelectorAll('.box');
const button = document.querySelector('.btn');
const winner = document.querySelector('.winner');
const stepsCount = document.querySelector('.steps-count');
let table = document.querySelector('.table');
const rows = document.querySelectorAll('tr');
const cellsWinner = document.querySelectorAll('.cell-winner');
const cellsSteps = document.querySelectorAll('.cell-steps');
const image = document.querySelector('.img');
const audio = new Audio();
let player = "X";
let step = 0;
let result = '';
let arr = [];
let block = 1;
let winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function playAudio () {    
    audio.src = './assets/fanfary.mp3';
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio () {
    audio.pause()
}

function putXY(event) {
    if(block === 1) {
    if(event.target.classList.contains('box')) {
        step % 2 === 0? event.target.textContent = 'X' : event.target.textContent = 'О';
        step += 1;
        findWinner();               
    }
}
}

function findWinner () {
    if(step > 8) {
        winner.textContent = 'Ничья'
    }
    for(i = 0; i < winCombination.length; i++) {
        if (boxes[winCombination[i][0]].textContent === 'X' && boxes[winCombination[i][1]].textContent === 'X' && boxes[winCombination[i][2]].textContent === 'X') {
            result = 'Крестики';           
        } else if (boxes[winCombination[i][0]].textContent === 'О' && boxes[winCombination[i][1]].textContent === 'О' && boxes[winCombination[i][2]].textContent === 'О') {
            result = 'Нолики';           
        }
    }
    if(result != '') {
    winner.textContent = `Победитель: ${result}`
    stepsCount.textContent = `Количество ходов: ${step}`;
    image.classList.add('active');
    block = 0;
    playAudio()

    arr = JSON.parse(localStorage.getItem('arr'));
    let arr2 = arr;
    arr.push([result, step])
    arr.length < 11 ? arr2 : arr2.shift()
    arr.length < 11 ? localStorage.setItem(`arr`, JSON.stringify(arr2)) : localStorage.setItem(`arr`, JSON.stringify(arr2.shift()))     
    
     let arr3 = JSON.parse(localStorage.getItem(`arr`))
     let j = arr3.length - 1;     
     if(arr.length < 10) {
        cellsWinner[j].textContent = arr3[j][0] 
        cellsSteps[j].textContent = arr3[j][1]
     } else {
         for(k = 0; k < 10; k++) {
        cellsWinner[k].textContent = arr3[k][0];        
        cellsSteps[k].textContent = arr3[k][1]                
         }
        }       
    }            
}

function beginStart() {
    image.classList.remove('active');
    pauseAudio()
    boxes.forEach(el => el.textContent = '');
    result = '';
    step = 0;
    winner.textContent ='';
    stepsCount.textContent =''
    block = 1;
}

function setLocalStorage() {     
    localStorage.setItem('arr', JSON.stringify(arr));
  }

function getLocalStorage() {      
    let arr = JSON.parse(localStorage.getItem('arr'));                 
    for(k = 0; k < 10; k++) {
        cellsWinner[k].textContent = arr[k][0];        
        cellsSteps[k].textContent = arr[k][1]        
         } 
      
}

field.addEventListener('click', putXY)
button.addEventListener('click', beginStart)
window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
window.addEventListener('close', setLocalStorage)

// function getLocalStorage1() {
//     console.log(arr.length)
//     if(arr.length === 0) {
//         putXY () 
//     } else {
//         getLocalStorage() 
//     }
// }

// localStorage.clear()