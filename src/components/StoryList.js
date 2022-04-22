import StoryCard from './StoryCard';
import { useSelector } from 'react-redux'

function StoryList() {
  const stories = useSelector((state) => state.stories.value);

  return (
    <div className='StoryList'>
      {stories.map(story => (<StoryCard key={story.title} {...story}/>))}
    </div>
  );
}

export default StoryList;