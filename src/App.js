import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
import EmojiKeyboard from './components/EmojiKeyboard';
import NavBar from './components/NavBar';
import './css/components/app.css';

function App() {
  return (
    <div className="app-container">
      <NavBar/>
      <div className="search-container">
        <div className="search-item__left">
          <StoryForm/>
        </div>
        <div className="search-item__right"> <StoryList/> </div>
      </div>
    </div>
  );
}

export default App;