import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
import type { ComponentType } from 'preact';
import withHydration from './with-hydration';
import './like-form.css';

interface Props {
  id: number;
}

const LikeForm: ComponentType<Props> = ({ id }) => {
  const [likes, setLikes] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return html`
    <form
      action=${`/like/${id}`}
      method="post"
      class="like-form"
    >
      <button
        aria-label="Like this image"
        class="like-form-button"
        onClick=${handleClick}
      >
        ❤️
      </button>
      ${likes}
    </form>
  `;
}

export default withHydration(LikeForm);