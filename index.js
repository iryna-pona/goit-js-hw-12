import{a as b,S as L,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",w="52403123-1f76d15efcce2ed4cd464589c",S=15;async function u(s,o=1){return(await b.get(v,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:S}})).data}const d=document.querySelector(".gallery");document.querySelector(".loader-top .loader");document.querySelector(".loader-bottom");const f=document.querySelector(".load-more-btn");let C=new L(".gallery a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8});function m(s){const o=s.map(t=>`
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
  `).join("");d.insertAdjacentHTML("beforeend",o),C.refresh()}function q(){d.innerHTML=""}function p(){loader.classList.add("is-visible")}function g(){loader.classList.remove("is-visible")}function B(){f.classList.add("is-visible")}function h(){f.classList.remove("is-visible")}const x=document.querySelector(".form"),R=document.querySelector(".load-more-btn");let c="",l=1,y=0;x.addEventListener("submit",M);R.addEventListener("click",O);async function M(s){s.preventDefault(),h();const o=s.target.elements["search-text"],t=o.value.trim();if(t){c=t,l=1,q(),p();try{const a=await u(c,l);if(y=a.totalHits,!a.hits.length){n.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432});return}m(a.hits),a.totalHits>a.hits.length&&B()}catch{n.error({position:"topRight",message:"Something went wrong",color:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",timeout:5e3,progressBarColor:"#fff",maxWidth:432})}finally{g(),o.value=""}}}async function O(){l+=1,p();try{const s=await u(c,l);m(s.hits);const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),document.querySelectorAll(".gallery-item").length>=y&&(h(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageColor:"#fff",timeout:4e3,maxWidth:432}))}catch{n.error({position:"topRight",message:"Something went wrong",backgroundColor:"#ef4040",messageColor:"#fff",timeout:5e3,maxWidth:432})}finally{g()}}
//# sourceMappingURL=index.js.map
