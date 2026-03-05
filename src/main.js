import { Header } from "./components/layout/Header";
import { HomePage } from "./components/page/HomePage";
import { Footer } from "./components/layout/Footer";
import { bookList, favorities, websiteState } from "./variables";
import { searchBooks } from "./utils/api";
import {Favorities} from './components/features/Favorites'
import { BookGrid } from "./components/features/BookGrid";
import { Loading } from "./components/features/Loading";
import {NotFound} from './components/features/NotFound'
 
document.getElementById("app").innerHTML = `

 ${Header()}
 ${HomePage()}
  ${Footer()}
`;

async function handleSearch() {
  
  websiteState.hasSearched = true;
  websiteState.isLoading = true;

  document.querySelector(".book-grid-container").innerHTML = Loading()

  const results = await searchBooks();

  if(!results){
    document.querySelector(".book-grid-container").innerHTML = NotFound();
  }

  if (results) {
    websiteState.isLoading = false;
    bookList.books = results;
    document.querySelector(".book-grid-container").innerHTML = BookGrid();
  }

  localStorage.setItem("books", JSON.stringify(bookList.books));
}

// SEARCH

document.querySelector(".search-btn").addEventListener("click", handleSearch);
document.querySelector(".search-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

// ADD TO FAV EVENT

document.querySelector("main").addEventListener("click", (event) => {
  const favBtn = event.target.closest(".js-add-to-fav");
  if (!favBtn) return;
  addFav(favBtn);
});

// ADD FAV
function addFav(btn) {
  const { author, cover, title, key, year } = btn.dataset;
  const matchingItem = favorities.find((book) => book.key === key);

  if (matchingItem) {
    const matchingItemIndex = favorities.findIndex(
      (favBook) => favBook.key === matchingItem.key
    );

    favorities.splice(matchingItemIndex, 1);

    matchingItem.isFavorited = false;
  } else {
    favorities.unshift({
      key,
      year,
      author,
      cover,
      title,
      isFavorited: true,
    });
  }

   
localStorage.setItem("favorities", JSON.stringify(favorities));

  document.querySelector(".book-layout").innerHTML = `
    <div class="book-grid-container">
      ${bookList.books.length > 0 ? BookGrid() : ''}
    </div>
    ${favorities.length > 0 ? Favorities() : ''}
  `;
}
