import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const imageElements = galleryItems.map( item => {
    
    const galleryItem = document.createElement('div')
    galleryItem.classList.add('gallery__item')
    
    const galleryLink = document.createElement('a')
    galleryLink.classList.add('gallery__link')
    galleryLink.href = (item.original)
    galleryLink.addEventListener('click', function(event){
        event.preventDefault()

        const instance = basicLightbox.create(`
            <img src=${item.original} width="800" height="600">
        `)

        instance.show()
    })
    
    const galleryImage = document.createElement('img')
    galleryImage.classList.add('gallery__image')
    galleryImage.src = item.preview
    galleryImage.dataset.source = item.original
    galleryImage.alt = item.description
    
    galleryLink.append(galleryImage)
    galleryItem.append(galleryLink) 

    return galleryItem
})

gallery.append(...imageElements)


