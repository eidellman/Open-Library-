import { InputSection } from '../features/InputSection';
import { favorities } from '../../variables';
import { Favorities } from '../features/Favorites';
import { BookGrid } from '../features/BookGrid';

export function HomePage() {
  return `
  <main>
    ${InputSection()}
    <div class="book-layout">
      <div class="book-grid-container">
      ${BookGrid()}
      </div>
      ${favorities.length > 0 ? Favorities() : ''}
    </div>
  </main>
  `;
}

