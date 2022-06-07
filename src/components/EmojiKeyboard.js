import '../css/components/emoji-keyboard.css';
import { useState } from 'react';
import Picker from 'emoji-picker-react';

function EmojiKeyboard(props) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    props.useChosenEmoji(emojiObject.emoji)
  };

  return (
    <div className="emoji-keyboard">
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
}

export default EmojiKeyboard;