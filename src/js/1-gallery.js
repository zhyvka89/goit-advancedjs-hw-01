import SimpleLightbox from 'simplelightbox';
import images from './images-array';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const createGalleryItems = img => {
  return img.map(({ preview, original, description }) => {
    const liElem = document.createElement('li');
    liElem.classList.add('gallery-item');

    const linkElem = document.createElement('a');
    linkElem.classList.add('gallery-link');
    linkElem.href = original;

    const imgElem = document.createElement('img');
    imgElem.classList.add('gallery-image');
    imgElem.src = preview;
    imgElem.alt = description;

    linkElem.append(imgElem);
    liElem.append(linkElem);

    return liElem;
  });
};

const appendGalleryItems = items => {
  galleryRef.append(...items);
};

const items = createGalleryItems(images);
appendGalleryItems(items);

let gallery = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', {});
