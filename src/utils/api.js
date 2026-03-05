


export async function searchBooks() {
  try {
    const value = document.querySelector(".search-input").value;
  

    if(value){
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(value)}`);
      const data = await response.json();
      document.querySelector(".search-input").value = "";
      return data.docs;
    }

    
  
  } catch (error) {
    console.log("error");
  }

}
