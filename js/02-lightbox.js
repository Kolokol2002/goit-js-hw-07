import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')

const imageMarkup = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}" title="${description}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')

galleryEl.insertAdjacentHTML('beforeend', imageMarkup)


const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'self',
    captionDelay: 250,
});

galleryEl.addEventListener('click', onOpenModalImg)

console.log(lightbox);
function onOpenModalImg(e) {
    if (e.target.classList.value !== 'gallery__image') {
        return;
    }
    e.preventDefault()
}
