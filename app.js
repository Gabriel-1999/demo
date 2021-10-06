let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;
let i = 1;
let im = document.getElementById('imagem');

let imagens = {
  1:"img1.jpeg",
  2: "img2.jpeg",
  3: "img3.jpeg",
  4:"img4.jpeg",
}

function callChange() {
  setInterval(() => {
    im.src = imagens[i];
    if(i === 4){
      i = 1;
    }else{
      i++;
    }
  
  }, 2000);
  
}
callChange();


document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
  callChange();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
  callChange();
}
