const template = document.querySelector('#scan');
const sectionTemplate = document.querySelector('.documents');



const createElement = (item) => {
const scan = template.content.querySelector('.scan').cloneNode(true);
const scanImage = scan.querySelector('.scan__image');
scanImage.src = item.link;
scanImage.alt = item.name;
return scan;
};

const renderElement = (item) => {
  sectionTemplate.append(createElement(item));
};

documents.forEach(renderElement);