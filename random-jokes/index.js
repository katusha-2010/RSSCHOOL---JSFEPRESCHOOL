const url = 'https://api.icndb.com/jokes/random';
const button = document.querySelector('.btn');
const content = document.querySelector('.content');
const chuck_norris = document.querySelector('.chuck_norris');
const en = document.querySelector('.en');
const ru = document.querySelector('.ru');
const header = document.querySelector('.header');
const langBtns = document.querySelectorAll('.lang-btn');
let i = 0;
let lang = 'en';

  async function getData() {lang = 'en'
    const res = await fetch(url);
    const data = await res.json();     

   function showData(data) { 
       content.textContent = ' ';   
       content.textContent = data.value.joke;     
   }
   showData(data)
   i = i + 1;     
  }

  getData()

  async function getQuotes() {lang = 'ru'
    const quotes = './data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    function showData(data) {
        content.textContent = ' ';   
        content.textContent = data[i].text;     
    }    
    showData(data);    
    i = i + 1;       
  }          

 function changeLanguage() {console.log(lang)
    if(lang === 'ru') {        
        getQuotes();
        lang = 'ru';
    } if(lang === 'en') {      
      getData();
      lang = 'en'
    } 
  }
  
  function сlassActive(event) {    
    langBtns.forEach((el) => {
    el.classList.remove('active');      
    })  
  event.target.classList.add('active');
}
  
 function toggleImg() {
    chuck_norris.classList.toggle('active');    
  }
 
  button.addEventListener('click', toggleImg)
  button.addEventListener('click', changeLanguage)
  header.addEventListener('click', сlassActive)
  ru.addEventListener('click', getQuotes)
  en.addEventListener('click', getData)
  
 

//   function setLocalStorage() {
//     localStorage.setItem('i', i);
//   }
//   window.addEventListener('beforeunload', setLocalStorage)

//   function getLocalStorage() {
//     if(localStorage.getItem('i')) {
//       const i = localStorage.getItem('i') + 1;
//       getData();
//     }
//   }  
 
//   window.addEventListener('load', getLocalStorage())
  
  

