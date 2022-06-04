import StoryList from '../components/StoryList';
import StoryForm from '../components/StoryForm';
import '../css/search-page.css';

function SearchPage() {
  return (
    <div className="search-container">
      <div style={{"flex-grow": "1"}}> <StoryForm/> </div>
      <div style={{"flex-grow": "1"}}> <StoryList/> </div>
    </div>
  );
}

export default SearchPage;