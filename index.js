import{a as L,S as v,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/",S="52403123-1f76d15efcce2ed4cd464589c",C=15;async function d(r,t=1){return(await L.get(w,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:C}})).data}const m=document.querySelector(".gallery"),i=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");let q=new v(".gallery a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8});function g(r){const t=r.map(o=>`
    <li class="gallery-item">
      <a href="${o.largeImageURL}">
        <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
        <ul class="stats">
          <li>
            <span class="label">Likes</span>
            <span class="value">${o.likes}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="value">${o.views}</span>
          </li>
          <li>
            <span class="label">Comments</span>
            <span class="value">${o.comments}</span>
          </li>
          <li>
            <span class="label">Downloads</span>
            <span class="value">${o.downloads}</span>
          </li>
        </ul>
      </a>
    </li>
  `).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){m.innerHTML=""}function h(r="top"){i.classList.add("is-visible"),i.dataset.position=r}function y(){i.classList.remove("is-visible"),i.removeAttribute("data-position")}function x(){p.classList.add("is-visible")}function b(){p.classList.remove("is-visible")}const E=document.querySelector(".form"),R=document.querySelector(".load-more-btn");let u="",l=1,f=0;E.addEventListener("submit",M);R.addEventListener("click",O);async function M(r){r.preventDefault(),b();const t=r.target.elements["search-text"],o=t.value.trim();if(o){u=o,l=1,B(),h("top");try{const a=await d(u,l);if(f=a.totalHits,!a.hits.length){n.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432});return}g(a.hits),f>a.hits.length&&x()}catch{n.error({position:"topRight",message:"Something went wrong",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432})}finally{y(),t.value=""}}}async function O(){l+=1,h("bottom");try{const r=await d(u,l);g(r.hits);const t=document.querySelector(".gallery");if(t&&t.firstElementChild){const{height:a}=t.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}document.querySelectorAll(".gallery-item").length>=f&&(b(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageColor:"#fff",timeout:4e3,maxWidth:432}))}catch{n.error({position:"topRight",message:"Something went wrong",backgroundColor:"#ef4040",messageColor:"#fff",timeout:5e3,maxWidth:432})}finally{y()}}
//# sourceMappingURL=index.js.map
