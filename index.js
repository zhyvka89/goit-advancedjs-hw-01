/* empty css                         *//* empty css                      */import{S as m,w as g}from"./assets/vendor-7M5SsTI7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],u=document.querySelector(".gallery"),f=o=>o.map(({preview:a,original:n,description:s})=>{const e=document.createElement("li");e.classList.add("gallery-item");const t=document.createElement("a");t.classList.add("gallery-link"),t.href=n;const i=document.createElement("img");return i.classList.add("gallery-image"),i.src=a,i.alt=s,t.append(i),e.append(t),e}),y=o=>{u.append(...o)},b=f(h);y(b);let _=new m(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});_.on("show.simplelightbox",{});const r={email:"",message:""},c=document.querySelector(".feedback-form"),p=document.querySelector(".feedback-form input"),l=document.querySelector(".feedback-form textarea");w();p.addEventListener("input",o=>d(o,"email"));l.addEventListener("input",o=>d(o,"message"));c.addEventListener("submit",o=>{o.preventDefault(),Object.values(r).some(n=>n==="")?x():(console.log(r),localStorage.removeItem("feedback-form-state"),c.reset(),r.email="",r.message="")});function x(){new g({title:"Empty Field",text:"Please Fill All Fields",status:"error"})}function w(){const o=localStorage.getItem("feedback-form-state");if(o){const a=JSON.parse(o);r.email=a.email,r.message=a.message,p.value=a.email,l.value=a.message}}function d(o,a){r[a]=o.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(r))}
//# sourceMappingURL=index.js.map
