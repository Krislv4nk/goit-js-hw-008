
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const createImagesListMarkup = (images) => images.map(({ original, preview, description }) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
`).join("");

const listImages = document.querySelector(".gallery");

console.log(listImages);
const imagesMarkup = galleryItems ? createImagesListMarkup(galleryItems) : '';
listImages.insertAdjacentHTML('beforeend', imagesMarkup)

const slider = new SimpleLightbox('.gallery a' , {
    captionsData: 'alt',
    captionDelay: 250,
});
