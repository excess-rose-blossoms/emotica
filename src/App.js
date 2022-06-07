import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
import EmojiKeyboard from './components/EmojiKeyboard';
import './css/components/app.css';

function App() {
  return (
    <div className="search-container">
      <div className="search-item__left">
        <StoryForm/>
      </div>
      <div className="search-item__right"> <StoryList/> </div>
    </div>
  );
}

export default App;