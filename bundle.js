(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function p(){return`
  <header>
        <div class="logo-section">
          <div class="header-book icon-container">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7V21" stroke="#F8F6F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 18C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H3Z" stroke="#F8F6F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div class="header-text-section">
            <h4 class="header-title">The Library</h4>
            <p class="header-description">Discover your next favorite book</p>
          </div>
        </div>
      </header>
`}function f(){return` 
  <section class="search-container">
  <h1>Discover Your Next Great Read</h1>
  <p>Search millions of books, build your personal library, and never lose track of what to read next.</p>
  <div class="search-input-container">
    <div class="input-container">
    <img src="/src/assets/search.svg" alt="search-icon">
    <input placeholder="Search for books by title or author..." class="search-input" type="text">
    </div>
   <button o class="search-btn">Search</button>
  </div>
          </section>
          
          `}let c={books:JSON.parse(localStorage.getItem("books"))||[]},n=JSON.parse(localStorage.getItem("favorities"))||[];function u(){return n.length>0?`
  <section class="favorities-section">
  <div class="section-info">
    <div  class="icon-container fav-heart ">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="transparent" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z" stroke="green" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div>
      <div class="titles-container">
        <h4 class="title-fav">Favorites</h4>
        <p class="books-saved">${n.length} books saved</p>
      </div>
  </div>
  <div class="books-container">
    ${n.map(e=>`<div class="book-container">
      <img class='book-img' src=${e.cover} alt="">
      <div class="description-container">
        <h5 class="title">${e.title}</h5>
        <p class="author">${e.author}</p>
        <p class="year">${e.year}</p>
      </div>
       <div data-key=${e.key} class="heart-icon-container js-add-to-fav ">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#ef4444" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z" stroke="none" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div>
    </div>`).join("")}
    
  </div>
</section> `:""}const g="/assets/no-book.jpg";function y(e){const r=e.cover_i?`https://covers.openlibrary.org/b/id/${e.cover_i}.jpg`:g,s=n.find(a=>a.key===e.key);return`
    <div class="card-container">
    <div class="image-container">
     <div data-year=${e.first_publish_year} data-author="${e.author_name}" data-cover="${r}" data-title="${e.title}" data-key="${e.key}" class="js-add-to-fav add-to-fav ">
  <svg width="12" height="12" viewBox="0 0 16 16" fill="${s?"#ef4444":"none"}" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z" stroke="${s?"#ef4444":"gray"}" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div>
      <img class='book-cover' src=${r} alt="book-cover">
    </div>
    <div class="info">
    <p class="title">${e.title}</p>
    <p class="author">${e.author_name?e.author_name[0]:"Unknown"}</p>
    <p class="year">${e.first_publish_year?e.first_publish_year:"Unknown"}</p>
    </div>
  </div>
  `}function l(){return`<section class="book-grid">
  ${c.books.map(e=>y(e)).join("")}
</section>`}function m(){return`
  <main>
    ${f()}
    <div class="book-layout">
      <div class="book-grid-container">
      ${l()}
      </div>
      ${n.length>0?u():""}
    </div>
  </main>
  `}function k(){return`
  <footer>
      <p class="footer-text">Prodivev by <span>Open Library</span></p>
     </footer>
  
  `}async function C(){try{const e=document.querySelector(".search-input").value;if(e){const s=await(await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(e)}`)).json();return document.querySelector(".search-input").value="",s.docs}}catch{console.log("error")}}function w(){return"<p class='Loading'>Loading...</p>"}function b(){return"<p class='not-found'>No Books found</p>"}document.getElementById("app").innerHTML=`

 ${p()}
 ${m()}
  ${k()}
`;async function h(){document.querySelector(".book-grid-container").innerHTML=w();const e=await C();e||(document.querySelector(".book-grid-container").innerHTML=b()),e&&(c.books=e,document.querySelector(".book-grid-container").innerHTML=l()),localStorage.setItem("books",JSON.stringify(c.books))}document.querySelector(".search-btn").addEventListener("click",h);document.querySelector(".search-input").addEventListener("keydown",e=>{e.key==="Enter"&&h()});document.querySelector("main").addEventListener("click",e=>{const r=e.target.closest(".js-add-to-fav");r&&$(r)});function $(e){const{author:r,cover:s,title:a,key:t,year:o}=e.dataset,i=n.find(d=>d.key===t);if(i){const d=n.findIndex(v=>v.key===i.key);n.splice(d,1),i.isFavorited=!1}else n.unshift({key:t,year:o,author:r,cover:s,title:a,isFavorited:!0});localStorage.setItem("favorities",JSON.stringify(n)),document.querySelector(".book-layout").innerHTML=`
    <div class="book-grid-container">
      ${c.books.length>0?l():""}
    </div>
    ${n.length>0?u():""}
  `}
