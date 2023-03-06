// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");



console.log(gallery);

const galleryItemEl = galleryItems
  .map(
    (galleryItem) =>
      `<a class = "gallery__item" target="_blank"  rel="noopener" href = ${galleryItem.original}>
    <img  class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"  />
    </a> `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItemEl);

console.log(galleryItemEl);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    download: false,
  });

