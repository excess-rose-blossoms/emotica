import '../css/components/story-card.css';

function StoryCard(props) {
  return (
    <div className='story-card'>
      <div className='content-container'>
        <div className='info-container'>
          <div className='header-text'>TITLE</div>
          <div>{props.title}</div>
          <div className='header-text'>AUTHOR</div>
          <div>{props.author}</div>
        </div>

        <div className='divider-container'>
          <span style={{"backgroundColor": "white", "writingMode": "vertical-lr", "transform": "rotate(180deg)", "paddingTop": "10px", "paddingBottom": "10px"}}>Emotica</span>
        </div>

        <div className='description-container'>
          <div style={{"paddingBottom": "10px"}}>
            Summary<br/>
            {props.description}
          </div>
          <div style={{"borderTop":"3px dotted black", "paddingTop": "10px"}}>
          Story<br />
          {props.body}
          </div>
        </div>

      </div>

      <div className='deco-container'></div>
    </div>
  );
}

export default StoryCard;