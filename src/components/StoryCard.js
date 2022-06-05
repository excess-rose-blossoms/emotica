import '../css/story-card.css'

function StoryCard(props) {
  return (
    <div className='story-card'>
      <div className='content-container'>
        <div className='info-container'>
          <div className='header-text'>TITLE</div>
          {props.title}
          <div className='header-text'>AUTHOR</div>
          {props.author}
        </div>

        <div className='divider-container'>
          ahha
        </div>

        <div className='description-container'>
          <div>Description: {props.description}</div>
          <div>Body: {props.body}</div>
        </div>

      </div>

      <div className='deco-container'>hoohoo</div>
    </div>
  );
}

export default StoryCard;