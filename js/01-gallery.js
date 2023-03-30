import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery')

const imageMarkup = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')

galleryEl.insertAdjacentHTML('beforeend', imageMarkup)



galleryEl.addEventListener('click', onOpenModalImg)

function onOpenModalImg(e) {
  if (e.target.classList.value !== 'gallery__image') {
    return;
  }

  e.preventDefault()
  
  const instance = basicLightbox.create(`
  <img class='img-on-modal' src="${e.target.dataset.source}">
  `)

  instance.show()

  document.addEventListener('keydown', onCloseModal)

  function onCloseModal(e) {
    if (e.code !== 'Escape') {
      return;
    }
      instance.close()
    document.removeEventListener('keydown', onCloseModal)
  }
}