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
    <Picker onEmojiClick={onEmojiClick} pickerStyle={props.pickerStyle}/>
  );
}

export default EmojiKeyboard;