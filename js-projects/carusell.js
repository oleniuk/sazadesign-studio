const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const fullPhoto = document.getElementById('full-photo');
const prevPhoto = document.getElementById('prev-photo');
const nextPhoto = document.getElementById('next-photo');
const closeBtn = document.querySelector('.close-btn');


let currentPhoto;

// При натисканні на фото відкривається оверлей з фото на все розширення
gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    currentPhoto = e.target;
    fullPhoto.src = currentPhoto.src;
    overlay.style.display = 'block';
    e.preventDefault();
  }
});

// Переключення наступного фото при натисканні на стрілку вправо
nextPhoto.addEventListener('click', e => {
  const nextSibling = currentPhoto.nextElementSibling;
  if (nextSibling !== null) {
    currentPhoto = nextSibling;
    fullPhoto.src = currentPhoto.src;
  }
  e.preventDefault();
});

// Переключення попереднього фото при натисканні на стрілку вліво
prevPhoto.addEventListener('click', e => {
  const prevSibling = currentPhoto.previousElementSibling;
  if (prevSibling !== null) {
    currentPhoto = prevSibling;
    fullPhoto.src = currentPhoto.src;
  }
  e.preventDefault();
});

// Закриття модального вікна
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});

// Переключення фото клавішами клавіатури
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 37) { // Left arrow key
      prevPhoto.click();
    } else if (e.keyCode === 39) { // Right arrow key
      nextPhoto.click();
    }
  });