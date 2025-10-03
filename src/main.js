import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  hideLoadMoreButton();

  const input = event.target.elements['search-text'];
  const query = input.value.trim();

  if (!query) {
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  showLoader('top');

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

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

    if (totalHits > data.hits.length) {
      showLoadMoreButton();
    }
  } catch (error) {
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
  } finally {
    hideLoader();
    input.value = '';
  }
}

async function onLoadMore() {
  currentPage += 1;
  showLoader('bottom');

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);

    const galleryEl = document.querySelector('.gallery');
    if (galleryEl && galleryEl.firstElementChild) {
      const { height: cardHeight } =
        galleryEl.firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    const loadedImages = document.querySelectorAll('.gallery-item').length;
    if (loadedImages >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        timeout: 4000,
        maxWidth: 432,
      });
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Something went wrong',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      timeout: 5000,
      maxWidth: 432,
    });
  } finally {
    hideLoader();
  }
}
