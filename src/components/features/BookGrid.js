import { Card } from "../ui/Card";
import {bookList} from '../../variables';


export function BookGrid() {
  return `<section class="book-grid">
  ${bookList.books.map((book) => Card(book)).join("")}
</section>`;
}
