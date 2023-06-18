// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createGallery(listImage) {
  const gallery = listImage
    .map(
      image =>
        `<li><div><a class="gallery__item" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}" /></a></div></li>`
    )
    .join('');

  return gallery;
}

function addElement(callback, listElement, querySelector) {
  querySelector.insertAdjacentHTML('beforeend', callback(listElement));
}
addElement(createGallery, galleryItems, gallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
