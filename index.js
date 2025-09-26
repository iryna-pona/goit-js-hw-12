import{a as f,S as d,i}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="https://pixabay.com/api/",m="52403123-1f76d15efcce2ed4cd464589c";async function y(r){return(await f.get(p,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");let g=new d(".gallery a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8});function h(r){const o=r.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        <ul class="stats">
          <li>
            <span class="label">Likes</span>
            <span class="value">${t.likes}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="value">${t.views}</span>
          </li>
          <li>
            <span class="label">Comments</span>
            <span class="value">${t.comments}</span>
          </li>
          <li>
            <span class="label">Downloads</span>
            <span class="value">${t.downloads}</span>
          </li>
        </ul>
      </a>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){l.innerHTML=""}function b(){c.classList.add("is-visible")}function v(){c.classList.remove("is-visible")}function w(){u.classList.add("is-visible")}function S(){u.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",x);async function x(r){r.preventDefault(),S();const o=r.target.elements["search-text"],t=o.value.trim();if(t){L(),b();try{const a=await y(t);if(!a.hits.length){i.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432});return}h(a.hits)}catch{i.error({position:"topRight",message:"Something went wrong",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432})}finally{v(),o.value="",w()}}}
//# sourceMappingURL=index.js.map
