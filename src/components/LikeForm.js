import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
import withHydration from './with-hydration.js';
import './LikeForm.css';

function LikeForm({ id }) {
  const [likes, setLikes] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return html`
    <form
      action=${`/like/${id}`}
      method="post"
      class="LikeForm"
    >
      <button
        aria-label="Like this image"
        class="LikeForm__button"
        onClick=${handleClick}
      >
        ❤️
      </button>
      ${likes}
    </form>
  `;
}

export default withHydration(LikeForm);
