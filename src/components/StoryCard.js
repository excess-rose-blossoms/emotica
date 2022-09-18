import '../css/components/story-card.css';

function StoryCard(props) {
  return (
    <div className='story-card'>
      <div className='content-container'>
        <div className='info-container'>
          <div className='info-container__item'>
            <div className='header-text'>TITLE</div>
            <div className='emoji-text'>{props.title}</div>
          </div>
          <div className='info-container__item'>
            <div className='header-text'>AUTHOR</div>
            <div className='emoji-text'>{props.author}</div>
          </div>

      </div>
        <div className='divider-container'> <span className='divider-container__text'>emotica</span> </div>
        <div className='description-container'>
          <div className='description-text'>SUMMARY</div>
          <div className='description-field'>{props.description}</div>
          <div className='description-text'>STORY</div>
          <div className='description-field'>{props.body}</div>
        </div>
      </div>

      <div className='deco-container'></div>
    </div>
  );
}

export default StoryCard;