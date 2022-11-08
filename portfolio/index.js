const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Retouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'email': 'E-mail',
    'phone': 'Phone',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'email': 'Почта',
    'phone': 'Телефон',
    'send-message': 'Отправить'
  }
}

//---------------------------------------------------------------------------------------------
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);

function closeMenu() {
    burger.classList.remove('open');
    nav.classList.remove('open');
  }

  const portfolioImages = document.querySelectorAll('.photo'); 

  const portfolioBtns = document.querySelector('.portfolio-bths');  

  function changeImage(event) {
    if(event.target.classList.contains('portf-btn')) {      
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
      };      
    };
    portfolioBtns.addEventListener('click', changeImage); 
    
  //---------------------------------------------------------------------------------------------
  
  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  function preloadImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      seasons.forEach((img, index) => img.src = `./assets/img/${seasons}/${i}.jpg`);      
    }
  }
  preloadImages();
  //---------------------------------------------------------------------------------------------
  const buttonsAll = document.querySelectorAll('.portf-btn');  

  function changeClassActive(event) {
    buttonsAll.forEach((el) => {
      el.classList.remove('active');
    })
    event.target.classList.add('active');
  }

  portfolioBtns.addEventListener('click', changeClassActive);
  // //----------------------------------------------------------------translate page----------------------------------------
   
  const english = document.querySelector('.english');
  const russian = document.querySelector('.russian');
  const language = document.querySelector('.language');
  const matches = document.querySelectorAll("[data-i18]");
  const langBtns = document.querySelectorAll('.lang-btn');

  function getTranslate(langActive) {     
    let chosenLang = langActive === 'ru'? i18Obj.ru : i18Obj.en;   
    matches.forEach(el => el.textContent = chosenLang[el.dataset.i18])  
  }

  function сlassActive(event) {    
      langBtns.forEach((el) => {
      el.classList.remove('active');      
      })
    
    event.target.classList.add('active');
  }
  
  language.addEventListener('click', сlassActive);
  english.addEventListener('click', () => getTranslate('en'));
  russian.addEventListener('click', () => getTranslate('ru'));

  // //----------------------------------------------------------------Form----------------------------------------
  const form = document.forms[3];
  const {elements} = form;
  const [elementEmail, elementPhone] = form;

  function getValueFromForm(event) {
    // event.preventDefault();
    const values = {};

    for(let i = 0; i < elements.length; i++) {
      const formElement = elements[i];
      const {name} = formElement;
       if (name) {
        const {value} = formElement;
        values[name] = value;
       }    
    }

    console.log('values',values)    
  }

  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
  }


  form.addEventListener('submit', getValueFromForm);

  elementEmail.addEventListener('change', () => {

    if(!validateEmail(elementEmail.value)) {
        elementEmail.classList.add('error');
        const emailErrorMessage = document.querySelector('.email-error-message');        
        emailErrorMessage.textContent = 'invalid email'; 
    } else {  
        document.querySelector('.email-error-message').textContent = '';    
        elementEmail.classList.remove('error');
    }
})

elementPhone.addEventListener('change', () => {
    console.log(validatePhone(elementPhone.value))
    if(!validatePhone(elementPhone.value)) {
        elementPhone.classList.add('error');
        const phoneErrorMessage = document.querySelector('.phone-error-message');
        phoneErrorMessage.textContent = 'write only numbers';
        return false;
    } else {
        document.querySelector('.phone-error-message').textContent = '';
        elementPhone.classList.remove('error');
    }
})
