import{a as w,S as C,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const S="https://pixabay.com/api/",q="52403123-1f76d15efcce2ed4cd464589c",p=15;async function m(r,o=1){return(await w.get(S,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:p}})).data}const g=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=document.querySelector(".load-more-btn");let B=new C(".gallery a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8});function y(r){const o=r.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        <ul class="stats">
          <li>
            <span class="label">Likes</span>
            <span class="value">${e.likes}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="value">${e.views}</span>
          </li>
          <li>
            <span class="label">Comments</span>
            <span class="value">${e.comments}</span>
          </li>
          <li>
            <span class="label">Downloads</span>
            <span class="value">${e.downloads}</span>
          </li>
        </ul>
      </a>
    </li>
  `).join("");g.insertAdjacentHTML("beforeend",o),B.refresh()}function x(){g.innerHTML=""}function b(r="top"){l.classList.add("is-visible"),l.dataset.position=r}function L(){l.classList.remove("is-visible"),l.removeAttribute("data-position")}function E(){h.classList.add("is-visible")}function v(){h.classList.remove("is-visible")}const R=document.querySelector(".form"),u=document.querySelector(".load-more-btn");let f="",i=1,d=0;R.addEventListener("submit",M);u.addEventListener("click",O);async function M(r){r.preventDefault(),v();const o=r.target.elements["search-text"],e=o.value.trim();if(e){f=e,i=1,x(),b("top");try{const a=await m(f,i);if(d=a.totalHits,!a.hits.length){n.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432});return}y(a.hits),i*p<d&&E()}catch{n.error({position:"topRight",message:"Something went wrong",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432})}finally{L(),o.value=""}}}async function O(){i+=1,u.disabled=!0,b("bottom");try{const r=await m(f,i);y(r.hits);const o=document.querySelector(".gallery");if(o&&o.firstElementChild){const{height:e}=o.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}i*p>=d&&(v(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageColor:"#fff",timeout:4e3,maxWidth:432}))}catch{n.error({position:"topRight",message:"Something went wrong",backgroundColor:"#ef4040",messageColor:"#fff",timeout:5e3,maxWidth:432})}finally{L(),u.disabled=!1}}
//# sourceMappingURL=index.js.map
