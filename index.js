import{a as f,S as u,i as n}from"./assets/vendor-D8hBcPQM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="52403123-1f76d15efcce2ed4cd464589c";function d(o){return f.get("https://pixabay.com/api/",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const i=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new u(".gallery a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8});function g(o){const r=o.map(t=>`
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
  `).join("");i.insertAdjacentHTML("beforeend",r),m.refresh()}function y(){i.innerHTML=""}function h(){c.classList.add("is-visible")}function b(){c.classList.remove("is-visible")}const L=document.querySelector(".form");L.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.target.elements["search-text"],t=r.value.trim();t&&(y(),h(),d(t).then(a=>{if(!a.hits.length){n.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432});return}g(a.hits)}).catch(()=>{n.error({position:"topRight",message:"Something went wrong",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432})}).finally(()=>{b(),r.value=""}))}
//# sourceMappingURL=index.js.map
