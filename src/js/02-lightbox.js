import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const galleryMarkup = galleryItems.map((item) =>
`<li>
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
</li>`).join('')
    
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)

const lightboxScroll = new SimpleLightbox('.gallery a', { 
    nav: true,
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 });