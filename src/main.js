import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const input = event.target.elements['search-text'];
  const query = input.value.trim();

  if (!query) {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        iziToast.info({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: '#fff',
          messageColor: '#fff',
          backgroundColor: '#ef4040',
          timeout: 5000,
          progressBarColor: '#fff',
          maxWidth: 432,
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        position: 'topRight',
        message: 'Something went wrong',
        color: '#fff',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        timeout: 5000,
        progressBarColor: '#fff',
        maxWidth: 432,
      });
    })
    .finally(() => {
      hideLoader();
      input.value = '';
    });
}
