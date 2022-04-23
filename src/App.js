import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
import './css/app.css';

function App() {
  return (
    <div className="App">
      <StoryForm/>
      <StoryList/>
    </div>
  );
}

export default App;