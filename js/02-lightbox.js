import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const imageElements = galleryItems.map( item => {
    const galleryItem = document.createElement('a')
    galleryItem.classList.add('gallery__item')
    galleryItem.href = (item.original)

    const galleryImage = document.createElement('img')
    galleryImage.classList.add('gallery__image')
    galleryImage.src = item.preview
    galleryImage.dataset.source = item.original
    galleryImage.alt = item.description

    galleryItem.append(galleryImage)

    return galleryItem
})

gallery.append(...imageElements)

new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});


