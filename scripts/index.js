const template = document.querySelector('#scan');
const sectionTemplate = document.querySelector('.documents');
const popupImg  = document.querySelector('.popup__img');
// find elements
const popupBg = document.querySelector('.popup__bg');
const popup = popupBg.querySelector('.popup');
const secondPopup = document.querySelector('.popup__bg_doc');
const popupImgBtn = document.querySelector('.photo__img')
const closeBtn = popup.querySelector('.popup__close');
const popupImage = popup.querySelector('.popup__photo');

const closeScansBtn = document.querySelector('.popup__close_type_scan')


const createElement = (item) => {
const scan = template.content.querySelector('.scan').cloneNode(true);
const scanImage = scan.querySelector('.scan__image');
scanImage.src = item.link;
scanImage.alt = item.name;


// Нажатие на список документов. Открытие попапа. Написать попап для картинок. Его сейчас нет.
const scanElement = scan.querySelector('.scan__image');
  scanElement.addEventListener('click', () => {
   popupImg.src = scanImage.src;
   popupImg.alt = scanImage.alt;
   openPopup(secondPopup);
  })

  
return scan;
};

closeScansBtn.addEventListener('click', () => {
  closePopup(secondPopup);
});

const renderElement = (item) => {
  sectionTemplate.append(createElement(item));
};

documents.forEach(renderElement);








// Open and close popup ()
function openPopup(popup) {
popup.classList.add('popup__bg_active');
}

function closePopup(popup) {
  popup.classList.remove('popup__bg_active');
}

// eventlistener btn photo
popupImgBtn.addEventListener('click', () => {
popupImage.src = popupImgBtn.src;
popupImage.alt = popupImgBtn.alt;
  openPopup(popupBg);
})

closeBtn.addEventListener('click', () => {
  closePopup(popupBg);
})






