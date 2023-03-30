import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery')

const imageMarkup = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
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



galleryEl.addEventListener('click', onOpenModalImg)

function onOpenModalImg(e) {
  if (e.target.classList[0] !== 'gallery__image') {
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

const allImage = document.querySelectorAll('.gallery__image')

allImage.forEach(item => item.addEventListener('load', onLoadedImg))

function onLoadedImg(e) {
  e.target.classList.add('gallery__image--loaded')
}