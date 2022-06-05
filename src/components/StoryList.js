import StoryCard from './StoryCard';
import { useSelector } from 'react-redux';
import '../css/components/story-list.css';

function StoryList() {
  const stories = useSelector((state) => state.stories.value);

  return (
    <div className='story-list'>
      {stories.map(story => (<StoryCard key={story.title} {...story}/>))}
    </div>
  );
}

export default StoryList;