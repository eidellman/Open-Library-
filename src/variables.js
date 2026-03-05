export  let bookList =  {
  books: JSON.parse(localStorage.getItem('books')) || []
}

export  let favorities =  JSON.parse(localStorage.getItem('favorities')) || [] ;

export let websiteState = {
isLoading: false,
error: null,
hasSearched: false
}