'use strict';

const sliderListElement = document.querySelector('.slider__list');
const slidesCountElement = document.querySelector('.slider__slides-count');
const sliderPrevButtonElement = document.querySelector('.slider__arrow--prev');
const sliderNextButtonElement = document.querySelector('.slider__arrow--next');
const slidesElements = Array.from(document.querySelectorAll('.slider__item'));
const copyButton = document.querySelector('.slider__copy');

const slidesCount = slidesElements.length;
let currentSlideNumber = 1;
const currentSlideNumberElement = document.querySelector('.slider__current-slide-number');

slidesCountElement.textContent = slidesCount;

const changeActiveSlide = () => {
	slidesElements.forEach((slideElement, index) => {
		const slideNumber = index + 1;
		
		slideElement.classList.toggle('slider__item--active', slideNumber === currentSlideNumber);
	});
};

copyButton.addEventListener('click', () => {
	const currentSlideElement = document.querySelector('.slider__item--active');	
	navigator.clipboard.writeText(currentSlideElement.textContent.trim());
});

sliderPrevButtonElement.addEventListener('click', (evt) => {
	currentSlideNumber = Math.max(currentSlideNumber - 1, 1);
	currentSlideNumberElement.textContent = currentSlideNumber;
	changeActiveSlide();
	
	if (currentSlideNumber === 1) {
		sliderPrevButtonElement.disabled = true;
	} else {
		sliderPrevButtonElement.disabled = false;
	}
	
	if (currentSlideNumber === slidesCount) {
		sliderNextButtonElement.disabled = true;
	} else {
		sliderNextButtonElement.disabled = false;
	}
});

sliderNextButtonElement.addEventListener('click', (evt) => {
	currentSlideNumber = Math.min(currentSlideNumber + 1, slidesCount);
	currentSlideNumberElement.textContent = currentSlideNumber;
	changeActiveSlide();
	
	if (currentSlideNumber === 1) {
		sliderPrevButtonElement.disabled = true;
	} else {
		sliderPrevButtonElement.disabled = false;
	}
	
	if (currentSlideNumber === slidesCount) {
		sliderNextButtonElement.disabled = true;
	} else {
		sliderNextButtonElement.disabled = false;
	}
});