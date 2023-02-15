import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const galleryMarkup = galleryItems.map((item) =>
`<div class="gallery__item">
  <a class="gallery__link" href=${item.original} >
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original} 
      alt=${item.description}
      width="340"
    />
  </a>
</div>`).join('')

    
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)

galleryEl.addEventListener('click', onImageClick)

function onImageClick(event) {
    event.preventDefault();
        
    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    const imageEl = event.target.dataset.source;  
    
    const instance = basicLightbox.create(`
    <img src=${imageEl} width="1280" >
`)   
    
  instance.show()

}

