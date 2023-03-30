import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')

const imageMarkup = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${preview}" title="${description}">
    <img
      loading='lazy'
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
console.log(lightbox)

galleryEl.addEventListener('click', onOpenModalImg)
function onOpenModalImg(e) {
    if (e.target.classList[0] !== 'gallery__image') {
      return;
    }
    e.preventDefault()
}


const allImage = document.querySelectorAll('.gallery__image')

allImage.forEach(item => item.addEventListener('load', onLoadedImg))

function onLoadedImg(e) {
  e.target.classList.add('gallery__image--loaded')
}