import SimpleLightbox from "simplelightbox";
import images from "./images-array";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const createGalleryItems = (img) => {
  return img.map(({ preview, original, description }) => {
    const liElem = document.createElement("li");
    liElem.classList.add("gallery-item");

    const linkElem = document.createElement("a");
    linkElem.classList.add("gallery-link");
    linkElem.href = original;

    const imgElem = document.createElement("img");
    imgElem.classList.add("gallery-image");
    imgElem.src = preview;
    imgElem.alt = description;

    linkElem.append(imgElem);
    liElem.append(linkElem);

    return liElem;
  });
};

const appendGalleryItems = (items) => {
  gallery.append(...items);
};

const items = createGalleryItems(images);
appendGalleryItems(items);

let glr = new SimpleLightbox('.gallery .gallery-link');
glr.on('show.simplelightbox', function () {
	// Do something…
});