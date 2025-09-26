import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-more-btn');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlay: true,
  overlayOpacity: 0.8,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
    <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
        <ul class="stats">
          <li>
            <span class="label">Likes</span>
            <span class="value">${img.likes}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="value">${img.views}</span>
          </li>
          <li>
            <span class="label">Comments</span>
            <span class="value">${img.comments}</span>
          </li>
          <li>
            <span class="label">Downloads</span>
            <span class="value">${img.downloads}</span>
          </li>
        </ul>
      </a>
    </li>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadBtn.classList.add('is-visible');
}

export function hideLoadMoreButton() {
  loadBtn.classList.remove('is-visible');
}
