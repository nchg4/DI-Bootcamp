let allBoldItems;

function getBoldItems() {
  const paragraph = document.querySelector('p');
  allBoldItems = paragraph.querySelectorAll('strong');
}

function highlight() {
  if (!allBoldItems) return;
  
  allBoldItems.forEach(item => {
    item.style.color = 'blue';
  });
}

function returnItemsToDefault() {
  if (!allBoldItems) return;
  
  allBoldItems.forEach(item => {
    item.style.color = 'black';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getBoldItems(); 
  
  const paragraph = document.querySelector('p');
  
  paragraph.addEventListener('mouseover', highlight);
  paragraph.addEventListener('mouseout', returnItemsToDefault);
});



