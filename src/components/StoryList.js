import StoryCard from './StoryCard';
import { useSelector } from 'react-redux';
import '../css/components/story-list.css';
import Icon from './Icon';
import { envelope } from "./All";

function StoryList() {
  const stories = useSelector((state) => state.stories.value);
  return (
    <div className='list-container'>
      <div className='story-list'>
        {stories.map(story => (<StoryCard key={story.title} {...story}/>))}
      </div>
    </div>
  );
}

export default StoryList;