import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
import EmojiKeyboard from './components/EmojiKeyboard';
import './css/components/app.css';

function App() {
  return (
    <div className="search-container">
      <div className="search-item__left">
        <div className="item-tl"><StoryForm/></div>
        <div className="item-bl"><EmojiKeyboard/></div>
      </div>
      <div className="search-item__right"> <StoryList/> </div>
    </div>
  );
}

export default App;