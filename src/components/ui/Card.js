import noBook from '../../assets/no-book.jpg';
import { favorities } from '../../variables';




export function Card(book) {

  const coverURL =  book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg` : noBook ;

  const matchingBook = favorities.find(favBook => favBook.key === book.key)


  return `
    <div class="card-container">
    <div class="image-container">
     <div data-year=${book.first_publish_year} data-author="${book.author_name}" data-cover="${coverURL}" data-title="${book.title}" data-key="${book.key}" class="js-add-to-fav add-to-fav ">
  <svg width="12" height="12" viewBox="0 0 16 16" fill="${matchingBook ? '#ef4444' : 'none'}" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z" stroke="${matchingBook ? '#ef4444' : 'gray'}" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div>
      <img class='book-cover' src=${coverURL} alt="book-cover">
    </div>
    <div class="info">
    <p class="title">${book.title}</p>
    <p class="author">${book.author_name ? book.author_name[0] : 'Unknown'}</p>
    <p class="year">${book.first_publish_year ? book.first_publish_year : 'Unknown'
    }</p>
    </div>
  </div>
  `;
}
